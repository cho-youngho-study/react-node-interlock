const express = require('express');
const app = express();
const api = require('./routers/index');
const cors = require('cors');

app.use(cors());
app.use('/api', api);

app.listen(3001, () => console.log('Node.js Server is running on port 3001...'));