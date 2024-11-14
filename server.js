const express = require('express');
const connectDB = require('./config/db');
const serviceRoutes = require('./routes/serviceRoute')
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api', serviceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
