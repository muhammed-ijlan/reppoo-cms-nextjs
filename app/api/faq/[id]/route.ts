import { connectToDB } from "@/app/lib/db";
import { errorResponse, successResponse } from "@/app/lib/apiResponse";
import Faq from "@/app/models/faq";
import { z } from "zod";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectToDB();
        const faq = await Faq.findById(params.id);
        if (!faq) {
            return errorResponse("FAQ not found", 404);
        }
        return successResponse(faq, "FAQ fetched successfully");
    } catch (error) {
        console.error("Error fetching FAQ:", error);
        return errorResponse("Failed to fetch FAQ");
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectToDB();
        const data = await request.json();
        const faqSchema = z.object({
            title: z.string().min(3, "Title must be at least 3 characters long"),
            content: z.string().min(5, "Content must be at least 5 characters long"),
        });
        const parseResult = faqSchema.safeParse(data);
        if (!parseResult.success) {
            return errorResponse(
                parseResult.error.issues.map((e) => e.message).join(", ")
            );
        }
        const { title, content } = parseResult.data;

        const faq = await Faq.findByIdAndUpdate(
            params.id,
            { title, content },
            { new: true }
        );
        if (!faq) {
            return errorResponse("FAQ not found", 404);
        }
        return successResponse(faq, "FAQ updated successfully");
    } catch (error) {
        console.error("Error updating FAQ:", error);
        return errorResponse("Failed to update FAQ");
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectToDB();
        const faq = await Faq.findByIdAndDelete(params.id);
        if (!faq) {
            return errorResponse("FAQ not found", 404);
        }
        return successResponse(null, "FAQ deleted successfully");
    } catch (error) {
        console.error("Error deleting FAQ:", error);
        return errorResponse("Failed to delete FAQ");
    }
}