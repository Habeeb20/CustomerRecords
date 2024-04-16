import express from "express";
import { Router } from "express";
import { getCustomerdetails, getAllCustomerDetails, UpdateCustomerDetails, deleteCustomerDetails,createCustomer } from "../Controller/CustomerController.js";
const router = express.Router()


router.get("/", getAllCustomerDetails)
router.post("/", createCustomer);
router.get("/:id", getCustomerdetails);
router.delete("/:id", deleteCustomerDetails);
router.patch("/:id", UpdateCustomerDetails);

export default router;