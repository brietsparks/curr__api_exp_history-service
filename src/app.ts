import * as express from 'express';
import * as routes from './routes';
import { graphiqlExpress } from 'graphql-server-express';

const app = express();

app.use('/', routes);

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

const PORT = 3001;
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
});