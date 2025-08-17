import { errorResponse, successResponse } from "@/app/lib/apiResponse";
import { connectToDB } from "@/app/lib/db";
import Testimonial from "@/app/models/testimonial";



export async function GET() {
    try {
        await connectToDB();
        const testimonials = await Testimonial.find();
        return successResponse(testimonials, "Fetched Testimonials");
    } catch (error) {
        return errorResponse("Failed to fetch Testimonials", 500, (error as Error).message);
    }
}