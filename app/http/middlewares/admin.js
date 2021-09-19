const {verifyAccessToekn} = require('../../../utils/jwt')

function admin(req, res, next){
    try{

        if(!req.headers['authorization']) throw new Error('Unauthorized User')

        const authHeader = req.headers['authorization']

        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        let tokenValid = verifyAccessToekn(token)

        // TODO : check if the user role in admin
        if(tokenValid) next()
        
        else throw new Error('Unauthorized User')

    } catch(err){
        next(err)
    }

}

module.exports = admin