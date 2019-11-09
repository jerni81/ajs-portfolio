const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const { Message } = require('./models');


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json());


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// create a POST route
app.post('/', async (req, res) => {
  const { name, email, message} = req.body

  await Message.create({name, email, message})

  console.log(req.body);
  res.send({ express: 'POST YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });

});
