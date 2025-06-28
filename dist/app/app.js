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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const todos_routes_1 = require("./todos/todos.routes");
app.use(express_1.default.json());
app.use("/todos", todos_routes_1.todosRouter);
const filepath = path_1.default.join(__dirname, "../../Db/todo.json");
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("something");
        res.send("WELCOME TO TODOS");
    }
    catch (error) {
        next(error);
    }
}));
//route not found error {last of the all routes }
app.use((req, res, next) => {
    res.status(400).json({ message: "Route not find" });
});
// global error handling - it's must be last of the all routes
app.use((error, req, res, next) => {
    if (error) {
        console.log("something ERROR");
        res.status(500).json({ message: "Something wrong", error });
    }
});
exports.default = app;
