const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const glitches = [
  { id: 1, description: 'glitch 1', userId: 1, resolved: true },
  { id: 2, description: 'glitch 2', userId: 1 },
  { id: 3, description: 'glitch 3', userId: 2 },
  { id: 4, description: 'glitch 4' },
];

app.get('/api/glitch', (req, res) => {
  res.json(glitches);
});

app.post('/api/glitch', (req, res) => {
  const bug = { id: Date.now(), resolved: false, ...req.body };
  glitches.push(bug);
  res.json(bug);
});

app.patch('/api/glitch/:id', (req, res) => {
  const index = glitches.findIndex((g) => g.id === parseInt(req.params.id));
  const glitch = glitches[index];
  if ('resolved' in req.body) glitch.resolved = req.body.resolved;
  if ('userId' in req.body) glitch.userId = req.body.userId;
  res.json(glitch);
});

app.listen(4000, () =>
  console.log(`Node server listening on http://localhost:4000/`)
);
