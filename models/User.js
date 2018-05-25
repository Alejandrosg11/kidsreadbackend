const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    age: String,
    library:[
        {
            type: Schema.Types.ObjectId,
            ref: "Books"
        }
    ],
    level:{
        type:Number,
        default:1
    },
    booksRead:[
        {
            type: Schema.Types.ObjectId,
            ref: "Books"
        }
    ],
    Avatar:String
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

UserSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

module.exports = mongoose.model("User", UserSchema);