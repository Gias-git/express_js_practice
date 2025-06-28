"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const config_1 = require("../config/config");
const mongodb_1 = require("mongodb");
exports.todosRouter = express_1.default.Router();
const filepath = path_1.default.join(__dirname, "../../../Db/todo.json");
// read To DO
exports.todosRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield config_1.client.db("todoDB");
    const TodosCollection = yield db.collection("todos");
    const cursor = yield TodosCollection.find();
    const todos = yield cursor.toArray();
    res.json(todos);
}));
// Create To do
exports.todosRouter.post('/create-todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority, isCompleted } = req.body;
    const db = yield config_1.client.db("todoDB");
    const TodosCollection = yield db.collection("todos");
    const todos = yield TodosCollection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: isCompleted
    });
    res.send(todos);
}));
// Search Todo
exports.todosRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield config_1.client.db("todoDB");
    const TodosCollection = yield db.collection("todos");
    const todo = yield TodosCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(todo);
}));
// delete todo
exports.todosRouter.delete("/delete-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield config_1.client.db("todoDB");
    const TodosCollection = yield db.collection("todos");
    const data = yield TodosCollection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(data);
}));
