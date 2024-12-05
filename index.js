import express from 'express';
import { create, engine } from 'express-handlebars';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import hbsHelper from './utils/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const hbs = create({
	defaultLayout: 'main',
	extname: 'hbs',
	helpers: hbsHelper,
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
	res.render('index.hbs');
});

app.get('/about', (req, res) => {
	res.render('about.hbs');
});

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
