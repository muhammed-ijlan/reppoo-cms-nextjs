import { connectToDB } from "@/app/lib/db";
import About from "@/app/models/about";
import { z } from "zod";
import { successResponse, errorResponse } from "@/app/lib/apiResponse";

const AboutSchema = z.object({
    title: z.string().min(1, "title is required"),
    content: z.string().min(1, "content is required"),
});

export async function GET() {
    try {
        await connectToDB();
        const about = await About.findOne();
        return successResponse(about || {}, "Fetched About data");
    } catch (error) {
        return errorResponse("Failed to fetch About", 500, (error as Error).message);
    }
}

export async function PUT(req: Request) {
    try {
        await connectToDB();
        const body = await req.json();

        const parsed = AboutSchema.safeParse(body);
        if (!parsed.success) {
            return errorResponse("Validation failed", 400, parsed.error.issues.map(err => ({
                field: err.path[0],
                message: err.message,
            })));
        }

        let about = await About.findOne();

        if (about) {
            about.title = parsed.data.title;
            about.content = parsed.data.content;
            await about.save();
        } else {
            about = await About.create(parsed.data);
        }
        return successResponse(about, "About updated/created successfully");
    } catch (error) {
        return errorResponse("Failed to update/create About", 500, (error as Error).message);
    }
}
