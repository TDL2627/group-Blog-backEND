const db = require('../db/db')

class UserDAO {
    async createUser(username, email, password) {
        try {
            const [id] = await db('user')
                .insert({
                    username,
                    email,
                    password
                })
                .returning('id')

            return id

        } catch (error) {
            return {error: error.detail, status: 401}
        }
    }
    async getUsers() {
        const [id] = await db('user')
            .select(
                'username'
            )
            .returning('id')

        return id
    }
}

module.exports = new UserDAO()