import "dotenv/config";
import express from "express";
import { initDB } from "./db";
import mountRoutes from "./routes";
import cors from "cors";

const app = express();
app.use(cors());
const port = parseInt(process.env.PORT);

mountRoutes(app);

initDB();

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
