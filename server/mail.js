const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json);

app.get("/", (req, res) => {
  res.send("hello message received");
});

const port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3000;

app.listen(port, () => {
  console.log(`server started ${port}`);
});
//process.env.X_ZOHO_CATALYST_LISTEN_PORT

/// code: 1000.ba659333c04ae0edd4f421ec8fc581f9.9144c0ba9d6ad371b9b606fd988b473a

//"access_token": "1000.7d7c32d6def14b4ff242fca82ba90fa4.7248756dee3f0f0ae546165ba4e3b9b4",

// code: 1000.c30292c5ad334318d21258757ebe4f72.3eae8b7befcc016425a2ba03c9d80be6

///Accounts ID:  8929903000000008002

//Message
//1000.7b784ade722443fc86313e7794083b67.c4f9beaa640d8fa9e3a6bbc1a1d7c734

// refresh token: 1000.0f5dce3ad0c5fcfb8a9da1bf1731889d.0435ea50a59d528af8bfdacd18a8f072

// origin: "https://anandhanportfolio.netlify.app", // Change this to your frontend URL
// methods: "GET, POST, PUT, DELETE, OPTIONS",
// allowedHeaders: "Content-Type, Authorization",
