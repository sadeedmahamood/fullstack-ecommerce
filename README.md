# Full Stack Ecommerce Application

A modern and responsive full-stack ecommerce web application built using React, Django REST Framework, and Tailwind CSS.  
This project provides a complete online shopping experience with secure authentication, product management, cart functionality, and order handling.

---

# Features

## User Features
- User Registration & Login
- JWT Authentication
- Protected Routes
- Product Listing
- Product Details Page
- Add to Cart
- Update Cart Quantity
- Remove from Cart
- Checkout System
- Order Placement
- User Profile Management
- Responsive User Interface

---

## Admin Features
- Admin Dashboard
- Add Products
- Update Products
- Delete Products
- Manage Orders
- Product Management System

---

# Tech Stack

## Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS
- Vite

---

## Backend
- Django
- Django REST Framework
- JWT Authentication

---

## Database
- SQLite

---

# Project Structure

```bash
fullstack-ecommerce/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/
│   ├── manage.py
│   ├── accounts/
│   ├── products/
│   ├── cart/
│   ├── order/
│
├── .gitignore
├── README.md
```

---

# Authentication

This project uses JWT (JSON Web Token) authentication for secure user login and protected API access.

---

# API Features

- User Authentication APIs
- Product APIs
- Cart APIs
- Order APIs
- Admin Management APIs

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/sadeedmahamood/fullstack-ecommerce.git
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# Environment Variables

Create a `.env` file for storing secret keys and environment configurations.

Example:

```env
SECRET_KEY=your_secret_key
DEBUG=True
```

---


# Future Improvements

- Online Payment Integration
- Product Search & Filters
- Wishlist Feature
- Product Reviews & Ratings
- Deployment
- Email Verification
- Inventory Management

---

# GitHub Repository

https://github.com/sadeedmahamood/fullstack-ecommerce

---

# Author

**Sadeed Mahamood T**

GitHub:  
https://github.com/sadeedmahamood

---

# License

This project is developed for educational and portfolio purposes.
