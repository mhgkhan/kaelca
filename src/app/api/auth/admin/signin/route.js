import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json();
    // console.log(res)
   return NextResponse.json({success:true,message:"request recieved."})
}


export async function GET(request){
    return NextResponse.json({success:true,message:"successed!"})
}