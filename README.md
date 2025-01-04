# E-Commerce Inventory System with HarperDB

This project demonstrates a scalable inventory management system using HarperDB, Express (backend), and React with Next.js (frontend).

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Running the Application](#running-the-application)
6. [API Endpoints](#api-endpoints)
7. [Contributing](#contributing)
8. [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)
- HarperDB (Cloud instance or local installation)

## Project Structure

The project is divided into two main directories:

- `/backend`: Contains the Express.js server and HarperDB integration
- `/frontend`: Contains the React frontend built with Next.js

## Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following content:
   ```
   HARPERDB_URL=your_harperdb_url
   HARPERDB_USERNAME=your_harperdb_username
   HARPERDB_PASSWORD=your_harperdb_password
   PORT=3000
   ```
   Replace the HarperDB credentials with your own.

4. Initialize the database (this will create the necessary schema and tables):
   ```
   node src/config/db.js
   ```

## Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the `frontend` directory with the following content:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

## Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```
   The server will start on http://localhost:3000

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```
   The frontend will be available at http://localhost:3001

3. Open your browser and visit http://localhost:3001 to view the application

## API Endpoints

The backend provides the following API endpoints:

- `POST /api/products`: Add or update a product
- `GET /api/products`: Get all products
- `GET /api/products/low-stock`: Get low stock alerts
- `GET /api/analytics/top-products`: Get top products by region
- `POST /api/reviews`: Add a product review
- `GET /api/products/:product_id/reviews`: Get reviews for a specific product

For detailed API documentation, please refer to the `backend/README.md` file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.