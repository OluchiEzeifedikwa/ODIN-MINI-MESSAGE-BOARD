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
    // res.json(messages);
    console.log(res.redirect('/'));
  
  });
  
module.exports = router;
