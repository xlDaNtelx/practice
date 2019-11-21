const express = require('express');
const faker = require('faker');
const wakeUpDyno = require('./wakeUpDyno');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 3000;

const tattoos = require('./tattooes');
const countries = require('./countries');
const esports = require('./esports');
const receipts = require('./receipts');
const articles = [];

const DYNO_URL = 'https://practice-bizico-api.herokuapp.com';

for (let i = 0; i < 100; i++) {
  articles.push({
    id: i,
    title: faker.name.title(),
    description: faker.lorem.paragraph(15),
    img: faker.image.food(1200, 768),
    date: faker.date.future(1)
  });
}

app.use(cors());

app.get('/api/articles', (request, response) => {
  response.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true
  });

  response.send(articles);
});

app.get('/api/articles/:id', (request, response) => {
  const { id } = request.params;
  response.set({
    'Content-Type': 'application/json'
  });

  response.json([articles[+id]]);
});

app.get('/api/tattoos', (request, response) => {
  response.set({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    'Content-Type': 'application/json'
  });
  response.send(tattoos);
});

app.get('/api/countries', (request, response) => {
  response.set({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    'Content-Type': 'application/json'
  });
  response.send(countries);
});

app.get('/api/esports', (request, response) => {
  response.set({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    'Content-Type': 'application/json'
  });
  response.send(esports);
});

app.get('/api/receipts', (request, response) => {
  response.set({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    'Content-Type': 'application/json'
  });
  response.send(receipts);
});

app.get('/api/receipts/:id', (request, response) => {
  const { id } = request.params;
  response.set({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    'Content-Type': 'application/json'
  });
  const receipt = receipts.find(item => item.id === Number(id));
  response.send(receipt);
});

app.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  wakeUpDyno(DYNO_URL); // will start once server starts
  console.log(`server is listening on ${port}`);
});
