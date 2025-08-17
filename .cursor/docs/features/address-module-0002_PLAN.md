# Address Module - Technical Plan

## Feature Description
Implement an address module that follows the existing NestJS model architecture patterns. The address module will provide comprehensive address management functionality for users to store, manage, and organize multiple delivery addresses with detailed location information including coordinates, address types, and default preferences. The schema is already defined in Prisma with Address model having a one-to-many relationship with User.

## Files to Create/Modify

### New Files to Create
- `src/models/address/address.controller.ts` - REST endpoints for address operations
- `src/models/address/address.service.ts` - Business logic layer
- `src/models/address/address.repo.ts` - Database operations layer
- `src/models/address/address.module.ts` - Module configuration
- `src/models/address/dto/create-address.dto.ts` - Create DTO (extends generated)
- `src/models/address/dto/find-addresses.dto.ts` - Find/search DTO
- `src/models/address/exceptions/address-not-found.exception.ts` - Not found exception
- `src/models/address/exceptions/address-service-input.exception.ts` - Service input exception

### Files to Modify
- `src/app.module.ts` - Add AddressModule to imports array

### Existing Generated Files (Already Available)
- `src/generated/address/dto/create-address.dto.ts` - Base create DTO
- `src/generated/address/dto/update-address.dto.ts` - Base update DTO
- `src/generated/address/dto/connect-address.dto.ts` - Connect DTO
- `src/generated/address/entities/address.entity.ts` - Entity definition

## Implementation Details

### Controller Structure
Follow the exact pattern from `category.controller.ts`:
- `POST /` - Create address (authenticated user only)
- `GET /` - Find all user addresses (authenticated user only)
- `GET /:id` - Find address by ID (authenticated user only)
- `PATCH /:id` - Update address (authenticated user only)
- `DELETE /:id` - Delete address (authenticated user only)
- `PATCH /:id/set-default` - Set address as default (authenticated user only)

### Service Layer
Implement standard CRUD operations following `category.service.ts` pattern:
- `create()` - Create new address for authenticated user
- `findAll()` - Get paginated addresses for authenticated user with optional filtering
- `findOneById()` - Get single address by ID (user-scoped)
- `update()` - Update address (user-scoped)
- `remove()` - Delete address (user-scoped)
- `setDefault()` - Set address as default for user

### Repository Layer
Follow `category.repo.ts` patterns with Prisma operations:
- Include user relationship in queries
- Use standard pagination with BasePaginationDto
- Implement proper error handling for Prisma operations
- Support user-scoped operations with userId filtering
- Handle default address logic (only one default per user)

### DTOs
- `CreateAddressDto` - Extend generated DTO, add userId from authenticated user
- `FindAddressesDto` - Extend BasePaginationDto with addressType and isDefault filters

### Module Configuration
Follow `category.module.ts` pattern:
- Import PrismaModule
- Export AddressService
- Register controller and providers

## Database Schema (Already Defined)
The Prisma schema already includes:
```prisma
model Address {
  id          Int         @id @default(autoincrement())
  city        String
  streetName  String
  buildingNo  String?
  floor       String?
  apartment   String?
  landmark    String?
  lat         Float?
  lng         Float?
  addressType AddressType @default(HOME)
  isDefault   Boolean     @default(false)
  createdAt   DateTime    @default(now())
  user        User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId      String

  @@index([userId])
  @@index([addressType, isDefault])
  @@index([city])
  @@index([lat, lng])
}

enum AddressType {
  HOME
  WORK
  PHARMACY
}
```

## Business Logic Requirements

### User Scoping
- All address operations must be scoped to the authenticated user
- Users can only access their own addresses
- Address creation automatically associates with authenticated user

### Default Address Management
- Only one address per user can be set as default
- Setting a new default address automatically unsets the previous default
- Default address is used for quick checkout and delivery preferences

### Address Validation
- Required fields: city, streetName
- Optional fields: buildingNo, floor, apartment, landmark, lat, lng
- AddressType enum validation: HOME, WORK, PHARMACY
- GPS coordinates validation (lat/lng pairs)

## Implementation Phases

### Phase 1: Core Model Implementation
1. Create address module files (controller, service, repo, module)
2. Implement basic CRUD operations with user scoping
3. Add module to app.module.ts
4. Test basic functionality

### Phase 2: Enhanced Features
1. Implement default address management logic
2. Add address type filtering
3. Add proper exception handling
4. Include user relationship in queries

## Key Architectural Patterns
- Follow existing NestJS model architecture (Controller → Service → Repository)
- Use generated DTOs from Prisma schema
- Implement user-scoped operations (no @IsAdmin() decorator needed)
- Use JWT authentication for all operations
- Follow established error handling patterns
- Use BasePaginationDto for pagination
- Implement user-specific address management
