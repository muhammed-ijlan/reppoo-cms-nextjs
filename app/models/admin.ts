/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const AdminSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        token: { type: String, default: null },
    },
    { timestamps: true }
);


AdminSchema.methods.comparePassword = async function (candidatePassword: any) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const Admin =
    mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default Admin;
