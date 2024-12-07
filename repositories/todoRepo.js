import { Todo } from "../models/todoModel.js";

class TodoRepo {
  async getTodos() {
    return await Todo.find({});
  }
  async createTodo(todoData) {
    return await Todo.create(todoData);
  }
  async deleteTodo(todoId) {
    return await Todo.deleteOne({ _id: todoId });
  }
  async updateTodoTitle(todoId, newTitle) {
    return Todo.updateOne({ _id: todoId }, { title: newTitle });
  }
  async markTodoCompleted(todoId) {
    return Todo.updateOne({ _id: todoId }, { state: "completed" });
  }
  async getTodoById(id) {
    return Todo.findById(id);
  }
}

export const todoRepo = new TodoRepo();
