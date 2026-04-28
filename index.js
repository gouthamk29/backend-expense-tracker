import express from 'express'
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js'
import expenseRoutes from './routes/expense.js'
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

connectDB();



app.use("/api/expenses",expenseRoutes)
app.use("/api/auth",authRoutes)

const PORT = process.env.PORT|| 3000;

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`application is running on port :${PORT}`);
    console.log(process.env.JWT_SECRET)
    
})

