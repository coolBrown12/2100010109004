const express = require('express');
const axios = require('axios');

const app = express();
const port=3000;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    res.status(400).json({ error: 'Invalid query parameter. Provide "url" as an array of URLs.' });
    return;
  }

  const requests = urls.map(async (url) => {
    try {
      const response = await axios.get(url, { timeout: 500 });
      return response.data.numbers;
    } catch (error) {
      console.error(`Error fetching data from URL ${url}:`, error.message);
      return [];
    }
  });

  try {
    const results = await Promise.allSettled(requests);
    const numbersSet = new Set();

    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        result.value.forEach((number) => numbersSet.add(number));
      }
    });

    const numbers = Array.from(numbersSet).sort((a, b) => a - b);
    res.json({ numbers });
  } catch (error) {
    console.error('Error while processing requests:', error.message);
    res.status(500).json({ error: 'Error while processing requests.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
