import express from 'express'
import cors from 'cors';
import { router } from './app/routes/index.route';
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())


app.use('/api/v1', router)
app.get('/', (req, res) => {
    res.send('Hello World!')
})




export default app