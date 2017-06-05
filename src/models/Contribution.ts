import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import {Project} from "./Project";
import {type} from "os";
import {SkillUtilization} from "./SkillUtilization";

@Entity()
export class Contribution {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Project, project => project.contributions)
    project: Project;

    @OneToMany(type => SkillUtilization, skillUtil => skillUtil.contribution)
    skillUtilizations: [SkillUtilization];

    // @Column()
    // title: string;
}