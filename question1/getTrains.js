const axios = require('axios');

async function getTrains(authToken) {
  try {
    const response = await axios.get('http://20.244.56.144/train/trains', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = getTrains;