import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { PageTemplate } from './PageTemplate.js';
import { PageStart } from './PageStart.js';
import { PageEnd } from './PageEnd.js';
import { PageError } from './PageError.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;


app.use('/static', express.static(path.join(__dirname, 'public')));

// Maršrutai
app.get('/', (req, res) => res.send(new PageTemplate().render()));
app.get('/start', (req, res) => res.send(new PageStart().render()));
app.get('/end', (req, res) => res.send(new PageEnd().render()));

// Klaidų apdorojimas (turi būti paskutinis)
app.use((req, res) => {
  res.status(404).send(new PageError().render());
});

app.listen(port, () => {
  console.log(`Serveris veikia: http://localhost:${port}`);
});