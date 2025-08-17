import { connectToDB } from "@/app/lib/db";
import About from "@/app/models/about";
import { successResponse, errorResponse } from "@/app/lib/apiResponse";


export async function GET() {
    try {
        await connectToDB();
        const about = await About.findOne();
        return successResponse(about || {}, "Fetched About data");
    } catch (error) {
        return errorResponse("Failed to fetch About", 500, (error as Error).message);
    }
}

