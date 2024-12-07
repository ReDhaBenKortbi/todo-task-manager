import { model, Schema } from "mongoose";

const todoSchema = new Schema({
  title: String,
  state: {
    type: String,
    default: "todo",
  },
});

export const Todo = model("todo", todoSchema, "todo_tasks");
