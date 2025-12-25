import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function proxy(request) {

    const allCookies = await cookies();

    const userToken = allCookies.get("AUTH_KEY");

    if (request.nextUrl.pathname.startsWith("/profile")) {
        if (userToken) {
            return NextResponse.next();
        }
        else {
            return NextResponse.redirect(new URL("/", request.url))
        }
    }


    return NextResponse.next();


}

export const config = {
    matcher: ["/profile/:pages*", "/"]
}