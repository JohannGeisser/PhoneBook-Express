const express = require('express');
const app = express();
const persons = require('./routes/persons');
const organizations = require('./routes/organizations');

// middleware

// routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/v1/persons', persons);
app.use('/api/v1/organizations', organizations);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
