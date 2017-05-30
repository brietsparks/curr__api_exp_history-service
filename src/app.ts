import * as express from 'express';
import * as routes from './routes';

const app = express();

app.use('/', routes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
});