/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { errorResponse } from './app/lib/apiResponse';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    if (url.pathname.startsWith('/api/auth')) {
        return NextResponse.next();
    }

    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {

        return errorResponse("Unauthorized", 401,);
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        const res = NextResponse.next();
        res.headers.set('x-admin-id', decoded.id);
        return res;
    } catch (err) {
        return errorResponse("Unauthorized", 401,);
    }
}

export const config = {
    matcher: ['/api/:path*'],
};
