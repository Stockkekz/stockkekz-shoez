import "dotenv/config";
import express from "express";
import { initDB } from "./db";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

initDB();

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
