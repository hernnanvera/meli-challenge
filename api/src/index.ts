import express from 'express'
import itemRouter from './routes/index'
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname+'/.env' });

const app = express()
app.use(express.json())

const PORT = 8000

app.use('/api', itemRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})