const express = require('express');
const axios = require('axios');
const redis = require('redis');
const responseTime = require('response-time');

const app = express();
app.use(responseTime());

app.get('/rockets', async(req, res, next)=>{
    try {
        const response = await axios.get('https://api.spacexdata.com/v3/rockets');
        res.send(response.data);
    } catch (error) {
        res.send(error.message);
    }
})

app.listen(3000, () => console.log("on port 3000"))