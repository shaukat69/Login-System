// Require Mongoose 
const mongoose = require("mongoose");
// Use To Authenticate User 
const jwt = require('jsonwebtoken');
// Use To Hash Password
const bcrypt = require("bcrypt");

// User Schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    work:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    //Add New Field For Token
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})

// Hashing Password Using bcrypt
userSchema.pre('save', async function (next){ // pre('save') Means Run This Function Before Saving Data In Database
    if(this.isModified("password")){ // this.isModified("password") If Password Field IsModified Then Hash The Password
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// We Are Generating Token 
userSchema.methods.generateAuthToken = async function(){
    try {

        // jwt.sign({payload: secret key})
        let newToken = jwt.sign({_id:this._id}, process.env.SECRET_KEY); // Token Is Generated

        //Now Store newToken In A Tokens Field In A Database
        this.tokens = this.tokens.concat({token : newToken});

        // Save This In A Database
        await this.save();

        // Return The newToken 
        return newToken;

    } catch (error) {
        console.log(error);
    }
}

// Create Model 
const User = mongoose.model('USER', userSchema);

// Export Model 
module.exports = User;