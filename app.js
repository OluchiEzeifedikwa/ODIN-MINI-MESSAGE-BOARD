const express = require('express');
const app = express();
const path = require('node:path');
const router = require('./routes/router');

// app.use('/', router);
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

// display messages variable up here when you navigate to /
app.get("/", (req, res) => {
  res.render("index", {h1: "Mini Messageboard", messages: messages})
});

router.get('/new', (req, res) => {
  res.render('form');
});

app.use(router);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server listening at PORT ${PORT}`)
})