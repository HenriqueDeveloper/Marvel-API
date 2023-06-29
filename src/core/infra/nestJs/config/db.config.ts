import { DataSourceOptions } from 'typeorm';
import { HeroSchema } from 'src/core/infra/db/hero.schema';
import 'dotenv/config';

const synchronize = process.env.MARVEL_API_SYNCHRONIZE === "false" ? false : true;
const logging = process.env.MARVEL_API_LOGGING === "false" ? false : true;

const databaseConfig: DataSourceOptions = {
    type: 'sqlite',
	database: process.env.MARVEL_API_DATABASE,
    synchronize: Boolean(synchronize),
    logging: Boolean(logging),
	entities: [HeroSchema],
};

export default databaseConfig;
