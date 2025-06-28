
import app from "./app";
import { client } from "./config/config";

let server;
const port = 7000;


const bootstrap = async () => {
    await client.connect();
    console.log('connected to mongodb')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}



bootstrap()