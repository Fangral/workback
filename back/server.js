import express from 'express';
import morgan from 'morgan';//отображение в терминале запросов на серв
import dotenv from 'dotenv'
import colors from 'colors'//подсветка консоли

//config
import {connectDB} from './config/db.js'
// Routes
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()
const app = express()

if(process.env.NODE_ENV==='development')//запуск morgan когда мы в режиме разраб
    app.use(morgan('dev'))

app.use(express.json())//ответ
app.use('/api/users', userRoutes)

const PORT=process.env.PORT || 5000
app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)