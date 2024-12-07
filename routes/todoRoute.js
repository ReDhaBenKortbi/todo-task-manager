import express from "express";
import { todoController } from "../controllers/todoController.js";

export const todoRouter = express.Router();

todoRouter.get("/", todoController.renderHomePage);
todoRouter.post("/create", todoController.createTodo);
todoRouter.post("/delete/:id", todoController.deleteTodo);
todoRouter.post("/mark-completed/:id", todoController.markTodoAsCompleted);
