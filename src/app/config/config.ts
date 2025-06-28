
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://mongodb:gias1029@cluster0.vv2sz9v.mongodb.net/todosDb?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});



// const db = await client.db('todosDB');
// const collection = await db.collection("todos")