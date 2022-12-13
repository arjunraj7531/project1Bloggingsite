const { default: mongoose } = require("mongoose");


//===================== for object empty or not ========================================

const isValid = function(value) {
    if (typeof value === 'undefined' || value === null) return false;

    if (typeof value === 'string' && value.trim().length === 0) return false

    return true;
}

//====================== for valid object id ===========================================

const isValidObjectId = function(objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}



module.exports.isValid = isValid
module.exports.isValidObjectId = isValidObjectId