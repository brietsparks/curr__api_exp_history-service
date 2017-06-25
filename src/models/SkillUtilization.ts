import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Contribution} from "./Contribution";

@Entity()
export class SkillUtilization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    skillId: number;

    @ManyToOne(type => Contribution, contribution => contribution.skillUtilizations)
    contribution: Contribution
}