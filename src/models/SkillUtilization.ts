import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class SkillUtilization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skill_id: number;

    // todo: belongs to contribution
}