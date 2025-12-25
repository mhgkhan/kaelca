import Link from "next/link";
import { BiPencil } from "react-icons/bi";
import { FaChalkboardTeacher, FaHome, FaKey, FaPlus, FaUserFriends } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

export default async function ProfileLayout({ children }) {
    return <main className="w-full flex items-start justify-start gap-5">
        <aside className="md:w-[250px] w-auto h-auto p-2 rouded-md borer-r border-blue-500 bg-gray-200">
            
            
            <Link href={"/profile"} className="w-full text-lg my-2 rounded-sm bg-gray-400 hover:bg-gray-500 text-white py-2 px-2 flex items-center justify-start gap-2">
                <span className="text-2xl"> <FaHome /> </span> <span className="md:block hidden">Dashboard</span>
            </Link>

            <Link href={"/profile"} className="w-full text-lg my-2 rounded-sm bg-gray-400 hover:bg-gray-500 text-white py-2 px-2 flex items-center justify-start gap-2">
                <span className="text-2xl"> <BiPencil /> </span> <span className="md:block hidden"> Edit Info </span>
            </Link>

            <Link href={"/profile"} className="w-full text-lg my-2 rounded-sm bg-gray-400 hover:bg-gray-500 text-white py-2 px-2 flex items-center justify-start gap-2">
                <span className="text-2xl"> <FaUserFriends /> </span> <span className="md:block hidden">Students</span>
            </Link>

            <Link href={"/profile"} className="w-full text-lg my-2 rounded-sm bg-gray-400 hover:bg-gray-500 text-white py-2 px-2 flex items-center justify-start gap-2">
                <span className="text-2xl"> <FaChalkboardTeacher /> </span> <span className="md:block hidden">Staff</span>
            </Link>

            <Link href={"/profile"} className="w-full text-lg my-2 rounded-sm bg-gray-400 hover:bg-gray-500 text-white py-2 px-2 flex items-center justify-start gap-2">
                <span className="text-2xl"> <FaBook /> </span> <span className="md:block hidden"> Courses </span>
            </Link>

            <Link href={"/profile"} className="w-full text-lg my-2 rounded-sm bg-gray-400 hover:bg-gray-500 text-white py-2 px-2 flex items-center justify-start gap-2">
                <span className="text-2xl"> <FaPlus /> </span> <span className="md:block hidden">Add User</span>
            </Link>

            <Link href={"/profile"} className="w-full text-lg my-2 rounded-sm bg-gray-400 hover:bg-gray-500 text-white py-2 px-2 flex items-center justify-start gap-2">
                <span className="text-2xl"> <FaKey /> </span> <span className="md:block hidden">Change Password</span>
            </Link>




        </aside>
        <section className="w-full">
            {children}
        </section>
    </main>
}