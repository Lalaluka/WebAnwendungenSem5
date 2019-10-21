const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
    "owner": {
        type: String,
        required: true
        //TODO: Validator

    },
    "creationDate": {
        type: Date,
        required: true
    },
    "entries": [
        {
            "amount": {
                type: Number,
                required: true,
                default: 1,
                min: [1, "min number 1"]
            },
            "product": {
                type: String,
                required: true,
                min: [1, "min number 1"]
            },
            "creationDate": {
                type: Date,
                required: true
            },
            "done": {
                type: Boolean,
                default: false,
                required: true
            }
        }],

    "tags": [{
        type: String
    }]
});

var List = module.exports = mongoose.model('list',listSchema); //Warum Calvin?!
module.exports.get = function(callback,limit){
    List.find(callback).limit(limit);
};