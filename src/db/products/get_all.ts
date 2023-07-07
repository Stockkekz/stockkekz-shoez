import { query } from "..";
import { Product } from "../schema";

export async function getAllProducts(): Promise<Product[]> {
    let products = [];
    try {
        const { rows } = await query("SELECT * FROM products");
        if (rows.length == 0) {
            throw new Error("no products found");
        }

        products = rows;
    } catch (err) {
        console.error(err);
    }

    return products;
}
