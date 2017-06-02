import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class History {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("string", { // todo: change to guid
        length: 255
    })
    person_id: string;
}