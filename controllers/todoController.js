import { todoService } from "../services/todoService.js";

class TodoController {
  static async _handleAction(req, res, action) {
    try {
      await action();
      res.redirect("/");
    } catch (error) {
      const errorMessage = encodeURIComponent(
        error.message || "An unknown error occurred."
      );
      res.redirect(`/?error=${errorMessage}`);
    }
  }

  async renderHomePage(req, res) {
    try {
      const todos = await todoService.getTodos();
      const errorMessage = req.query.error || null;
      res.render("index", { todos, errorMessage });
    } catch (error) {
      const errorMessage = error.message || "An unknown error occured.";
      res.render("index", { todos: [], errorMessage });
    }
  }

  async createTodo(req, res) {
    TodoController._handleAction(req, res, async () => {
      const { title } = req.body;
      await todoService.createTodo(title);
    });
  }

  async deleteTodo(req, res) {
    TodoController._handleAction(req, res, async () => {
      const { id } = req.params;
      await todoService.deleteTodo(id);
    });
  }

  async markTodoAsCompleted(req, res) {
    TodoController._handleAction(req, res, async () => {
      const { id } = req.params;
      await todoService.markTodoAsCompleted(id);
    });
  }
}

export const todoController = new TodoController();
