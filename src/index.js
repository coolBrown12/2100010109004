const express = require('express');
const getTrains = require('./getTrains');
const getId=require('./getid')

const app = express();
const authToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA3ODYyOTIsImNvbXBhbnlOYW1lIjoiZmlybSIsImNsaWVudElEIjoiZDRkYjE5M2EtNzgwNS00YTU4LWE4MmItZTQ0OWU4ODIxZmIzIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIxMDAifQ.S9QBAGeuJ-99n4REBD_WsUdrANWG75vjPamZVKKi7q4'

app.get('/trains', async (req, res) => {
  try {
    const trains = await getTrains('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA3ODYyOTIsImNvbXBhbnlOYW1lIjoiZmlybSIsImNsaWVudElEIjoiZDRkYjE5M2EtNzgwNS00YTU4LWE4MmItZTQ0OWU4ODIxZmIzIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIxMDAifQ.S9QBAGeuJ-99n4REBD_WsUdrANWG75vjPamZVKKi7q4');
    res.json(trains);
    console.log(trains)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/trains/:trainNumber', async (req, res) => {
    const trainNumber = req.params.trainNumber;
    try {
      const trainDetails = await getId(authToken, trainNumber);
      res.json(trainDetails);
    } catch (error) {
      console.error('Error while fetching train details:', error.message);
      res.status(error.response ? error.response.status : 500).json({
        error: error.message,
      });
    }
  });

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
