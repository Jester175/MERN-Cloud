import { model, Schema, ObjectId } from "mongoose";

const User = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, uniq: true},
    password: {type: String, required: true,},
    diskSpace: { type: Number, default: 1024 ** 3 * 10 },
    usedSpace: { type: Number, default: 0 },
    avatar: { type: String },
    files: [{ type: ObjectId, ref: 'File' }]
})

export default model('User', User);