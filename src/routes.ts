import * as express from 'express';
import {Project} from "./models/Project";
import connectToDB from "./database";

import * as bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';
import schema from './schema/';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({a:1}));
});

router.get('/graphql', graphqlExpress({ schema: schema }));
router.post('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));

export = router;




// router.get('/foo/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     connectToDB().then(async connection => {
//         const projRepo = connection.getRepository(Project);
//
//         let proj = new Project();
//         proj.title = 'My Project';
//         proj.summary = 'This is a summary of the project';
//         await projRepo.persist(proj);
//
//         await projRepo.find().then(async q => {
//             console.log(q);
//         });
//
//         await connection.close();
//     });
//
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify({a:1}));
// });