import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const postSchema = new Schema({
    uid:{
        type: String,
        required: true
    },
    title: {
        type: String
    },
    bode: {
        type: String
    }
},{ collection: 'post', timestamps: true});

export default mongoose.model('post',postSchema);