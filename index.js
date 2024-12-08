import express from 'express';
import { create, engine } from 'express-handlebars';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import hbsHelper from './utils/index.js';
import AuthRoutes from './routes/auth.js';
import ProductsRoutes from './routes/products.js';

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
app.use(express.urlencoded({ extended: true }));

app.use(AuthRoutes);
app.use(ProductsRoutes);

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
