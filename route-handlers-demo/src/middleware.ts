import type { NextRequest } from "next/server";
import { NextResponse } from "next/server"

export function middleware(req: NextRequest){

    const res = NextResponse.next();
    const themePreference = req.cookies.get('theme');
    if(!themePreference){
        res.cookies.set("theme", "dark")
    }

    // if(req.nextUrl.pathname === "/profile"){
    //     return NextResponse.redirect(new URL("/hello", req.nextUrl))
    // }
    // return NextResponse.redirect(new URL("/", req.url))
}

export const config = {
    matcher: 'profile',
}