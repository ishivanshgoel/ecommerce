const { verifyAccessToekn } = require('../../../../utils/jwt')
const type = require('../../../../utils/userType')

function customer(req, res, next) {
    try {

        if (!req.headers['authorization']) throw new Error('Unauthorized User')

        const authHeader = req.headers['authorization']

        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        let tokenValid = verifyAccessToekn(token)

        // check user role
        if (tokenValid && tokenValid.role == type.user) next()
        else throw new Error('Unauthorized User')

    } catch (err) {
        next(err)
    }

}

module.exports = customer