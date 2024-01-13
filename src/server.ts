import express from 'express'
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import { protect } from './modules/auth';

dotenv.config()
const app = express()

const customMiddleware = (message) => (req, res, next) => {
    console.log(`Hello from ${message}`)
    next()
}
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(customMiddleware('Arthur'))

app.get('/', (req, res) => {
    console.log('running in the server')
    res.status(200)
    res.json({message: 'hello'})
})

app.use('/api', protect , router)

export default app