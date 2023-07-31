const axios = require('axios');

async function getid(authToken, trainNumber) {
  try {
    const response = await axios.get(`http://20.244.56.144:80/train/trains/${trainNumber}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = getid;
