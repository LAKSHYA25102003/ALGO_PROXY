const express = require('express');
const request = require('request');
const cors=require('cors');



const app = express();
const PORT = 5000; // Change this to the desired port

app.use(cors());
app.use(express.json());

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    request(url).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
