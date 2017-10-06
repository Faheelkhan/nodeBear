var mongoose = require('mongoose');
var BearSchema = mongoose.Schema({
    name: String
});

// var BearSchema = new Schema({
//     name: String
// });

module.exports = mongoose.model('Bear', BearSchema);