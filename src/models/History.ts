import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Project} from "./Project";

@Entity()
export class History {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("string", {
        length: 255
    })
    userId: string;

    @OneToMany(type => Project, project => project.history)
    projects: [Project]
}