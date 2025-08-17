import { connectToDB } from "@/app/lib/db";
import { errorResponse, successResponse } from "@/app/lib/apiResponse";
import Faq from "@/app/models/faq";



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
