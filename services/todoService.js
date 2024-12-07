import { todoRepo } from "../repositories/todoRepo.js";
class TodoService {
  async createTodo(title) {
    const sanitizedTitle = title.trim();
    if (sanitizedTitle.length <= 10) {
      throw new Error("Enter a valid task title.");
    }

    return await todoRepo.createTodo({ title });
  }
  async getTodos() {
    return await todoRepo.getTodos();
  }
  async deleteTodo(todoId) {
    const todo = await todoRepo.getTodoById(todoId);
    if (!todo) {
      throw new Error("Invalid todo ID.");
    }
    return await todoRepo.deleteTodo(todoId);
  }
  async markTodoAsCompleted(todoId) {
    return await todoRepo.markTodoCompleted(todoId);
  }
}

export const todoService = new TodoService();
