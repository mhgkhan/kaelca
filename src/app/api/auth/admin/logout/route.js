import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function DELETE(request) {

    const cookiesAll = cookies();

    (await cookiesAll).delete("AUTH_KEY");

    const respnose = new NextResponse();

    respnose.cookies.delete("AUTH_KEY");

    return NextResponse.json({ success: true, message: "Logouted!" })
}