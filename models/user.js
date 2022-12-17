import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    date:{type: Date, required: true}
})

userSchema.plugin(mongoosePaginate);
export default mongoose.model('User', userSchema);