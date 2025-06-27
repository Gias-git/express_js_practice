import express, { Application, Request, Response } from 'express'
const app: Application = express()
import fs from "fs"
import path from 'path'

app.use(express.json())

const todosRouter = express.Router()
app.use("/post", todosRouter)

todosRouter.get("/new", (req: Request, res: Response) => {
    const data = fs.readFileSync(filepath, { encoding: "utf-8" })

    res.json({
        message: "from todos router",
        data
    })
})




const filepath = path.join(__dirname, "../../Db/todo.json")

app.get('/', (req: Request, res: Response) => {
    res.send('WELCOME TO TODOS APPasas')
})


app.get('/todos', (req: Request, res: Response) => {
    const data = fs.readFileSync(filepath, { encoding: "utf-8" })

    console.log(req.params)
    console.log(req.query)
    // console.log(req.query)
    res.send(data)

})

app.post('/todos/create-todo', (req: Request, res: Response) => {

    const { title, completed } = req.body;
    console.log(title, completed);
    res.send("DATA POST");
})


app.get('/todos', (req: Request, res: Response) => {
    console.log(req.query)

    res.send('Find data')
})
export default app;
