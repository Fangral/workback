import express from 'express';
import morgan from 'morgan';//отображение в терминале запросов на серв
import dotenv from 'dotenv'
import colors from 'colors'//подсветка консоли

//config
import {connectDB} from './config/db.js'
//middleware
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
// Routes
import userRoutes from './routes/userRoutes.js'
import exerciseRouter from './routes/exerciseRoutes.js'
import workoutRoutes from './routes/workoutRoutes.js'

dotenv.config()

connectDB()
const app = express()

if(process.env.NODE_ENV==='development')//запуск morgan когда мы в режиме разраб
    app.use(morgan('dev'))

app.use(express.json())//ответ
app.use('/api/users', userRoutes)
app.use('/api/exercises', exerciseRouter)
app.use('/api/workouts', workoutRoutes)
app.use(errorHandler)
app.use(notFound)

const PORT=process.env.PORT || 5000
app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)