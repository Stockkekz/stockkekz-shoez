import { Pool } from "pg";
import { readFileSync } from "fs";
import { Product } from "./schema";

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: parseInt(process.env.PG_PORT),
});

const query = (text: string, params?: any[]) => pool.query(text, params);

const initDB = async () => {
    const init_db = readFileSync("src/db/sql/init_db.sql").toString();
    await query(init_db);

    const isEmpty = !(await query("SELECT EXISTS (SELECT * FROM products);")).rows[0].exists;
    if (isEmpty) {
        const productsString = readFileSync("data/products.json").toString();
        const products: Product[] = JSON.parse(productsString);
        for (const p of products) {
            query(
                "INSERT INTO products(brand_name, category, collection_slugs, color, designer, details, gender, grid_pic_url, main_pic_url, orig_pic_url, has_pic, has_stock, keywords, midsole, name, nickname, release_date_unix, release_year, retail_price_cents, silhouette, sizes, sku, slug, status, description, upper_material) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26);",
                [
                    p.brand_name,
                    p.category,
                    p.collection_slugs,
                    p.color,
                    p.designer,
                    p.details,
                    p.gender,
                    p.grid_pic_url,
                    p.main_pic_url,
                    p.orig_pic_url,
                    p.has_pic,
                    p.has_stock,
                    p.keywords,
                    p.midsole,
                    p.name,
                    p.nickname,
                    p.release_date_unix,
                    p.release_year,
                    p.retail_price_cents,
                    p.silhouette,
                    p.sizes,
                    p.sku,
                    p.slug,
                    p.status,
                    p.description,
                    p.upper_material,
                ]
            );
        }
    }
};

export { initDB, query };
