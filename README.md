# Learning-Jest
- Getting Started with Jest and SuperTest

## Tech Stack
- Node js
- Express
- Mongoose
- Morgan
- Cors

## Installation
- Clone the [repo](https://github.com/nwachee/Learning-Jest.git) 
``` js
- Run `npm install ` in your terminal to install packages in package.json
- Create a `.env file` and fill in values for the following variables: - `MONGO_URI`
- Finally run `npm start` in your terminal
```

### Endpoints : 
- Healthcheck: `/api/healthcheck` 
    [ GET: Server Health Check ]

 - `user: `
    [ POST: create a new user]  `/api/user`
    [ POST: Send an invite]  `/api/user/invite`
    [ GET: get all users]  `/api/user`
    [ GET: get a single user] `/api/user/<id>`
    [ PUT: update or replace users] `/api/user/<id>`
    [ DELETE: delete a user] `/api/user/<id>`

## License
This project is licensed under the MIT License.

> Copyright (c) 2023 Nwachee