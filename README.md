# Auth Wiki backend [NestJs]
## API DOCUMENTATION
### Auth
#### Sign In:
  ```js
    POST https://auth-wiki-team10.herokuapp.com/api/auth/register/
  ```
  **Body**
  ```js
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
  ```
  **Response**
  ```js
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
  ```