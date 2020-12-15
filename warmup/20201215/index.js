const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const Sequelize = require('sequelize')
const {holiday_shopping, party_schedule, watch_list} = require('./models')




const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');


const db = [];

app.use(logger);
// Disabling for local development
// app.use(helmet());

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send(`
  <h1>Hello!</h1><br><a href="/shopping">Make a shopping list</a> <br>
  <a href="/party">Go to Party Schedules</a><br>
  <a href="/watch">Go to Watch List</a>
  
  `)
});

app.get('/shopping', (req, res) => {
  res.send(`
  <h1>Shopping List</h1>
  <form method="POST">
    <label>
      Name:
      <input name="name" type="text" autofocus />
    </label>
    <br>
    <label>
    Item:
    <input name="item" type="text" />
    </label> 
    <br>
    <label>
    Price:
    <input name="price" type="text" />
    </label> 
    <br>
   <input type="submit" value="Make List" />
  </form>
  `);
});

app.post('/shopping', async (req, res) => {
  const { name, item, price } = req.body;
  const sList= await holiday_shopping.create({
    name,
    item,
    price
  })
  res.redirect('/shoppinglist');
});

app.get('/shoppinglist', async (req, res) => {
const shopping = await holiday_shopping.findAll()
  res.send(`
<a href="/shopping">Make Shopping List</a>
<ul>
${
  shopping.map(s => `<li>${s.name}: ${s.item}: ${s.price}</li>`).join('')
}
</ul>
  `);
});

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});

