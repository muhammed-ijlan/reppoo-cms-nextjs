/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const AdminSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        default: null,
    },
}, {
    timestamps: true,
});
export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);


AdminSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

AdminSchema.methods.comparePassword = async function (candidatePassword: any) {
    return await bcrypt.compare(candidatePassword, this.password);
};
