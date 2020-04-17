var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    github_account: { type: String, unique : true, sparse: true },
    image_url: String,
});

var ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});


// Export the model
mongoose.model('Products', ProductSchema);
mongoose.model('Users', UserSchema);