const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api/books', async (req, res) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${req.query.keyword}&country=JP`;
  
  try {
    const response = await axios.get(url);

    res.send(response.data);
  } catch(err) {
    console.log(err);
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});