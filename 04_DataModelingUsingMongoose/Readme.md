# Here are my Learning 
```
In this section I Learn how data Models and schemas are created using 'Mongoose' and how reference of one model is added to another. 
```
## Some constant steps :

### 1st : Importing mongoose
```javascript 
import mongoose from "mongoose";
// 1. Importing mongoose
```
#
### 2nd : Creating Schema
```javascript

const MySchema = new mongoose.Schema({
    username:{
        type: string ,
        required: true,
    }
},{timestamps:true})
```
```
we can also use many other arguments inside that object like:

unique,
lowercase,
```
```
In this way we can create schema and we can also add the refernce of another Model just by writing  
```

```javascript

username:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"// Same name of Model we created 
    },
```
```
'ref' is also mandatory as this will tell which model we are referring too
```
#
### 3rd : Creating Model 
```javascript
export const Todo=  mongoose.model("Todo",Myschema)
```
```
The table/collection name will be 'todos' in data base as mongoDB store the name of table/collection as plural and in small letters
```
```
The refernce of 'MySchema' is passed inside the model.
```
## End of Reading