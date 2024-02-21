import yenv from 'yenv'

const env = yenv('.env.yaml')
const config = {
    PORT: env.PORT,
}
export default config;