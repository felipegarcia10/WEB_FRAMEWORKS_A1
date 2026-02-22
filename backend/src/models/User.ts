import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, trim: true, unique: true },
        name: {
            first: { type: String, required: true, trim: true },
            last: { type: String, required: true, trim: true }
        },
        role: { type: String, required: true, trim: true },
        comments: [{
            title: { type: String, required: true, trim: true },
            description: { type: String, required: true, trim: true },
            date: { type: Date, required: true, trim: true, default: Date.now }
        }
        ]
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);