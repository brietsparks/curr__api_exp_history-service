import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    // todo: belongs to history
    // todo: has many child projects
    // todo: has many contributions

    @Column("string", {
        length: 60
    })
    title: string;

    @Column("text")
    summary: string;

}