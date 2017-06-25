import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Project} from "./Project";

@Entity()
export class History {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @OneToMany(type => Project, project => project.history)
    projects: [Project]
}