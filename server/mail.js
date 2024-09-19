/// code: 1000.ba659333c04ae0edd4f421ec8fc581f9.9144c0ba9d6ad371b9b606fd988b473a

//"access_token": "1000.7d7c32d6def14b4ff242fca82ba90fa4.7248756dee3f0f0ae546165ba4e3b9b4",

// code: 1000.c30292c5ad334318d21258757ebe4f72.3eae8b7befcc016425a2ba03c9d80be6

///Accounts ID:  8929903000000008002

//Message
//1000.7b784ade722443fc86313e7794083b67.c4f9beaa640d8fa9e3a6bbc1a1d7c734

// refresh token: 1000.0f5dce3ad0c5fcfb8a9da1bf1731889d.0435ea50a59d528af8bfdacd18a8f072

const express = require(`express`);
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://anandhanportfolio.netlify.app", // Change this to your frontend URL
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.use(express.json());

const url = `https://mail.zoho.com/api/accounts/8929903000000008002/messages`;

app.post("/send-email", async (req, res) => {
  try {
    const refresh = await axios.post(
      `https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.0f5dce3ad0c5fcfb8a9da1bf1731889d.0435ea50a59d528af8bfdacd18a8f072&client_id=1000.2K9G18F36X1I9D7F0LYCOBNL4BQB6L&client_secret=2cbe4852ecf3a5c31503771eb3fef13582f4538662&grant_type=refresh_token`
    );

    const refreshToken = refresh.data.access_token;
    const emailData = {
      fromAddress: "anandhan.sm@zohocorp.com",
      toAddress: `${req.body.toAddress}`,
      subject: "Email - Always and Forever",
      content:
        "Email can never be dead. The most neutral and effective way, that can be used for one-to-many and two-way communication.",
      askReceipt: "yes",
    };

    console.log(req.body.toAddress);
    const response = axios.post(url, req.body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Zoho-oauthtoken ${refreshToken}`,
      },
    });
    res.json({
      status: "message successfully sended",
      data: response,
    });
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
