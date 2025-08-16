import { NextRequest } from "next/server";
import { connectToDB } from "@/app/lib/db";
import { errorResponse, successResponse } from "@/app/lib/apiResponse";
import Hero from "@/app/models/hero";
import { writeFile, unlink } from "fs/promises";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
    try {
        await connectToDB();

        const formData = await req.formData();
        const title = formData.get("title") as string;
        const subtitle = formData.get("subtitle") as string;

        const leftImage = formData.get("leftImage") as File | null;
        const rightImage = formData.get("rightImage") as File | null;
        const mainImage = formData.get("mainImage") as File | null;

        if (!title || !subtitle) {
            return errorResponse("Title and Subtitle are required", 400);
        }

        const uploadDir = path.join(process.cwd(), "public/uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const saveFile = async (file: File | null) => {
            if (!file) return null;
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const fileName = `${uuidv4()}-${file.name}`;
            const filePath = path.join(uploadDir, fileName);

            await writeFile(filePath, buffer);
            return `/uploads/${fileName}`;
        };

        let hero = await Hero.findOne();

        if (hero) {
            const deleteFile = async (filePath?: string) => {
                if (filePath) {
                    const fullPath = path.join(process.cwd(), "public", filePath);
                    if (fs.existsSync(fullPath)) {
                        await unlink(fullPath);
                    }
                }
            };

            if (leftImage) await deleteFile(hero.leftImage);
            if (rightImage) await deleteFile(hero.rightImage);
            if (mainImage) await deleteFile(hero.mainImage);

            const leftImagePath = await saveFile(leftImage) || hero.leftImage;
            const rightImagePath = await saveFile(rightImage) || hero.rightImage;
            const mainImagePath = await saveFile(mainImage) || hero.mainImage;

            hero.title = title;
            hero.subtitle = subtitle;
            hero.leftImage = leftImagePath;
            hero.rightImage = rightImagePath;
            hero.mainImage = mainImagePath;

            await hero.save();
        } else {
            const leftImagePath = await saveFile(leftImage);
            const rightImagePath = await saveFile(rightImage);
            const mainImagePath = await saveFile(mainImage);

            hero = await Hero.create({
                title,
                subtitle,
                leftImage: leftImagePath,
                rightImage: rightImagePath,
                mainImage: mainImagePath,
            });
        }

        return successResponse(hero, "Hero section saved/updated successfully");
    } catch (err) {
        console.error("Hero API Error:", err);
        return errorResponse("Failed to save Hero section", 500, (err as Error).message);
    }
}

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
