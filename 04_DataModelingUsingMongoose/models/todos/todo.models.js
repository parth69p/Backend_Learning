import mongoose, { model } from "mongoose";
import { User } from "./user.models";
import { subtodo } from "./sub_todo.models";


const todoschema = new mongoose.Schema({
    content : {
        type :String,
        
        required:true,
    },
    complete:{
        type: Boolean,
        default: false,  
    },
    CreatedBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"// Same name of Model we created 
    },
    subTodos:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "subTodo"
        },
    ], // Array of sub Todos 
},{timestamps:true})

export const Todo=  mongoose.model("Todo",todoschema)// the table name will be 'todos' in data base