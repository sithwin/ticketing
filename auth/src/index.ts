import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentUser', (request, response) => {
  response.status(200).send("Hey THAR KHIT!");
});

app.listen(3000, () => {
  console.log('(Auth Service) Listening on port 3000!')
});