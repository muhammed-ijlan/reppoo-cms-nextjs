import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    leftImage: {
        type: String,
        default: null,
    },
    rightImage: {
        type: String,
        default: null,
    },
    mainImage: {
        type: String,
        default: null,
    },
}, {
    timestamps: true,
});
export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);

