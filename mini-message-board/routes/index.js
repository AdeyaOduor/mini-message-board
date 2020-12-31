
var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there',
    user: 'Adeya',
    added: new Date()
  },
  {
    text: 'Hello!',
    user: 'David',
    added: new Date()
  },
  
]

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Messages Board',messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: '', messages: messages});
});

router.post('/new', (req,res,next) => {
  const newMes = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  }
  messages.push(newMes)
  res.redirect('/')
})

module.exports = router;