const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51ME06zKXiVVeS2LSqp0Uad8PF30Gp33xptOCYWa7PAsWgQIVwcKFgKE3bnC2Iq6kUomnu3aNZQ5Mc31JBxiHvrJR00zUuAXOn6");
const cors = require("cors");
const router = require("express").Router()


// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(express.json());

router.post("/", (req, res) => {
  const { id, amount } = req.body;

  if (req.body) {
    const payment = stripe.paymentIntents.create({
      amount,
      currency: "€",
      description: "Reserva",
      payment_method: id,
      confirm: true,
    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  }
  else {
    console.log('error');

  }


});

