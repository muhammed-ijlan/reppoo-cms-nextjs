import { connectToDB } from "@/app/lib/db";
import { errorResponse, successResponse } from "@/app/lib/apiResponse";
import Faq from "@/app/models/faq";
import { z } from "zod";

const faqSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    content: z.string().min(5, "Content must be at least 5 characters long"),
});

export async function GET(request: Request) {
    try {
        await connectToDB();
        const faqs = await Faq.find({});
        return successResponse(faqs, "FAQs fetched successfully");
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        return errorResponse("Failed to fetch FAQs");
    }
}

export async function POST(request: Request) {
    try {
        await connectToDB();
        const data = await request.json();

        const parseResult = faqSchema.safeParse(data);
        if (!parseResult.success) {
            return errorResponse(
                parseResult.error.issues.map((e) => e.message).join(", ")
            );
        }

        const { title, content } = parseResult.data;

        const faq = new Faq({ title, content });
        await faq.save();

        return successResponse(faq, "FAQ created successfully");
    } catch (error) {
        console.error("Error creating FAQ:", error);
        return errorResponse("Failed to create FAQ");
    }
}
