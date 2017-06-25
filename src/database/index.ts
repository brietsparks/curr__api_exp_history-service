import {createConnection, ConnectionOptions, DriverOptions} from "typeorm";
import * as path from 'path';

const MYSQL_DRIVER: DriverOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "asdf#F$G%H",
    database: "my_test"
};

const SQLITE_DRIVER: DriverOptions = {
    type: "sqlite",
    storage: path.resolve(__dirname, '../../my.db')
};


const options: ConnectionOptions = {
    driver: SQLITE_DRIVER,
    entities: [
        path.resolve(__dirname, "../models/*.js")
    ],
    autoSchemaSync: true,
    cli: {
        migrationsDir: path.resolve(__dirname, "./migrations")
    }
};

export default () => createConnection(options);