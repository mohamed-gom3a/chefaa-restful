# Address Module - Product Brief

## 1. Project Overview / Description

The Address Module provides comprehensive address management functionality for the pharmacy e-commerce platform. This module enables users to store, manage, and organize multiple delivery addresses with detailed location information including coordinates, address types, and default preferences. The module is designed to support delivery operations, order fulfillment, and location-based services.

## 2. Target Audience

- **Primary**: E-commerce customers managing delivery addresses
- **Secondary**: Delivery personnel accessing address information
- **Tertiary**: Admin users managing address data and delivery zones

## 3. Primary Benefits / Features

### For Customers
- **Multiple Address Management**: Store and organize multiple delivery addresses
- **Address Types**: Categorize addresses as HOME, WORK, or PHARMACY
- **Default Address**: Set preferred delivery address for quick checkout
- **Location Precision**: GPS coordinates for accurate delivery tracking
- **Address Validation**: Structured address format with required fields

### For E-commerce Operations
- **Delivery Optimization**: Precise location data for route planning
- **Address Verification**: Structured format reduces delivery errors
- **Customer Convenience**: Quick address selection during checkout
- **Location Analytics**: Geographic data for service area analysis

### Core Features
- Complete address CRUD operations with user association
- Address type categorization (HOME, WORK, PHARMACY)
- Default address management per user
- GPS coordinates support for location services
- Address validation and formatting
- User-specific address organization

## 4. High-Level Tech/Architecture Used

### Database Schema
- **Address Model**: Core entity with comprehensive location fields
- **User Relationship**: One-to-many relationship with User model
- **AddressType Enum**: HOME, WORK, PHARMACY categorization
- **Indexed Fields**: Optimized queries for userId, addressType, city, coordinates

### API Architecture
- **NestJS REST API**: Following established model patterns
- **Prisma ORM**: Type-safe database operations with generated DTOs
- **JWT Authentication**: User-specific address management
- **Validation**: Comprehensive address field validation

### Technical Stack
- **Backend**: NestJS 8.x with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based user authorization
- **Validation**: Class-validator for address field validation
- **Generated DTOs**: Prisma-generated data transfer objects

### Implementation Pattern
- Follows existing NestJS model architecture (Controller → Service → Repository)
- User-scoped operations with proper authorization
- Standard CRUD operations with address-specific business logic
- Integration with existing user management system
