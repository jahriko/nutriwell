# Development Environment Setup

## Prerequisites

- Node.js (version 18.20.2 or >=20.9.0)
- MongoDB (latest version)
- Git

## Setup Instructions

1. Create a Fork of the repository:

https://github.com/jahriko/nutriwell/fork

2. Clone the repository:

   ```
   git clone https://github.com/<your name>/nutriwell
   cd nutriwell
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     PAYLOAD_SECRET=[your-secret-key]
     DATABASE_URI=mongodb://localhost/[your-database-name]
     ```

5. Setup MongoDB:

   - Make sure MongoDB is running on your local machine

6. Start the development server:

   ```
   npm run dev
   ```

7. Access the application:
   - Frontend: http://localhost:3000
   - Payload CMS Admin: http://localhost:3000/admin
