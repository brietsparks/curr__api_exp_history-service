import * as types from './types';
import { resolverMap } from './resolvers';
import { merge } from 'lodash';

import { makeExecutableSchema } from 'graphql-tools';

export default makeExecutableSchema({
    typeDefs: [
        types.Query,
        types.History,
        types.Project,
        types.Contribution
    ],

    resolvers: resolverMap
})