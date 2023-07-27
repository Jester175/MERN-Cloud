import { model, Schema } from "mongoose";

const User = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, uniq: true},
    password: {type: String, required: true,},
})

export default model('User', User);