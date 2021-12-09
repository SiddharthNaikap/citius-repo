import express from 'express';
import './db';
import morgan from 'morgan';
import { UserRouter } from './router/user.routes';
import cors from "cors";

const app = express()
const PORT = process.env.PORT || 9092

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

app.use("/users", UserRouter)

app.listen(PORT, () => console.log("Server started at PORT :" +9092))
