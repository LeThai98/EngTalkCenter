const express = require('express');
const router = require('./route/route.js');

const app = express();
const port = 8080;

app.use(express.json());

app.use('/api', router);



app.listen(port, () => {
    console.log(`Server is running on port ${port}` );
});
