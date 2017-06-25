import {getEntityManager} from "typeorm";
import { Project } from '../models/Project';

export const resolverMap = {
    Query: {
        history: async (obj, { userId }, context) => {
            const repo = getEntityManager().getRepository(Project);

            const projects = await repo.find();

            return projects;
        }
    },

    // Mutation: {
    // },
};