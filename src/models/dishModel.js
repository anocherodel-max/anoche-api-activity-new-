const mongoose = require('mongoose');
const dishSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
price: {
    type : Number,
    required : true,

},
category : {
    type : String,
    enum : ['Starters', 'Main', 'Dessert', 'Drinks'],
    required : true,
},
isVegetarian:{
    type : Boolean,
    default : false,
},

reviews: [
{
 user: String,
 rating: { type: Number, min: 1, max: 5 },
 comment: String
}
 ],

});


module.exports = mongoose.model('Dish', dishSchema);