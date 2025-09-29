import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // username: String,
        // // another approach
        // email : String,
        // isActive: Boolean
        username : {
            type: String,
            required : true,
            unique: true,
            lowercase :true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password:{
            type : String,
            required: true,
        }

        
    },{timestamps:true}// for adding timestamp at the end adding new object.
);// it is 'timestamps' : as it have two function createdAt() ,updatedAt()

export const User = mongoose.model("User", userSchema);

// in mongo db data base the name of model will be changes to plural and small letters.
