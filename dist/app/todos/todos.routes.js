"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.todosRouter = express_1.default.Router();
const filepath = path_1.default.join(__dirname, "../../../Db/todo.json");
exports.todosRouter.get("/new", (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: "utf-8" });
    res.json({
        message: "Welcome from todos router",
        data
    });
});
exports.todosRouter.get('/', (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: "utf-8" });
    console.log(req.params);
    console.log(req.query);
    // console.log(req.query)
    res.send(data);
});
exports.todosRouter.post('/create-todo', (req, res) => {
    const { title, completed } = req.body;
    console.log(title, completed);
    res.send("DATA POST");
});
exports.todosRouter.get('/:id', (req, res) => {
    console.log(req.params);
    res.send('Find data');
});
