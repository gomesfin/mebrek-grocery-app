# React + Express Grocery Shopping App with Nutrition Information

This is a full-stack shopping app built with React for the frontend, Express.js for the backend, and MongoDB for the database. It allows users to search for grocery items, create an account, manage a shopping cart, and view nutritional information for each item using the Nutritionix API.

## Features

- **Item Search**: Search for grocery items and view their details such as store, unit, and price.
- **User Registration**: Create an account and log in.
- **Cart Management**: Add items to a shopping cart.
- **Nutritional Information**: Display nutritional content (calories, protein, carbs, fat) for each item using the Nutritionix API.

## Prerequisites

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: [Set up MongoDB](https://www.mongodb.com/)
- **Nutritionix API Key**: [Get a Nutritionix API key](https://www.nutritionix.com/business/api)

## Getting Started

1. **Clone the Repository**:
   ```
   git clone https://github.com/gomesfin/mebrek-grocery-app.git
   cd project-folder
   ```

2. Install Dependencies:

Backend:

```
cd backend
npm install
```

Frontend:

```
cd frontend
npm install
```


3. Set Environment Variables: 

Create a .env file in the backend with your MongoDB URI, Nutritionix API credentials, and JWT secret.

```
MONGO_URI=your_mongo_uri
NUTRITIONIX_APP_ID=your_nutritionix_app_id
NUTRITIONIX_API_KEY=your_nutritionix_api_key
JWT_SECRET=your_jwt_secret
```

4. Run the Servers:

Backend:

```
cd backend
npm start
```

Frontend:


```
cd frontend
npm start
```


Visit http://localhost:3000 to use the app.