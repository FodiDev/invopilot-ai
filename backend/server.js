import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import { clerkMiddleware } from '@clerk/express';
import path from 'path';
import invoiceRouter from './routes/invoiceRouter.js';

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(clerkMiddleware());
app.use(express.urlencoded({ limit: '20mb', extended: true }));

// DB
connectDB();

//Routes
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use('/api/invoice', invoiceRouter);
app.get('/', (req, res) => {
  res.send('API WORKING');
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
