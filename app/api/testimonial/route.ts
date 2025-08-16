import { errorResponse, successResponse } from "@/app/lib/apiResponse";
import { z } from "zod";
import { connectToDB } from "@/app/lib/db";
import Testimonial from "@/app/models/testimonial";

const TestimonialSchema = z.object({
    name: z.string().min(1, "Name is required"),
    role: z.string().min(1, "Role is required"),
    text: z.string().min(1, "Text is required"),
});

export async function POST(req: Request) {
    try {
        await connectToDB();
        const body = await req.json();
        const parsed = TestimonialSchema.safeParse(body);
        if (!parsed.success) {
            return errorResponse("Validation failed", 400, parsed.error.issues.map(err => ({
                field: err.path[0],
                message: err.message,
            })));
        }
        const testimonial = await Testimonial.create(parsed.data);
        return successResponse(testimonial, "Testimonial created successfully");
    } catch (error) {
        return errorResponse("Failed to create Testimonial", 500, (error as Error).message);
    }
}

export async function GET() {
    try {
        await connectToDB();
        const testimonials = await Testimonial.find();
        return successResponse(testimonials, "Fetched Testimonials");
    } catch (error) {
        return errorResponse("Failed to fetch Testimonials", 500, (error as Error).message);
    }
}