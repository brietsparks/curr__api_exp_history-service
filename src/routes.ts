import * as express from 'express';
import {Project} from "./models/Project";

import * as bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';
import { GraphQLOptions } from './GraphQL';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({a:1}));
});

router.get('/graphql', graphqlExpress(GraphQLOptions));
router.post('/graphql', bodyParser.json(), graphqlExpress(GraphQLOptions));

export = router;