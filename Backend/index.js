import express from 'express'; // for creating a server .
import 'dotenv/config' // for imporing the data from .env file
import { connectDB } from './connection/db.js';
import authRoutes from './routes/authroutes.js'

const PORT = process.env.PORT;

const app = express();

app.use(express.json()); // data will be in json() format

app.use("/api/auth", authRoutes)
// app.use("/api/admin", adminRoutes)


connectDB() // mongoDB connected with express server
app.listen(PORT, () => console.log(`server is running on ${PORT}`)); //(listen) for start/run the server




