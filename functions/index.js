const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("PLACE_YOUR_PRIVATE_KEY_HERE");
const PORT = 3002;
// API

// - App config
const app = express();

// - Middlewares
app.use(cors());
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create/:total", async (request, response) => {
  const total = request.params.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    description: "This is test",
    // name: "Mr.XYZ",
    // "shipping[name]": "test address",
  });
  console.log(`Client secret ------->${paymentIntent.client_secret}`);
  // OK - Created
  response.status(200).json({
    clientSecret: paymentIntent.client_secret,
  });
});

// app.listen(PORT, () => {
//   console.log(`Server is listening on the port ${PORT}`);
// });
// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/challenge-3d69d/us-central1/api
