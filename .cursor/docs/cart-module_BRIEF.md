# Cart & Cart Item Module - Product Brief

## 1. Project Overview / Description

The Cart & Cart Item Module provides comprehensive shopping cart functionality for the pharmacy e-commerce platform. This module enables users to add medications to their cart, manage quantities, calculate totals, and convert the cart into orders. The cart system supports multiple cart items per user, real-time price calculations, and seamless conversion to orders for checkout completion.

## 2. Target Audience

- **Primary**: E-commerce customers building medication orders
- **Secondary**: Pharmacy staff managing customer orders
- **Tertiary**: Admin users monitoring cart analytics and conversions

## 3. Primary Benefits / Features

### For Customers
- **Shopping Cart Management**: Add, remove, and update medication quantities
- **Real-time Pricing**: Automatic total calculation with price updates
- **Cart Persistence**: Save cart items across sessions
- **Quantity Validation**: Prevent adding more than available stock
- **Cart Status Tracking**: Monitor cart state (ACTIVE, IDLE, ABANDONED)
- **Order Conversion**: Seamless transition from cart to order

### For E-commerce Operations
- **Inventory Management**: Real-time stock validation during cart operations
- **Order Processing**: Structured conversion from cart to order items
- **Cart Analytics**: Track cart abandonment and conversion rates
- **Price Accuracy**: Ensure correct pricing throughout the shopping journey
- **User Experience**: Smooth shopping flow with persistent cart state

### Core Features
- Complete cart CRUD operations with user association
- Cart item management (add, update, remove medications)
- Real-time total price calculation
- Stock validation and quantity limits
- Cart status management (ACTIVE, IDLE, ABANDONED)
- Order conversion functionality
- User-specific cart isolation

## 4. High-Level Tech/Architecture Used

### Database Schema
- **Cart Model**: Core entity with totalPrice, cartStatus, and user relationship
- **CartItem Model**: Individual items with medication reference and quantity
- **CartStatus Enum**: IDLE, ACTIVE, ABANDONED states
- **User Relationship**: One-to-many relationship with User model
- **Medication Relationship**: Cart items reference medication inventory

### API Architecture
- **NestJS REST API**: Following established model patterns
- **Prisma ORM**: Type-safe database operations with generated DTOs
- **JWT Authentication**: User-specific cart management
- **Real-time Calculations**: Automatic price and total updates

### Technical Stack
- **Backend**: NestJS 8.x with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based user authorization
- **Validation**: Stock validation and quantity limits
- **Generated DTOs**: Prisma-generated data transfer objects

### Implementation Pattern
- Follows existing NestJS model architecture (Controller → Service → Repository)
- User-scoped operations with proper authorization
- Cart-specific business logic for order conversion
- Integration with medication inventory system
- Real-time price calculation and validation
