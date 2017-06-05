import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Contribution} from "./Contribution";

@Entity()
export class SkillUtilization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skill_id: number;

    @ManyToOne(type => Contribution, contribution => contribution.skillUtilizations)
    contribution: Contribution
}