import  Pool  from 'pg';
import config from '../config/config.js';

class Database {
    constructor() {
        this.pool = new Pool({
            user: config.DB_USER,
            host: config.DB_HOST,
            database: config.DB_NAME,
            password: config.DB_PASSWORD,
            port: config.DB_PORT,
        });
    }

    async query(text, params) {
        const res = await this.pool.query(text, params);
        return res;
    }

    async close() {
        await this.pool.end();
    }
}

 export default Database;