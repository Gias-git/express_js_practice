"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
app.use(express_1.default.json());
const todosRouter = express_1.default.Router();
app.use("/post", todosRouter);
todosRouter.get("/new", (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: "utf-8" });
    res.json({
        message: "from todos router",
        data
    });
});
const filepath = path_1.default.join(__dirname, "../../Db/todo.json");
app.get('/', (req, res) => {
    res.send('WELCOME TO TODOS APPasas');
});
app.get('/todos', (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: "utf-8" });
    console.log(req.params);
    console.log(req.query);
    // console.log(req.query)
    res.send(data);
});
app.post('/todos/create-todo', (req, res) => {
    const { title, completed } = req.body;
    console.log(title, completed);
    res.send("DATA POST");
});
app.get('/todos', (req, res) => {
    console.log(req.query);
    res.send('Find data');
});
exports.default = app;
