import express from 'express';
import { PageTemplate } from './PageTemplate.js';
import { PageStart } from './PageStart.js';
import { PageEnd } from './PageEnd.js';
import { PageError } from './PageError.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.send(new PageTemplate().render()));
app.get('/start', (req, res) => res.send(new PageStart().render()));
app.get('/end', (req, res) => res.send(new PageEnd().render()));
app.get('/*error', (req, res) => res.send(new PageError().render()));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});