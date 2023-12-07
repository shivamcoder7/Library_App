const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27107/librarydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const booksRoutes = require('./routes/booksRoutes');


app.use('/api/books', booksRoutes);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
