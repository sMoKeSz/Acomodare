/**
 * Created by Iulian.Pelin on 11/28/2014.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProdusSchema   = new Schema({
    name: String,
    description : String,
    status : Number,
    varEdit : Boolean,
    strike : Number

});

module.exports = mongoose.model('Produs', ProdusSchema);

