import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { errorResponse } from "./app/lib/apiResponse";

const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    if (url.pathname.startsWith("/api/auth")) {
        return NextResponse.next();
    }
    if (url.pathname.startsWith("/api/public")) {
        return NextResponse.next();
    }

    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return errorResponse("Unauthorized: Invalid token", 401)
    }

    const token = authHeader.split(" ")[1];

    try {
        const { payload } = await jwtVerify(
            token,
            new TextEncoder().encode(JWT_SECRET)
        );

        const res = NextResponse.next();
        res.headers.set("x-admin-id", payload.id as string);
        return res;
    } catch (err) {
        console.error("JWT verification error:", err);
        return errorResponse("Unauthorized: Invalid token", 401)
    }
}

export const config = {
    matcher: ["/api/:path*"],
};
