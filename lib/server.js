import express from 'express';
import config from './config';
import serverRender from '@lib/renderers/server';
import {data} from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const initialContent = await serverRender();
    res.render('index', {...initialContent});
});

app.get('/data', async (req, res) => {
    res.send(data);
});

app.listen(config.port, () => console.info(`Running on ${config.port}`));
