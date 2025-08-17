# Cart & Cart Item Module - Technical Plan

## Feature Description
Implement cart and cart item modules that follow the existing NestJS model architecture patterns. The cart module will provide comprehensive shopping cart functionality for users to add medications, manage quantities, calculate totals, and convert carts to orders. The schema is already defined in Prisma with Cart and CartItem models having relationships with User and Medication.

## Files to Create/Modify

### New Files to Create
- `src/models/cart/cart.controller.ts` - REST endpoints for cart operations
- `src/models/cart/cart.service.ts` - Business logic layer
- `src/models/cart/cart.repo.ts` - Database operations layer
- `src/models/cart/cart.module.ts` - Module configuration
- `src/models/cart/dto/create-cart.dto.ts` - Create DTO (extends generated)
- `src/models/cart/dto/find-carts.dto.ts` - Find/search DTO
- `src/models/cart/exceptions/cart-not-found.exception.ts` - Not found exception
- `src/models/cart/exceptions/cart-service-input.exception.ts` - Service input exception

- `src/models/cartItem/cartItem.controller.ts` - REST endpoints for cart item operations
- `src/models/cartItem/cartItem.service.ts` - Business logic layer
- `src/models/cartItem/cartItem.repo.ts` - Database operations layer
- `src/models/cartItem/cartItem.module.ts` - Module configuration
- `src/models/cartItem/dto/create-cartItem.dto.ts` - Create DTO (extends generated)
- `src/models/cartItem/dto/find-cartItems.dto.ts` - Find/search DTO
- `src/models/cartItem/exceptions/cartItem-not-found.exception.ts` - Not found exception
- `src/models/cartItem/exceptions/cartItem-service-input.exception.ts` - Service input exception

### Files to Modify
- `src/app.module.ts` - Add CartModule and CartItemModule to imports array

### Existing Generated Files (Already Available)
- `src/generated/cart/dto/create-cart.dto.ts` - Base create DTO
- `src/generated/cart/dto/update-cart.dto.ts` - Base update DTO
- `src/generated/cart/dto/connect-cart.dto.ts` - Connect DTO
- `src/generated/cart/entities/cart.entity.ts` - Entity definition
- `src/generated/cartItem/dto/create-cartItem.dto.ts` - Base create DTO
- `src/generated/cartItem/dto/update-cartItem.dto.ts` - Base update DTO
- `src/generated/cartItem/dto/connect-cartItem.dto.ts` - Connect DTO
- `src/generated/cartItem/entities/cartItem.entity.ts` - Entity definition

## Implementation Details

### Cart Controller Structure
Follow the exact pattern from `category.controller.ts`:
- `POST /` - Create cart (authenticated user only)
- `GET /` - Find all user carts (authenticated user only)
- `GET /:id` - Find cart by ID (authenticated user only)
- `PATCH /:id` - Update cart (authenticated user only)
- `DELETE /:id` - Delete cart (authenticated user only)
- `GET /:id/items` - Get cart items for specific cart
- `POST /:id/convert-to-order` - Convert cart to order

### CartItem Controller Structure
- `POST /` - Add item to cart (authenticated user only)
- `GET /` - Find all cart items (authenticated user only)
- `GET /:id` - Find cart item by ID (authenticated user only)
- `PATCH /:id` - Update cart item quantity (authenticated user only)
- `DELETE /:id` - Remove item from cart (authenticated user only)
- `GET /cart/:cartId` - Get all items for specific cart

### Cart Service Layer
Implement standard CRUD operations following `category.service.ts` pattern:
- `create()` - Create new cart for authenticated user
- `findAll()` - Get paginated carts for authenticated user with optional filtering
- `findOneById()` - Get single cart by ID (user-scoped)
- `update()` - Update cart (user-scoped)
- `remove()` - Delete cart (user-scoped)
- `getCartItems()` - Get all items for a specific cart
- `convertToOrder()` - Convert cart to order with items

