import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

export default mongoose.models.About || mongoose.model("About", AboutSchema);
