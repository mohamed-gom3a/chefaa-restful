# Medication Import Module

This module provides functionality to import medications into the system via JSON file upload.

## Features

- Import medications from JSON files
- Validation of medication data
- Duplicate handling with `skipDuplicates` option
- Error handling for invalid data
- File type validation (JSON only)

## API Endpoint

### POST /medications/import

Upload a JSON file containing medication data to import medications into the system.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: Form data with `file` field containing a JSON file

**JSON File Format:**
```json
[
  {
    "name": "Medication Name",
    "description": "Optional description",
    "price": 10.99,
    "stock": 100,
    "sellingCount": 0,
    "image": "https://example.com/image.jpg",
    "categoryId": 1,
    "bundleId": 1
  }
]
```

**Required Fields:**
- `name`: String (unique medication name)
- `price`: Number (positive value)

**Optional Fields:**
- `description`: String
- `stock`: Number (defaults to 0)
- `sellingCount`: Number (defaults to 0)
- `image`: String (URL)
- `categoryId`: Number
- `bundleId`: Number

**Response:**
```json
{
  "message": "Successfully imported X medications",
  "imported": 5
}
```

## Error Handling

The module provides comprehensive error handling for:

- Missing or invalid file upload
- Non-JSON file format
- Invalid JSON syntax
- Missing required fields (name, price)
- Invalid data types
- Database errors

## Usage Example

```bash
curl -X POST http://localhost:3000/medications/import \
  -F "file=@medications.json"
```

## Testing

Run the tests with:
```bash
npm test -- src/medication-import/medication-import.service.spec.ts
```
