const express = require("express");
const faker = require("faker");
const app = express();
const port = process.env.PORT || 3000;

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

app.get("/api/articles", (request, response) => {
  response.set({
    "Content-Type": "application/json"
  });

  response.send(articles);
});

app.get("/api/articles/:id", (request, response) => {
  const { id } = request.query;
  response.set({
    "Content-Type": "application/json"
  });

  response.json(articles[+id]);
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
