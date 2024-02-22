import yenv from 'yenv'

let enviroment = 'development'
let env = yenv('.env.yaml', { env: 'enviroment' })
if (env.enviroment == enviroment) {
    env = yenv('.env.yaml', { env: 'development' })
} else {
    env = yenv('.env.yaml', { env: 'production' })
    env.enviroment = 'production'
}
const config = {
    enviroment: enviroment,
    PORT: env.PORT,
    DB_HOST: env.DB_HOST,
    DB_USER: env.DB_USER,
    DB_PASSWORD: env.DB_PASSWORD,
    DB_NAME: env.DB_NAME,
    DB_PORT: env.DB_PORT,
    redis: {
        host: env.redis.host,
        port: env.redis.port,
        password: env.redis.password
    },
    jwt: {
        secret: env.jwt.secret,
        expiration: env.jwt.expires
    },
    
}
export default config;