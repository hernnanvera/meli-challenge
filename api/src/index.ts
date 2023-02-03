import express from 'express'
import itemRouter from './routes/index'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080;

app.use('/api', itemRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})