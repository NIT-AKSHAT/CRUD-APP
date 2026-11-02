
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

const courseRoutes = require('./routes/courseRoutes');

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use('/courses', courseRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

app.use((error, req, res, next) => {
  console.error(error.message);

  res.status(500).json({
    message: 'Internal server error'
  });
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB connected successfully');

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });
