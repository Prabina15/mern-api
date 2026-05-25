import mongoose from "mongoose";

const resetPasswordSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "User is required"],
    },
    token: {
        type: String,
        required: [true, "Token is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true,
    },
    expiresAt: {
        type: Date,
        default : Date.now() + 3600000, // 1 hour in miliiseconds
        immutable : true,
    },
    isUsed: {
        type: Boolean,
        default: false,
    }
});

export default  mongoose.model("Resetpassword", resetPasswordSchema);