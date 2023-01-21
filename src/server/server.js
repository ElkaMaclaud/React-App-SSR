import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './index';
import axios from 'axios';
import compression from 'compression';
import helmet from 'helmet';

const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';

const app = express();

if (!IS_DEV) {
    app.use(compression());
    app.use(helmet({
        contentSecurityPolicy: false,
}))
};

app.use('/public', express.static('./build/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App()))
    );
});

app.get('/profile', (req, res) => {
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=B0nx8Oag8CyJHXs_DHMlKw&redirect_uri=https://react-app-ssr-production.up.railway.app/profile`,
        {
            auth: { username: 'B0nx8Oag8CyJHXs_DHMlKw', password: 'P8tNnsh2k1hiyPPRFI8M3IbZOZxkEQ' },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', }
        }
    )
    .then(({ data }) => {
        res.send(
            indexTemplate(ReactDOM.renderToString(App()), data['access_token']),
        );
    })
    .catch(console.log());
    // req.query.code;
   
});


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

