const db = require('../db/db')

class UserDAO {
    async createUser(username, email, password) {
        const [id] = await db('user')
            .insert({
                username,
                email,
                password
            })
            .returning('id')

        return id
    }
}

module.exports = new UserDAO()