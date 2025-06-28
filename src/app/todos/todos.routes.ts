import express, { Request, Response } from "express";
import fs from "fs"
import path from 'path'

export const todosRouter = express.Router()

const filepath = path.join(__dirname, "../../../Db/todo.json")

todosRouter.get("/new", (req: Request, res: Response) => {
    const data = fs.readFileSync(filepath, { encoding: "utf-8" })

    res.json({
        message: "Welcome from todos router",
        data
    })
})



todosRouter.get('/', (req: Request, res: Response) => {
    const data = fs.readFileSync(filepath, { encoding: "utf-8" })

    console.log(req.params)
    console.log(req.query)
    // console.log(req.query)
    res.send(data)

})

todosRouter.post('/create-todo', (req: Request, res: Response) => {
    const { title, completed } = req.body;
    console.log(title, completed);
    res.send("DATA POST");
})


todosRouter.get('/:id', (req: Request, res: Response) => {
    console.log(req.params)
    res.send('Find data')
})