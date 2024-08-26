
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/cricket/fixtures', async (req, res) => {
  try {
    const response = await axios.get('https://apiv2.cricket.com.au/web/matchticker/fixtures?jsconfig=eccn%3Atrue&format=json');
    console.log('External API response:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching cricket fixtures:', error);
    res.status(500).json({ error: 'An error occurred while fetching cricket fixtures.' });
  }
});
 
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
