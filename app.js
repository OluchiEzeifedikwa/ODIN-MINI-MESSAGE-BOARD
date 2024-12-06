const express = require('express');
const app = express();
const path = require('node:path');

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
  
app.get("/", (req, res) => {
  res.render("index", {title: "Mini Messageboard", messages: messages})
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server listening at PORT ${PORT}`)
})