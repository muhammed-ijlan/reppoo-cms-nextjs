import { connectToDB } from "@/app/lib/db";
import Testimonial from "@/app/models/testimonial";
import { z } from "zod";
import { successResponse, errorResponse } from "@/app/lib/apiResponse";


export async function GET(
    req: Request,
    { params: { id } }: { params: { id: string } }
) {
    try {
        await connectToDB();
        const testimonial = await Testimonial.findById(id);
        if (!testimonial) {
            return errorResponse("Testimonial not found", 404);
        }
        return successResponse(testimonial, "Fetched Testimonial");
    } catch (error) {
        return errorResponse("Failed to fetch Testimonial", 500, (error as Error).message);
    }
}

export async function PUT(
    req: Request,
    { params: { id } }: { params: { id: string } }
) {
    try {
        await connectToDB();
        const body = await req.json();
        const parsed = z.object({
            name: z.string().min(1, "Name is required"),
            role: z.string().min(1, "Role is required"),
            text: z.string().min(1, "Text is required"),
        }).safeParse(body);
        if (!parsed.success) {
            return errorResponse("Validation failed", 400, parsed.error.issues.map(err => ({
                field: err.path[0],
                message: err.message,
            })));
        }
        const testimonial = await Testimonial.findByIdAndUpdate(id, parsed.data, { new: true });
        if (!testimonial) {
            return errorResponse("Testimonial not found", 404);
        }
        return successResponse(testimonial, "Testimonial updated successfully");
    } catch (error) {
        return errorResponse("Failed to update Testimonial", 500, (error as Error).message);
    }
}

export async function DELETE(
    req: Request,
    { params: { id } }: { params: { id: string } }
) {
    try {
        await connectToDB();
        const testimonial = await Testimonial.findByIdAndDelete(id);
        if (!testimonial) {
            return errorResponse("Testimonial not found", 404);
        }
        return successResponse({}, "Testimonial deleted successfully");
    } catch (error) {
        return errorResponse("Failed to delete Testimonial", 500, (error as Error).message);
    }
}