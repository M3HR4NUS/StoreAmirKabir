const mongoose = require("mongoose");
const {schemacat}=require('./scurity/yupCat')


const catSchmea = new mongoose.Schema({
    titel: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },

    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
});

catSchmea.statics.catValidation = function (body) {
    return schemacat.validate(body, { abortEarly: false });
  };

module.exports = mongoose.model("Cat", catSchmea);
