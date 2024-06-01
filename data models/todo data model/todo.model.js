import mongoose from 'mongoose'

const todoSchema = new mongoose.model({
    content : {
        type : String,
        required : true,
    },
    complete : {
        type : Boolean,
        default : false,
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    subTodo : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Subtodo"
        }
    ]//Array of subtodo in todo model
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)