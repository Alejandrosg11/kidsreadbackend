const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const bookSchema = new Schema({
    title:String,
    portrait: String,
    date: Date,
    age: [Number],
    author: [String],
    genre: [String],
    language: String,
    Description: String,
    Rate: Number,
    Book: String,
    Preview:[String],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

module.exports = mongoose.model("Book", bookSchema);