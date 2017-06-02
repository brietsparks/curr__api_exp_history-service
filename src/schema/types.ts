export const Query = `
    type Query {
        user(id: ID!): User
    }
`;

export const User = `
    type User {
        id: ID!
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
        parentProject: [Project]
    }
`;
