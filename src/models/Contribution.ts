import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Contribution {
    @PrimaryGeneratedColumn()
    id: number;

    // todo: has one parent project
    // todo: has many skill utilizations
}