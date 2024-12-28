import express from "express";
import customerModel from "../../models/Customer/Customer.js";

const router = express.Router();

router.get("/get", (req, res) => {
  try {
    res.status(200).json({ msg: "get a customer" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.get("/getall", (req, res) => {
  try {
    res.status(200).json({ msg: "get all customers" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.put("/update", (req, res) => {
  try {
    res.status(200).json({ msg: "update a customer" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.delete("/delete", (req, res) => {
  try {
    res.status(200).json({ msg: "delete a customer" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.delete("/deleteall", (req, res) => {
  try {
    res.status(200).json({ msg: "delete all customers" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;