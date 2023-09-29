# Node.js TypeScript CRUD Project with Sequelize and MySQL

This is a Node.js project template using TypeScript, Sequelize, and MySQL for implementing CRUD (Create, Read, Update, Delete) operations. It follows a layered architecture with separate folders for routes, controllers, database models, and public assets. Additionally, it includes ESLint for code linting and a `dist` folder for the build.

## Prerequisites

Before getting started, make sure you have the following tools and dependencies installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MySQL](https://www.mysql.com/) Database Server

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/sembh1998/node-rest-mysql.git
   cd node-rest-mysql

2. Install dependencies

   ```bash
   npm install

3. Build

   ```bash
   tsc

4. Run nodemon

   ```bash
   nodemon dist/app.js


## Folder structure

- `controllers/`: Contains route controllers for handling CRUD operations.
- `db/`: Holds database configurations
- `public/`: Stores static assets like HTML, CSS, and client-side JavaScript files.
- `routes/`: Defines API routes and their corresponding controllers.
- `models/`: Holds models
- `app.ts`: Main application file.

## License

MIT License