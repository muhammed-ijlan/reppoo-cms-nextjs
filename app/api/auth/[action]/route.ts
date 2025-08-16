import { NextRequest } from "next/server";
import { connectToDB } from "@/app/lib/db";
import Admin from "@/app/models/admin";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { successResponse, errorResponse } from "@/app/lib/apiResponse";

const JWT_SECRET = process.env.JWT_SECRET || "";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createToken = (admin: any) => {
    return jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, {
        expiresIn: "7d",
    });
};

export async function POST(req: NextRequest, { params }: { params: { action: string } }) {
    try {
        await connectToDB();
        const { action } = params;
        const body = await req.json();
        const { fullname, email, password } = body;

        if (!fullname || !email || !password) {
            return errorResponse("All fields are required", 400);
        }
        if (action === "register") {
            const existingAdmin = await Admin.findOne({ email });
            if (existingAdmin) {
                return errorResponse("Admin already exists", 400);
            }

            const admin = new Admin({ fullname, email, password });
            await admin.save();

            const token = createToken(admin);

            return successResponse({ admin, token }, "Admin registered successfully");
        }

        if (action === "login") {
            const admin = await Admin.findOne({ email });
            if (!admin) {
                return errorResponse("Invalid credentials", 401);
            }

            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return errorResponse("Invalid credentials", 401);
            }

            const token = createToken(admin);

            admin.token = token;
            await admin.save();

            return successResponse({ admin, token }, "Login successful");
        }

        return errorResponse("Invalid action", 400);
    } catch (err) {
        console.error("Admin Auth Error:", err);
        return errorResponse("Something went wrong", 500, (err as Error).message);
    }
}

export async function DELETE(req: NextRequest) {

    try {
        await connectToDB();
        const admin = await Admin.findOne({ token: req.headers.get("Authorization") });
        if (!admin) {
            return errorResponse("Admin not found", 404);
        }
        admin.token = null;
        await admin.save();
    } catch (err) {
        console.error("Admin Logout Error:", err);
        return errorResponse("Something went wrong", 500, (err as Error).message);
    }
    return successResponse(null, "Logged out successfully");
}
