import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import fs from "fs"
import path from 'path'
import { todosRouter } from './todos/todos.routes'



app.use(express.json())
app.use("/todos", todosRouter)


const filepath = path.join(__dirname, "../../Db/todo.json")

app.get('/',


    async (req: Request, res: Response, next: NextFunction) => {

        try {
            console.log("something")
            res.send("WELCOME TO TODOS")
        } catch (error) {
            next(error);
        }
    }

)


//route not found error {last of the all routes }
app.use((req: Request, res: Response , next: NextFunction) => {
    res.status(400).json({ message: "Route not find" })
})


// global error handling - it's must be last of the all routes
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        console.log("something ERROR")
        res.status(500).json({ message: "Something wrong", error })
    }
})


export default app;
