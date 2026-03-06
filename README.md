# Checkout Flow

## Overview

This project is a simplified **checkout flow**.
The application demonstrates **Server-Side Rendering (SSR) with Next.js**, **state management across pages**, and a **clean, responsive checkout UI**.

The checkout flow guides the user through the following steps:

1. **Cart Summary**
2. **Shipping Address Form**
3. **Payment Confirmation**
4. **Order Success Page**

The application uses **mock cart data fetched via Server-Side Rendering** and maintains checkout state across steps using the **React Context API**.

---

## Live Demo

Deployed application:
`https://form-states.vercel.app/`

---

## Tech Stack

* **Next.js (App Router)** – Framework
* **React** – UI library
* **Tailwind CSS** – Styling
* **React Hook Form** – Form handling & validation
* **Context API** – Global state management
* **Next.js API Routes** – Mock backend API

---

## Application Flow

### 1. Cart / Order Summary

The cart page displays products fetched from the mock API using **Server-Side Rendering**.

Displayed information:

* Product and its price information
* Shipping order details and total price

Users can proceed to checkout using the **"Proceed to Checkout"** button.

---

### 2. Shipping Address

Users enter their shipping details --> 

Basic form validation is implemented:

* Required fields
* Valid email format
* 10-digit phone number

The address is stored in **global context** to persist across checkout steps.

---

### 3. Payment Confirmation

This page displays:

* Final order summary
* Shipping address entered by the user

A **"Pay Securely"** button simulates payment and redirects to the success page.

---

### 4. Order Success

Displays a confirmation message indicating that the order has been successfully placed.

---
## Server-Side Rendering (SSR)

- Cart data is fetched using Next.js Server Components.
- This ensures that cart data is rendered on the server before the page is sent to the browser.

---
## State Management

The application uses the **React Context API** to maintain checkout state across pages.

Global state includes:

* Cart data
* Shipping address

This allows the checkout flow to persist data between:

Cart → Address → Payment → Success

---

## Project Structure

```
src
│
├── app
│   ├── api
│   │   └── cart
│   │       └── route.js
│   │
│   ├── checkout
│   │   └── page.js
│   │
│   ├── payment
│   │   └── page.js
│   │
│   ├── success
│   │   └── page.js
│   │
│   └── page.js
│
├── components
│   ├── CartItem.js
│   ├── OrderSummary.js
│   └── CartPageClient.js
│
├── context
│   └── CheckoutContext.js
│
├── lib
│   └── calculations.js
│
└── data
    └── cartData.js
```

---

## Running the Project Locally

Clone the repository:

```
git clone https://github.com/jenil-p/form-states.git
```

Navigate into the project:

```
cd form-states
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open the application:

```
http://localhost:3000
```

---

## Key Features

* Server-Side Rendering with Next.js
* Context API for cross-page state management
* Responsive UI using Tailwind CSS
* Modular component architecture
* Mock backend using Next.js API routes
* Form validation with React Hook Form
