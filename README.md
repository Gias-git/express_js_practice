# My Node + TypeScript Project

This project is a basic setup using **Node.js**, **Express**, and **TypeScript**.

## 🛠️ Getting Started

Follow these steps to initialize the project:

```bash
# Step 1: Initialize the project
$ npm init -y

# Step 2: Install TypeScript as a development dependency
$ npm i -D typescript

# Step 3: Install Express
$ npm i express

# Step 4: Initialize TypeScript configuration
$ tsc --init


# for root - 

##  "outDir": "./dist/",
##   "rootDir": "./src/",
----------------------------------------
$ npm i --save-dev @types/express

--------------------------------------------
# for starting server
$ node ./dist/app/app.js

------------------------------------------

# for  typescript file change any auto update in dist -

$ node tsc -w

# when change in js file auto server update

$ npm i -D nodemon


# for start a server by script 
- package.json 
"start" : "nodemon ./dist/app/server.js"

$ npm start