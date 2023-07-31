const express = require('express');
const getNumbers = require('./getNumbers');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    res.status(400).json({ error: 'Invalid query parameter. Provide "url" as an array of URLs.' });
    return;
  }

  try {
    const numbers = await getNumbers(urls);
    res.json({ numbers });
  } catch (error) {
    console.error('Error while fetching numbers:', error.message);
    res.status(500).json({ error: 'Error while fetching numbers.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
