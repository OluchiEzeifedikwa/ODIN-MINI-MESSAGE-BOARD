const express = require('express');
const app = express();
const path = require('node:path');
const router = require('./routes/router');

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(router);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server listening at PORT ${PORT}`)
})