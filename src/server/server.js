import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './index';
import axios from 'axios';
import compression from 'compression';
import helmet from 'helmet';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/public', express.static('./build/client'));
app.use(compression());
app.use(helmet({
    contentSecurityPolicy: false,
}))



app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App()))
    );
});

app.get('/profile', (req, res) => {
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/profile`,
        {
            auth: { username: process.env.CLIENT_ID, password: 'LXXi58jznCTTW8NhK28DYyXNsPsX_w' },
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


// axios.fetch(
//     'https://www.reddit.com/api/v1/access_token',
//     {   method: "POST",
//         formData: `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`},
//     {
//         auth: { username: process.env.CLIENT_ID, password: '2onWsDXAe5oQJzRzkory-yOT2rWYeg' },
//         headers: { 'Content-type': 'application/x-www-form-urlencoded' }
//     }
// )