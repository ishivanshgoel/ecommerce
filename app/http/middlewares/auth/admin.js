const {verifyAccessToekn} = require('../../../../utils/jwt')
const type = require('../../../../utils/userType')

function admin(req, res, next){
    try{

        if(!req.headers['authorization']) throw new Error('Unauthorized User')

        const authHeader = req.headers['authorization']

        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        let tokenValid = verifyAccessToekn(token)

        // check user role
        if(tokenValid && tokenValid.role == type.admin) next()
        
        else throw new Error('Unauthorized User')

    } catch(err){
        next(err)
    }

}

module.exports = admin