### CartItem Service Layer
- `create()` - Add medication to cart with quantity validation
- `findAll()` - Get paginated cart items for authenticated user
- `findOneById()` - Get single cart item by ID (user-scoped)
- `update()` - Update cart item quantity (user-scoped)
- `remove()` - Remove item from cart (user-scoped)
- `findByCartId()` - Get all items for specific cart

### Repository Layer
Follow `category.repo.ts` patterns with Prisma operations:
- Include user and medication relationships in queries
- Use standard pagination with BasePaginationDto
- Implement proper error handling for Prisma operations
- Support user-scoped operations with userId filtering
- Handle cart status management (ACTIVE, IDLE, ABANDONED)
- Implement total price calculation logic

### DTOs
- `CreateCartDto` - Extend generated DTO, add userId from authenticated user
- `FindCartsDto` - Extend BasePaginationDto with cartStatus filter
- `CreateCartItemDto` - Extend generated DTO, add medicationId and cartId
- `FindCartItemsDto` - Extend BasePaginationDto with cartId filter

### Module Configuration
Follow `category.module.ts` pattern:
- Import PrismaModule
- Export CartService and CartItemService
- Register controllers and providers

## Database Schema (Already Defined)
The Prisma schema already includes:
```prisma
model Cart {
  id         String     @id @default(uuid())
  totalPrice Decimal    @default(0) @db.Decimal(10, 2)
  cartStatus CartStatus @default(ACTIVE)
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt

  user   User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId String
  items  CartItem[]

  @@index([userId, cartStatus])
  @@index([createdAt])
}

model CartItem {
  id       String  @id @default(uuid())
  price    Decimal @db.Decimal(10, 2)
  quantity Int

  medication   Medication @relation(fields: [medicationId], references: [id], onDelete: Cascade)
  medicationId Int
  cart         Cart       @relation(fields: [cartId], references: [id])
  cartId       String

  @@index([cartId])
  @@index([medicationId])
  @@index([cartId, medicationId])
}

enum CartStatus {
  IDLE
  ACTIVE
  ABANDONED
}
```

## Business Logic Requirements

### User Scoping
- All cart operations must be scoped to the authenticated user
- Users can only access their own carts and cart items
- Cart creation automatically associates with authenticated user

### Cart Management
- Users can have multiple carts with different statuses
- Cart status transitions: ACTIVE → IDLE → ABANDONED
- Automatic total price calculation based on cart items
- Cart cleanup for abandoned carts

### Cart Item Management
- Add medications to cart with quantity validation
- Prevent adding more than available stock
- Update quantities with stock validation
- Remove items from cart
- Real-time price calculation

### Order Conversion
- Convert active cart to order
- Transform cart items to order items
- Update cart status to IDLE after conversion
- Validate stock availability before conversion

### Stock Validation
- Check medication stock before adding to cart
- Prevent adding more than available quantity
- Update stock validation on quantity changes
- Handle stock changes during order conversion

## Implementation Phases

### Phase 1: Core Model Implementation
1. Create cart and cartItem module files (controller, service, repo, module)
2. Implement basic CRUD operations with user scoping
3. Add modules to app.module.ts
4. Test basic functionality

### Phase 2: Enhanced Features
1. Implement cart item management with stock validation
2. Add total price calculation logic
3. Implement cart status management
4. Add order conversion functionality

### Phase 3: Advanced Features
1. Add cart analytics and reporting
2. Implement cart cleanup for abandoned carts
3. Add bulk operations for cart items
4. Optimize performance with proper indexing

## Key Architectural Patterns
- Follow existing NestJS model architecture (Controller → Service → Repository)
- Use generated DTOs from Prisma schema
- Implement user-scoped operations (no @IsAdmin() decorator needed)
- Use JWT authentication for all operations
- Follow established error handling patterns
- Use BasePaginationDto for pagination
- Implement cart-specific business logic for e-commerce operations
- Real-time price calculation and stock validation
