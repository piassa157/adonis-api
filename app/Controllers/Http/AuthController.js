'use strict'

const User  = use('App/Models/User')

class AuthController {
    async reigster({ request })
    {
        const data = request.only(['user_name', 'email', 'password'])

        const user = await User.create(data)

        return user
    }

    async authenticate({ request })
    {
        const {email, password} = request.all()

        const token = await auth.attempt(email, password).remember()

        return token

    }
}

module.exports = AuthController
