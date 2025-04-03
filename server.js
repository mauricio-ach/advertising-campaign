const express = require('express');
require('dotenv').config();


const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Advertising Campaings API');
});

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Route not found',
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Internal Server Error',
    });
});

const PORT = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})