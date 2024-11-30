WORKSHEET API SETUP GUIDE

1. PREREQUISITES
---------------
- Node.js (v22 or higher)
- Docker and Docker Compose
- npm or yarn

2. INSTALLATION
--------------
1. Install dependencies:
   npm install

2. Create .env file in root directory with:
   PORT=3000
   NODE_ENV=development
   
   # Development Database
   DEV_DB_HOST=localhost
   DEV_DB_PORT=3306
   DEV_DB_USER=worksheet_user
   DEV_DB_PASSWORD=worksheet_password
   DEV_DB_NAME=worksheet_db
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-key-here
   JWT_EXPIRES_IN=24h

3. DATABASE SETUP
----------------
1. Start MySQL database:
   npm run docker:dev

2. Run migrations:
   npm run migration:up

3. Seed initial data:
   npm run seed:all

4. START APPLICATION
-------------------
Development mode:
   npm run dev

Production build:
   npm run build
   npm start

5. API DOCUMENTATION
-------------------
Access Swagger documentation at:
http://localhost:3000/api-docs

6. AVAILABLE ENDPOINTS
---------------------
1. Generate Session Token:
   GET /api/v1/tokens

2. Get Worksheet Tasks:
   GET /api/v1/worksheet-tasks

3. Submit Answer:
   POST /api/v1/answers/{taskId}
   Headers: Authorization: Bearer <token>
   Body: { "optionId": "uuid" }

7. ADDITIONAL COMMANDS
---------------------
- Stop database:
  npm run docker:stop

- Clean database (removes all data):
  npm run docker:clean

- Revert all migrations:
  npm run migration:down:all

- Check migration status:
  npm run migration:status

8. DEVELOPMENT NOTES
-------------------
- API runs on port 3000 by default
- MySQL runs on port 3306
- All endpoints are prefixed with /api/v1
- JWT tokens expire after 24 hours
- Database uses MySQL 5.7 for compatibility 