import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import Blocklist from '../infra/blocklist.js';

async function isAuthenticationService(token) {
    const blocklist = new Blocklist()
    try {
        jwt.verify(token, config.jwt.secret)
        const isBLock = await blocklist.isBlock(token)
        if (isBLock) {
            console.log('sou block')
            throw new Error()
        }
        return true
    } catch (error) {
        console.log('error: ', error)
        return false
    }
}
export default isAuthenticationService