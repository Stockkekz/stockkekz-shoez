import { Response } from "express";
import { getAllProducts } from "../../db/products/get_all";

export async function productsHandler(req, res: Response) {
    const products = await getAllProducts();
    return res.status(200).json(products);
}
