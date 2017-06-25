import * as express from 'express';
import { graphiqlExpress } from 'graphql-server-express';

import createConnection from './database';
import * as routes from './routes';

createConnection().then(async connection => {
    const app = express();

    app.use('/', routes);

    app.use('/graphiql', graphiqlExpress({
        endpointURL: '/graphql',
    }));

    const PORT = 3001;
    app.listen(PORT, () => {
        console.log('Listening on port ' + PORT)
    });
}).catch(err => console.log("TypeORM connection error: ", err));