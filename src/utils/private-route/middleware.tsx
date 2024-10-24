import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const TOKEN_KEY = "token"

export async function middleware(request: NextRequest) {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const protectedRoutes = ["/private-route/dashboard", "/private-route/settings"]

    const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname)

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/private-route/dashboard/path*", "/private-route/settings/path*"]
}