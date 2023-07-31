const axios = require('axios');

async function getAuthToken() {
  try {
    const response = await axios.post('http://20.244.56.144/train/auth', {
      companyName: 'firm',
      clientID: 'd4db193a-7805-4a58-a82b-e449e8821fb3',
      ownerName: 'vansh',
      ownerEmail: 'starkevin56@gmail.com',
      rollNo: '2100',
      clientSecret: 'fQwCTzbtamUtmWIu'
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getAuthToken();
