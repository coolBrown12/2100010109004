const axios = require('axios');

async function registerCompany() {
  try {
    const response = await axios.post('http://20.244.56.144/train/register', {
      companyName: 'Train juction',
      ownerName: 'Yash',
      rollNo: '9004',
      ownerEmail: 'yash91238@gmail.com',
      accessCode: 'NGBfUi'
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

registerCompany();
