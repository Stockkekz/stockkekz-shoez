import { Express } from "express";
import productsRouter from "./products";

const mountRoutes = (app: Express) => {
    app.use("/", productsRouter);
};

export default mountRoutes;
