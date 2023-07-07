import express from "express";
import { productsHandler } from "../components/products";

const router = express.Router();

router.route("/products").get(productsHandler);

export default router;
