# Auth Wiki backend [NestJs]
## API DOCUMENTATION
### Auth
#### Sign Up:
  ```js
    POST https://auth-wiki-team10.herokuapp.com/api/auth/register/
  ```
  **Body**
  ```js
    {
      "name": "Hamsa",
      "email": "has@hamsa.com",
      "password": "string"
    }
  ```
  **Response**
  ```js
    {
      "name": "Hamsa",
      "email": "has@hamsa.com",
      "createdAt": "2022-08-07T06:12:06.617Z",
      "id": "62ef57b6eca28200167a2860"
    }
  ```
#### Log In:
  ```js
    POST https://auth-wiki-team10.herokuapp.com/api/auth/login/
  ```
  **Body**
  ```js
    {
      "name": "Hamsa",
      "email": "has@hamsa.com",
    }
  ```
  **Response**
  ```js
    {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 eyJpZCI6IjYyZWY0OTQ0NDY1NTRjMzM5ODc1MzlmZiIsIm5hbWUiOiJIYW1zYSIsImVtYWlsIjoiaGFtc2FAaGFtc2EuY29tIiwiaWF0IjoxNjU5ODUyODkyLCJleHAiOjE2NTk4ODg4OTJ9.x7HHawUwvGdsiPfmUangVVFBezHy8XB-Br-eSQYDoSA",

      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWY0OTQ0NDY1NTRjMzM5ODc1MzlmZiIsIm5hbWUiOiJIYW1zYSIsImVtYWlsIjoiaGFtc2FAaGFtc2EuY29tIiwiaWF0IjoxNjU5ODUyODkyLCJleHAiOjE2NjAwMjU2OTJ9.YoxfQNhG3WZLvdn_WL0mK8nFsnYauz_vBCDriaIOdmY"
    }
  ```