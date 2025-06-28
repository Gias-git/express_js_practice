import express, { Application, Request, Response } from 'express'
const app: Application = express()
import fs from "fs"
import path from 'path'
import { todosRouter } from './todos/todos.routes'



app.use(express.json())
app.use("/todos", todosRouter)


const filepath = path.join(__dirname, "../../Db/todo.json")

app.get('/', (req: Request, res: Response) => {
    res.send('WELCOME TO TODOS APPasas')
})


export default app;
