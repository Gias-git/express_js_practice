"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const todos_routes_1 = require("./todos/todos.routes");
app.use(express_1.default.json());
app.use("/todos", todos_routes_1.todosRouter);
const filepath = path_1.default.join(__dirname, "../../Db/todo.json");
app.get('/', (req, res) => {
    res.send('WELCOME TO TODOS APPasas');
});
exports.default = app;
