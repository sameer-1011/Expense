const mongoose = require("mongoose");
const { type } = require("os");

// schema design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email:{
        type: String,
        required: [true, " Email is required and should be unique"],
        unique: true,
    },
    password:{
        type: String,
        requied: [true, "Password is required"],
    },
},
{timestamps: true}
);

// export
const userModel = mongoose.model('users',userSchema);
module.exports = userModel;