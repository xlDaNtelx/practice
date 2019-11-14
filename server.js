const express = require('express');
const faker = require('faker');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 3000;

const tattoos = require('./tattooes');
const countries = require('./countries');
const articles = [];

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
  response.send(tattoos);
});

app.get('/api/countries', (request, response) => {
  response.send(countries);
});

app.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
