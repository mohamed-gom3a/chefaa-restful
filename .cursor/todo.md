# 🔐 Firebase Auth Middleware for Dart Frog

This guide explains how to securely authenticate Firebase users in your Dart Frog backend by verifying Firebase ID tokens using a Node.js microservice.

---

## 📦 Stack Overview

| Component             | Technology                            |
|----------------------|----------------------------------------|
| Backend API          | Dart Frog                              |
| Database             | NeonDB + Stormberry                    |
| Firebase Token Verification | Node.js + Firebase Admin SDK microservice |
| Auth Middleware      | Dart (calls microservice)              |
| Optional Caching     | LRU or Redis (5–15 mins)               |

---

## ✅ Why Use a Node.js Microservice?

Firebase Admin SDK is not available in Dart. Verifying Firebase ID tokens securely requires:
- Validating JWT signatures
- Handling public key rotation
- Ensuring claim integrity (issuer, audience, expiry)

Using a minimal Node.js verifier avoids implementing this complex logic in Dart and gives you a secure, scalable, production-ready solution.

---

## 🛠 Microservice Setup (Node.js)

### 1. Project Structure

```
firebase-token-verifier/
├── index.js
├── firebase.js
├── .env
├── package.json
├── service-account.json (not committed)
```

### 2. index.js

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { verifyToken } from './firebase.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/verify-token', async (req, res) => {
  const { token } = req.body;

  if (!token) return res.status(400).json({ error: 'Token is required' });

  try {
    const uid = await verifyToken(token);
    res.json({ uid });
  } catch (err) {
    console.error('Token verification failed:', err.message);
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Firebase Token Verifier running on port ${PORT}`);
});
```

### 3. firebase.js

```js
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import fs from 'fs';

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT;

if (!fs.existsSync(serviceAccountPath)) {
  throw new Error('❌ Service account not found');
}

initializeApp({
  credential: cert(JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8')))
});

export async function verifyToken(token) {
  const decoded = await getAuth().verifyIdToken(token);
  return decoded.uid;
}
```

### 4. .env

```
FIREBASE_SERVICE_ACCOUNT=./service-account.json
PORT=3000
```

### 5. Install Dependencies

```bash
npm install express firebase-admin cors dotenv
```

---

## 🌐 Dart Frog Integration

### 1. Create `models/request_user.dart`

```dart
class RequestUser {
  const RequestUser._({required this.id});
  final String id;

  static const anonymous = RequestUser._(id: 'anonymous');
}
```

---

### 2. Create Middleware: `middleware/auth.dart`

```dart
import 'dart:convert';
import 'package:dart_frog/dart_frog.dart';
import 'package:http/http.dart' as http;

import '../models/request_user.dart';

Handler middleware(Handler handler) {
  return (context) async {
    final token = _extractToken(context.request);

    if (token == null) {
      return Response(statusCode: 401, body: 'Unauthorized: No token');
    }

    final uid = await _verifyTokenWithMicroservice(token);

    if (uid == null) {
      return Response(statusCode: 401, body: 'Unauthorized: Invalid token');
    }

    final user = RequestUser._(id: uid);
    return handler(context.provide(() => user));
  };
}

String? _extractToken(Request request) {
  final auth = request.headers['authorization'];
  if (auth == null || !auth.toLowerCase().startsWith('bearer ')) return null;
  return auth.split(' ').last.trim();
}

Future<String?> _verifyTokenWithMicroservice(String token) async {
  final verifierUrl = 'http://localhost:3000/verify-token';

  try {
    final response = await http.post(
      Uri.parse(verifierUrl),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'token': token}),
    );

    if (response.statusCode == 200) {
      final json = jsonDecode(response.body);
      return json['uid'] as String?;
    }
  } catch (e) {
    print('Token verification failed: $e');
  }

  return null;
}
```

---

### 3. Apply Middleware Globally in `routes/_middleware.dart`

```dart
import 'package:your_app/middleware/auth.dart' as auth;

Handler middleware(Handler handler) => auth.middleware(handler);
```

---

### 4. Access `RequestUser` in Routes

```dart
import 'package:dart_frog/dart_frog.dart';
import '../models/request_user.dart';

Response onRequest(RequestContext context) {
  final user = context.read<RequestUser>();
  return Response.json(body: {'userId': user.id});
}
```

---

## ✅ Optional Enhancements

- 🧠 **Caching**: Cache token-to-UID in memory for 5–15 minutes
- 🌍 **Deploy**: Push your Node verifier to Cloud Run, Fly.io, Render, or Vercel
- 🔐 **Roles/Claims**: Extend `RequestUser` with roles or Firebase custom claims
- 🧪 **Test**: Use Postman or `curl` to hit `/verify-token` locally

---

## 🧠 Summary

| Area          | Stack Used                            |
|---------------|----------------------------------------|
| Firebase ID Token Verification | Node.js + Firebase Admin SDK         |
| Auth Middleware                | Dart Frog (calls microservice)       |
| User Model                     | `RequestUser` injected per request   |
| Result                         | Secure, scalable Firebase auth flow  |

---

> Need help deploying this or adding Redis-based caching next? Ping me!
