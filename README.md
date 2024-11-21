"# api-mvc-node-mongodb" 

This will start the server on port 3000 by default.

## API Endpoints

The API provides the following endpoints for managing user data:

GET Methods:

    /api/users: Returns a list of all users.
    /api/usercount: Returns the total number of users.
    /api/users/:clientId: Retrieves a specific user by their ID.
    /api/username/:name: Retrieves a user by their username (case-insensitive).

POST Method:

    /api/users: Creates a new user. The request body should contain the user data.

PUT Method:

    /api/users/:clientId: Updates an existing user's data. The request body should contain the updated user information.

DELETE Method:

    /api/users/:clientId: Deletes a user by their ID.

## Error Handling:

The API returns appropriate error codes for failed requests, such as 400 (Bad Request) for invalid data, 404 (Not Found) for non-existent resources, and 500 (Internal Server Error) for unexpected issues.