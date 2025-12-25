import { connectDB } from "@/utils/db/connectDB";
import { Admin } from "@/utils/db/models/Admin";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


connectDB();

export async function POST(request) {
    let obj = {};
    let status = 200;
    try {
        const payload = await request.json();

        const { email, password } = payload;

        if (!email || !password) {
            obj.success = false;
            obj.message = "All fields are required";
            status = 400;
        }
        else {
            // checking if admin is exists or not 

            const checkAdmin = await Admin.findOne({ email: email });

            if (!checkAdmin) {
                obj.success = false;
                obj.message = "User not found with this email";
                status = 404;
            }

            else {
                // checking their password 
                // const checkPassword = await bcrypt.compare(password, checkAdmin.password);
                const checkPassword = password === checkAdmin.password;

                if (!checkPassword) {
                    obj.success = false;
                    obj.message = "Email or password is incorrect!"
                    status = 400;
                }

                else {
                    obj.success = true;
                    obj.message = "Login Successful."
                    obj.data = checkAdmin
                    status = 200;
                }

            }

        }

    } catch (err) {
        obj.success = false;
        obj.message = err.message;
        status = 500;
    } finally {
        const data = Object.freeze(obj);
        return NextResponse.json(data, { status })
    }
}


export async function GET(request) {
    return NextResponse.json({ success: true, message: "successed!" })
}