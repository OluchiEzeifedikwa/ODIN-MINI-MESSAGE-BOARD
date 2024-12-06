const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.send('form');
});

router.post('/', (req, res) => {
    const newMessage = {
        id: uuid.v4(),
        text: req.body.messageText,
        user: req.body.messageUser,
        added: req.body.newDate(),
        status: 'active'
    }

    if (!newMessage.user || !newMessage.text) {
        return res.status(400).json({msg: 'Pls include a name or text'});
    }
    messages.push({ text: messageText, user: messageUser, added: newDate() });
    res.redirect("/");

});

modules.exports = router;
