1.   OPEN TERMINAL
     mkdir expense-tracker

2.   GO INSIDE
     cd expense-tracker

3.   NOW CREATE BACKEND
     mkdir backend

     GO INSIDE 
     cd backend

4.   INITALIZE NODE PROJECT
     npm init -y


5.   NOW INSTALL PACKAGES
     npm install express cors mongoose dotenv 

6.   FOR AUTO RUN
     npm install -D nodemon


######

AFTER INSTALLING ALL IF U ARE USING es6(ES6) THEN GO IN package.json BELOW  main DO THIS

 "main": "index.js",
 "type":"module"


1. Why  "type":"module" ?
   answer:

 It tells Node:

"This project uses ES6 modules."

Therefore we can write:

import express from "express";

instead of:

const express = require("express");

######

QUESTION AND ANSWERS ON THIS 

1. Why npm init -y?
answer:

npm
Node Package Manager.
It manages packages for our Node project.

init
Means:

Initialize a new Node project.

-y
Automatically accepts the default questions.

Without -y, npm would ask things like:
package name?
version?
description?
entry point?


With:
npm init -y
it creates package.json automatically.

######

2. What each package does
answer:

Package         	Purpose
express	            Create backend/API
mongoose	        Connect/work with MongoDB
cors	            Allow frontend ↔ backend communication
dotenv	            Read .env variables
nodemon	            Automatically restart server during development

######

3. With ES6 Node imports !!
   we write .js means import connectDB from "./config/db.js";
   import like db.js not just db


#####

db.js
 ↓
Connect MongoDB

server.js
 ↓
Start Express + connect DB + routes

User.js
 ↓
Define User structure

userRoutes.js
 ↓
Define /api/users

userController.js
 ↓
Get users + pagination

App.jsx
 ↓
Call API + maintain current page

Pagination.jsx
 ↓
Show 1 2 3 4 5 6 buttons

UserList.jsx
 ↓
Display users