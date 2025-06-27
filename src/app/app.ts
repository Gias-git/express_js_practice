import express, { Application, Request, Response } from 'express'
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World WIth node mon!!!')

})

app.get('/todos', (req: Request, res: Response) => {
    res.send('Hello todos')
})

export default app;
