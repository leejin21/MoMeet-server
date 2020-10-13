var Joi = require('joi');

function validateMinutes(when) {
    const schema = Joi.object({
        year: Joi.string().min(4).max(4).required(),
        month: Joi.string().min(1).max(2).required(),
        day: Joi.string().min(1).max(2).required(),
    })
    return schema.validate({ year: when[0], month: when[1], day: when[2] })

}

module.exports.validateMinutes = validateMinutes