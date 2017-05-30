import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("string", {
        length: 60
    })
    title: string;

    @Column("text")
    summary: string;

}