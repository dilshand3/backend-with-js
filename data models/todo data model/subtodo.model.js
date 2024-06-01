import mongoose from 'mongoose'

const subtodoSchme = new mongoose.model({
    content: {
        type: String,
        require: true
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        type : mongoose.Schema.Types.Objectid,
        ref : "User"
    }
}, { timestamps: true })

export const Subtodo = mongoose.model("Subtodo", subtodoSchme)