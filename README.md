# My Node Project

This project is a content management system built with Node.js and Express.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/manuelquinterosh/API_contentManagement.git
    cd <repository>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables. Create a `.env` file in the root of your project and add the following:
    ```plaintext
    DB_USER=root
    DB_HOST=localhost
    DB_DATABASE=ContentManagement
    DB_PASSWORD=admin
    DB_PORT=3306
    JWT_SECRET=your_jwt_secret
    ```

4. Run the server:
    ```bash
    node src/index.js
    ```

## Usage

Use Postman or any API testing tool to test the endpoints.

## Endpoints

- `POST /content-items` - Create a new content item
- `GET /content-items` - Get all content items
- `GET /content-items/:id` - Get a content item by ID
- `PUT /content-items/:id` - Update a content item
- `DELETE /content-items/:id` - Delete a content item

- `POST /users/register` - Register a new user
- `POST /users/login` - Login a user

- `POST /ratings` - Create a new rating
- `GET /ratings/content/:contentItemId` - Get ratings by content item ID
