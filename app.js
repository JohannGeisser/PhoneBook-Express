const express = require('express');
const app = express();
const personsRoute = require('./routes/persons');
const organizationsRoute = require('./routes/organizations');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

// routes
app.use('/api/v1/persons', personsRoute);
app.use('/api/v1/organizations', organizationsRoute);
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
