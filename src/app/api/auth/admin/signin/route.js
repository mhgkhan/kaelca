import { connectDB } from "@/utils/db/connectDB";
import { Admin } from "@/utils/db/models/Admin";
import { NextResponse } from "next/server";
import JWT from "jsonwebtoken";
import { cookies } from "next/headers";
import { checkExists } from "@/utils/db/dboperations";


connectDB();

export async function POST(request) {
    let obj = {};
    let status = 200;
    const response = new NextResponse();
    const allCookies = await cookies();

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

            // const checkAdmin = await Admin.findOne({ email: email });
            const checkAdmin = await checkExists(Admin, { email: email });


            if (!checkAdmin.exists) {
                if (checkAdmin.isErr) {
                    obj.success = false;
                    obj.message = checkAdmin.error;
                    status = 500;
                }
                else {
                    obj.success = false;
                    obj.message = "Email or password is incorrect!"
                    status = 400;
                }

            }

            else {
                // checking their password 
                // const checkPassword = await bcrypt.compare(password, checkAdmin.password);
                const checkPassword = password === checkAdmin.data.password;

                if (!checkPassword) {
                    obj.success = false;
                    obj.message = "Email or password is incorrect!"
                    status = 400;
                }

                else {


                    obj.success = true;
                    obj.message = "Login Successful."
                    obj.data = checkAdmin.data
                    status = 200;
                }

            }

        }

    } catch (err) {
        obj.success = false;
        obj.message = err.message;
        status = 500;
    } finally {

        if (obj.success) {
            const token = JWT.sign({
                email: obj.data.email,
                name: obj.data.fullname
            },
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn: "10h"
                }
            )


            response.cookies.set("AUTH_KEY", token);
            allCookies.set("AUTH_KEY", token);

        }
        const data = Object.freeze(obj);
        // response.json(data, {status})
        return NextResponse.json(data, { status })
    }
}


export async function GET(request) {
    return NextResponse.json({ success: true, message: "successed!" })
}