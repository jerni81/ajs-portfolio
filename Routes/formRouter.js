const express = require('express');
const { Message } = require('../models')

const formRouter = express.Router();

formRouter.post('/', async (req,res) => {
  try {
    const message = await Message.create(req.body);
    res.json(message);
  }
  catch (e) {
    res.status(500).send(e.message)
  }
})

module.exports = formRouter;
