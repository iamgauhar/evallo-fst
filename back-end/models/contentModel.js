import mongoose from "mongoose"

const contentModel = mongoose.model("order", mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    contentUrl:{
        type: String
    }
}))

export default contentModel