const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    "id": {
        type: Number,
        required: true
    },
"title": {
    type: String,
    required: true
},
"price":  {
    type: Number,
    required: true
},
"description": {
    type: String,
    required: true
},
"category":  {
    type: String,
   enum:{
    values :["men's clothing","jewelery","electronics", "women's clothing"]
   }
},
"image":{
    type: String,
    required: true
},
"sold":  {
    type:Boolean,
    default: false
},
"dateOfSale": {
    type: Date,
    default: Date.now()
}
})

module.exports = mongoose.model('Product',productSchema)