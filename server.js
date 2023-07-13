import express from 'express';
const app = express();
app.use(express.static('client'));
app.listen(5050);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
