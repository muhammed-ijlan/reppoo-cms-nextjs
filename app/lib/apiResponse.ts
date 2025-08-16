/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export const successResponse = (data: any, message = "Success", status = 200) => {
    return NextResponse.json(
        {
            success: true,
            message,
            data,
        },
        { status }
    );
};

export const errorResponse = (message = "Something went wrong", status = 500, details?: any) => {
    return NextResponse.json(
        {
            success: false,
            message,
            errors: details || null,
        },
        { status }
    );
};
