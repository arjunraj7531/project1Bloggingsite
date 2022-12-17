const jwt = require('jsonwebtoken')

//============================= authentication ==========================================================

const authentication = function (req, res, next) {

    try {
        let token = req.headers["x-api-key"];
        if (!token) return res.status(401).send({ status: false, msg: "token must be present" });

        let decodedToken = jwt.verify(token, 'functionup')
        if (!decodedToken)
            return res.status(400).send({ status: false, msg: "token is not valid" })
        
            next()
        }
        catch (error) {
            res.status(500).send({status: false, msg: error.message })
        }
    };


//================================ Authorization==============================================//

const authorizetion = function (req, res, next) {
    
    try {
        
        let token = req.headers["x-api-key"]
        let decodedToken = jwt.verify(token, 'functionup')

        if (!decodedToken) {
            return res.status(400).send({ status: false, msg: "token is not valid" })
        }
        let userToBeEdit = req.params.author
        let userLoggedIn = decodedToken.authorId

        if (userToBeEdit != userLoggedIn)
            return res.status(403
                ).send({ status: false, msg: 'Author logged is not allowed to modify the requested users data' })
        next()
    }
    catch (error) {
        res.status(500).send({ msg: error })
    }
};

//====================================================================================================//



module.exports.authentication = authentication
module.exports.authorizetion = authorizetion