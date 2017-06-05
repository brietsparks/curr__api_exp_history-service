import schema from './schema';
import connectToDB from "../database";

export const GraphQLOptions = {
    schema: schema,
    context: {
        connectToDB
    }
};

