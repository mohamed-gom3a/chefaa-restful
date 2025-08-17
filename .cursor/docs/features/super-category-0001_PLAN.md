# Super Category Feature - Technical Plan

## Feature Description
Implement a super category model that follows the existing category model architecture. The super category feature will provide a hierarchical categorization system where super categories contain multiple categories. The schema is already defined in Prisma with SuperCategory and Category models having a one-to-many relationship.

## Files to Create/Modify

### New Files to Create
- `src/models/superCategory/superCategory.controller.ts` - REST endpoints for super category operations
- `src/models/superCategory/superCategory.service.ts` - Business logic layer
- `src/models/superCategory/superCategory.repo.ts` - Database operations layer
- `src/models/superCategory/superCategory.module.ts` - Module configuration
- `src/models/superCategory/dto/create-superCategory.dto.ts` - Create DTO (extends generated)
- `src/models/superCategory/dto/find-superCategories.dto.ts` - Find/search DTO
- `src/models/superCategory/exceptions/superCategory-not-found.exception.ts` - Not found exception
- `src/models/superCategory/exceptions/superCategory-name-in-use.exception.ts` - Name conflict exception

### Files to Modify
- `src/app.module.ts` - Add SuperCategoryModule to imports array

### Existing Generated Files (Already Available)
- `src/generated/superCategory/dto/create-superCategory.dto.ts` - Base create DTO
- `src/generated/superCategory/dto/update-superCategory.dto.ts` - Base update DTO
- `src/generated/superCategory/dto/connect-superCategory.dto.ts` - Connect DTO
- `src/generated/superCategory/entities/superCategory.entity.ts` - Entity definition

## Implementation Details

### Controller Structure
Follow the exact pattern from `category.controller.ts`:
- `POST /` - Create super category (admin only)
- `GET /` - Find all super categories (public)
- `GET /:id` - Find super category by ID (public)
- `PATCH /:id` - Update super category (admin only)
- `DELETE /:id` - Delete super category (admin only)
- `PATCH /:id/image` - Upload super category image (admin only)

### Service Layer
Implement standard CRUD operations following `category.service.ts` pattern:
- `create()` - Create new super category
- `findAll()` - Get paginated super categories with optional filtering
- `findOneById()` - Get single super category by ID
- `update()` - Update super category
- `remove()` - Delete super category
- `uploadImage()` - Handle image upload

### Repository Layer
Follow `category.repo.ts` patterns with Prisma operations:
- Include related categories in queries where appropriate
- Use standard pagination with BasePaginationDto
- Implement proper error handling for Prisma operations
- Support image upload functionality

### DTOs
- `CreateSuperCategoryDto` - Extend generated DTO, omit image field
- `FindSuperCategoriesDto` - Extend BasePaginationDto with searchName filter

### Module Configuration
Follow `category.module.ts` pattern:
- Import PrismaModule and MulterModule
- Export SuperCategoryService
- Register controller and providers

## Database Schema (Already Defined)
The Prisma schema already includes:
```prisma
model SuperCategory {
  id    Int     @id @default(autoincrement())
  name  String  @unique
  image String?

  categories Category[]
}

model Category {
  id              Int           @id @default(autoincrement())
  name            String        @unique
  image           String?
  superCategory   SuperCategory @relation(fields: [superCategoryId], references: [id], onDelete: Cascade)
  superCategoryId Int

  medications Medication[]

  @@index([superCategoryId])
}
```

## Implementation Phases

### Phase 1: Core Model Implementation
1. Create superCategory module files (controller, service, repo, module)
2. Implement basic CRUD operations
3. Add module to app.module.ts
4. Test basic functionality

### Phase 2: Enhanced Features
1. Add image upload functionality
2. Implement search and filtering
3. Add proper exception handling
4. Include category relationships in queries

## Key Architectural Patterns
- Follow existing NestJS model architecture (Controller → Service → Repository)
- Use generated DTOs from Prisma schema
- Implement admin-only operations with @IsAdmin() decorator
- Use @Public() decorator for read operations
- Follow established error handling patterns
- Use BasePaginationDto for pagination
- Implement file upload with MulterModule
