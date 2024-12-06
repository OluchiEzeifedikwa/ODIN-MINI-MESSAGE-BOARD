const express = require('express');
const app = express();
const path = require('node:path');
const router = require('./routes/router');

// const router = require('./router');


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

// // display form when you navigate to /new
// app.get('/new', (req, res) => {
//   res.render('form');
// });

// app.post('/new', (req, res) => {
//   const newMessage = {
//       text: req.body.text,
//       user: req.body.user,
//       added: new Date(),
//       status: 'active'
//   }

//   if (!newMessage.user || !newMessage.text) {
//       return res.status(400).json({msg: 'Pls include a user or text'});
//   }

//   messages.push(newMessage);
//   res.json(messages);

// });



const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server listening at PORT ${PORT}`)
})