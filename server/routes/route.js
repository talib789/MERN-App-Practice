import { Router } from "express";
import { addTodo, deleteTodo, getAllTodos, toggleTodoDone, updateTodo } from "../controllers/todo-controller.js";

const router = Router();

router.post("/todos",addTodo)
router.get("/todos",getAllTodos)
router.get("/todos/:id",toggleTodoDone)
router.put("/todos/:id",updateTodo)
router.delete("/todos/:id",deleteTodo)
export default router;