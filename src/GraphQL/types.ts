export const Query = `
    type Query {
        history(userId: ID!): History
    }
`;

export const History = `
    type History {
        id: ID!
        userId: String
        projects: [Project]
    }
`;

export const Project = `
    type Project {
        id: ID!
        title: String
        parentProject: Project
        childProjects: [Project]
        contributions: [Contribution]
    }
`;

export const Contribution = `
    type Contribution {
        id: ID!
        title: String
        project: [Project]
    }
`;

