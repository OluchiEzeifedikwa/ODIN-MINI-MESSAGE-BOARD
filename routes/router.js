const express = require('express');
const router = express.Router();

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

//display form
router.get('/new', (req, res) => {
  res.render('form');
});

// displays existing messages, renders the index.ejs
router.get("/", (req, res) => {
  res.render("index", {h1: "Mini Messageboard", messages: messages})
});

router.post('/new', (req, res) => {
    const newMessage = {
        text: req.body.text,
        user: req.body.user,
        added: new Date(),
        status: 'active'
    }
  
    if (!newMessage.user || !newMessage.text) {
        return res.status(400).json({msg: 'Pls include a user or text'});
    }
  
    messages.push(newMessage);
    console.log(res.redirect('/'));
  
  });

module.exports = router;

