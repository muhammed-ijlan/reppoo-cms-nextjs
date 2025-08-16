import mongoose from "mongoose";

const FaqSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Faq = mongoose.models.Faq || mongoose.model("Faq", FaqSchema);
export default Faq;