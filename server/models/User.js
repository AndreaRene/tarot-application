import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password:{
        type: String,
    },
    useReverseCards: {
        type: Boolean,
    }
});

const User = model('User', userSchema);

export default User;
