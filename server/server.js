const express = require('express');
const app = express();
const api = require('./routers/index');

app.use('/api', api);

const port = 3002;
app.listen(port, ()=>console.log(`Listening on port ${port}`));