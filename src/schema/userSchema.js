const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true, "First Name is required"],
        minlength : [5, "First Name must be 5 character long"],
        lowercase : true,
        trim : true, // if the user gives extra spaces then it will automitically remove it
        maxlength : [20, "First name should be less than or equal to 0 characters"]
    },

    lastName : {
        type : String,
        required : [true, "Last Name is required"],
        minlength : [5, "Last Name must be 5 character long"],
        lowercase : true,
        trim : true, // if the user gives extra spaces then it will automitically remove it
        maxlength : [20, "Last name should be less than or equal to 0 characters"]
    },

    mobileNumber : {
        type : String,
        trim : true,
        maxlength : [true, "Phone number should be of length 10"],
        minlength : [true, "Phone number should be of length 10"],
        unique : [true, "Phone number is already in use"],
        required : [true, "Phone number should be provided"]
    },
    
    email : {
        type : String,
        trim : true,
        required : [true, "Email should be provided"],
        unique : [true, "Email is already in use"],
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password : {
        type : String,
        required : [true, "Password should be provided"],
        minlength : [6, "Password should be minimum 6 character length"]
    }
}, {
    timestamps : true // created at and updated at
});

const User = mongoose.model('User', userSchema) // collection

module.exports = User