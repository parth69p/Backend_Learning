import mongoose, { mongo } from "mongoose";

const subtodoschema = new mongoose.Schema({
    content : {
        type: String,
        required : true
    },
    complete: {
        type : Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true})

export const subTodo = mongoose.model("SubTodo",subtodoschema);

