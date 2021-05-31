# Typescript and Node bootstrap project

The inital objective of this project is create a bootstrap app to start a coding app api with typescript and node. This project use a nodemon and tsc cli to run in development mode and use a jest to run tests.

## How to work

In the root folder are the global settings and main scripts, the "scripts" folder contains all the scripts to run tests and specifics modes.
To run project in development mode execute this:
- `yarn install` in the root folder
- `yarn intall` in the server folder
- `yarn run server:start`in the root folder. This will build a `server/src/` files with a `tsc` cli and run a `nodemon` watching a `server/dist/index.js`

## Nexts
- Create a simple server project with design patterns and tests
- Create a complete client app with AngularJS
- Migrating a AngularJS client to ReactJS