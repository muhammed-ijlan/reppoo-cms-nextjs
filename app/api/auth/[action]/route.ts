/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest } from "next/server";
import { connectToDB } from "@/app/lib/db";
import Admin from "@/app/models/admin";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { successResponse, errorResponse } from "@/app/lib/apiResponse";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "";

const createToken = (admin: any) => {
    return jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, {
        expiresIn: "7d",
    });
};

export async function POST(
    req: NextRequest,
    context: { params: { action: string } }
) {
    try {
        await connectToDB();
        const { action } = await context.params;
        const body = await req.json();
        const { fullname, email, password } = body;

        if (!email || !password) {
            return errorResponse("All fields are required", 400);
        }

        if (action === "register") {
            const existingAdmin = await Admin.findOne({ email });
            if (existingAdmin) {
                return errorResponse("Admin already exists", 400);
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const admin = new Admin({
                fullname,
                email,
                password: hashedPassword,
            });

            await admin.save();

            return successResponse({ admin }, "Admin registered successfully");
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

        const authHeader = req.headers.get("authorization");
        if (!authHeader?.startsWith("Bearer ")) {
            return errorResponse("Unauthorized", 401);
        }

        const token = authHeader.split(" ")[1];

        let payload: any;
        try {
            const verified = await jwtVerify(
                token,
                new TextEncoder().encode(JWT_SECRET)
            );
            payload = verified.payload;
        } catch {
            return errorResponse("Unauthorized: Invalid token", 401);
        }

        const admin = await Admin.findById(payload.id);
        if (!admin) return errorResponse("Admin not found", 404);

        admin.token = null;
        await admin.save();

        return successResponse(null, "Logged out successfully");
    } catch (err) {
        console.error("Admin Logout Error:", err);
        return errorResponse("Something went wrong", 500, (err as Error).message);
    }
}
