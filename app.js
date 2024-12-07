import express from "express";
import "dotenv/config.js";
import { todoRouter } from "./routes/todoRoute.js";

export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(todoRouter);

app.set("views", "./views");
app.set("view engine", "ejs");
