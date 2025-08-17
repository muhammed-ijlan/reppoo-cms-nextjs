import { errorResponse, successResponse } from "@/app/lib/apiResponse";
import { connectToDB } from "@/app/lib/db";
import Hero from "@/app/models/hero";

export async function GET() {
    try {
        await connectToDB();
        const hero = await Hero.findOne();
        return successResponse(hero || {}, "Hero fetched successfully");
    } catch (err) {
        console.error("Hero API Error:", err);
        return errorResponse("Failed to fetch Hero section", 500, (err as Error).message);
    }
}
