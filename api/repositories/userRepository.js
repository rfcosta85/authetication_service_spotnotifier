import Database from '../infra/database.js';
import config from '../config/config.js';

class UserRepository {
    constructor() {
        if (config.enviroment === "production") {
            this.db = new Database();
        } else {
            this.memory = [{
                id: 1,
                email: 'rodrigo@ipca.pt',
                password: '$2b$10$ux6DGoHPA0cK5MQEHHD7xeMcjwYb5hICVuUMUgLAMySIIAlyXPPSO'
            }];
        }
    }
    async findUserByEmail(email) {
        if (config.enviroment === 'production') {
            const query = 'SELECT id, email, password FROM usuarios WHERE email = $1';
            const result = await this.db.query(query, [email]);
            return result.rows[0];
        } else {
            let foundUser
             this.memory.forEach((user) => {
                if (user.email === email) {
                    foundUser = user
                }
            })
            return foundUser
        }
    }

    async findUserById(id) {
        if (config.enviroment === 'production') {
            const query = 'SELECT id, email, password FROM usuarios WHERE id = $1';
            const result = await this.db.query(query, [id]);
            return result.rows[0];
        } else {
            this.memory.forEach((user) => {
                if (user.id === id) {
                    return user
                }
                return null
            })
        }
    }
}

export default UserRepository;