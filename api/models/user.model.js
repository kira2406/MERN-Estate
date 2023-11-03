import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dprofile&psig=AOvVaw1sWkfHfCDBg1G0XhyAdZiq&ust=1699118801113000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKid_vasqIIDFQAAAAAdAAAAABAJ"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;