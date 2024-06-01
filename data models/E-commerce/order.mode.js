import mongoose from 'mongoose'

const orderItemSchema = new mongoose.model({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.model({
    orderPrice: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItem : {
        type : [orderItemSchema]
    },
    adress : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
        enum : ["PENDING","CANCELLED","DELIVERED"],
        default : "PENDING"
    }
}, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema)