import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import {History} from "./History";
import {Contribution} from "./Contribution";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    // todo: belongs to history
    // todo: has many child projects
    // todo: has many contributions

    @ManyToOne(type => History, history => history.projects)
    history: History;

    @ManyToOne(type => Project, project => project.childProjects)
    parentProject: Project;

    @OneToMany(type => Project, project => project.parentProject)
    childProjects: Project;

    @OneToMany(type => Contribution, contribution => contribution.project)
    contributions: Contribution;

    @Column()
    title: string;

    @Column("text")
    summary: string;

}