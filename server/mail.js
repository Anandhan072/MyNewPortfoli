const express = require("express");
const axios = require("axios");
// const cors = require("cors");
const app = express();

// Enable CORS middleware

// const corsOptions = {
//   origin: "http://localhost:1234", // Change to your frontend origin or '*' to allow all
//   methods: ["GET", "POST", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// };
// app.use(cors(corsOptions));

// Middleware to parse incoming JSON requests
app.use(express.json()); // Note the parentheses

// Basic GET route
app.post("/sendmail", async (req, res) => {
  try {
    const refreshUrl = `https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.361fb8dafc764a442c92aad6e09205bf.f52488f6e2ad707578e61e44da850223&client_id=1000.2K9G18F36X1I9D7F0LYCOBNL4BQB6L&client_secret=2cbe4852ecf3a5c31503771eb3fef13582f4538662&grant_type=refresh_token`;

    console.log(req.body);

    const refresh_token = await axios.post(refreshUrl);
    const refresh_ID = await refresh_token.data.access_token;

    if (!refresh_ID) throw new Error("refresh ID not generated");

    const sendMailURL = `https://mail.zoho.com/api/accounts/8929903000000008002/messages`;

    const sentMail = await axios.post(sendMailURL, req.body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Zoho-oauthtoken ${refresh_ID}`,
      },
    });

    if (!sentMail || sentMail.status !== 200) throw new Error("Failed to send email");

    res.json({
      status: "email sent successfully",
      data: sentMail.data,
    });
  } catch (err) {
    console.error("An error occurred:", err.message);

    res.status(500).json({
      status: "error",
      message: err.message || "An error occurred",
    });
  }
});

// Define the port (default to 3000 if no environment variable is set)
const port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

///Accounts ID:  8929903000000008002
