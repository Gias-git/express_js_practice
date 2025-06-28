import express, { Request, Response } from "express";
import fs from "fs"
import path from 'path'
import { client } from "../config/config";
import { Collection, ObjectId } from "mongodb";

export const todosRouter = express.Router()

const filepath = path.join(__dirname, "../../../Db/todo.json")




// read To DO
todosRouter.get('/', async (req: Request, res: Response) => {

    const db = await client.db("todoDB")
    const TodosCollection = await db.collection("todos")

    const cursor = await TodosCollection.find()
    const todos = await cursor.toArray()

    res.json(todos);

})


// Create To do

todosRouter.post('/create-todo', async (req: Request, res: Response) => {
    const { title, description, priority, isCompleted } = req.body;

    const db = await client.db("todoDB")
    const TodosCollection = await db.collection("todos")

    const todos = await TodosCollection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: isCompleted
    })


    res.send(todos);
})



// Search Todo

todosRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;

    const db = await client.db("todoDB")
    const TodosCollection = await db.collection("todos")


    const todo = await TodosCollection.findOne({ _id: new ObjectId(id) })

    res.json(todo);

})



// delete todo
todosRouter.delete("/delete-todo/:id", async(req: Request, res: Response)=>{
     const id = req.params.id;

    const db = await client.db("todoDB")
    const TodosCollection = await db.collection("todos")

    const data = await TodosCollection.deleteOne({ _id: new ObjectId(id) })

    res.json(data)
})