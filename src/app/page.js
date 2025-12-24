import Image from "next/image";
import { FaKey, FaUser } from "react-icons/fa";
import Link from "next/link"


export default function Home() {
  return (
    <section className="login-section mt-[-10px] w-full min-h-[70vh]" style={{ background: "url(/images/banner.jpg) no-repeat center center/cover" }}>
      <div className="container mx-auto">

        <form className="md:w-[60%] w-[90%]  rounded-md  p-2 my-5 backdrop-blur-md bg-[#c2c5ee5d] mx-auto block">
          <h1 className="text-2xl font-bold m-2">Login to your account!</h1>
          <p className="text-lg p-1">You need to login to your account!.</p>

          <br />
          <div className="input w-full my-1 flex items-center justify-center gap-2 border-b border-blue-900 py-1">
            <span className="text-xl"><FaUser /> </span>
            <input type="email" name="email" required={true} placeholder="Enter email" className="w-full  outline-none px-2 py-1 text-lg bg-none" />
          </div>
          <br />
          <div className="input w-full my-1 flex items-center justify-center gap-2 border-b border-blue-900 py-1">
            <span className="text-xl"><FaKey /> </span>
            <input type="password" name="password" required={true} placeholder="Password" className="w-full  outline-none px-2 py-1 text-lg bg-none" />
          </div>

          <br />

          <button className="bg-blue-900 text-white px-3 p-2 m-1 text-xl font-bold rounded-md cursor-pointer ">Login</button>

          <p className="my-5 font-bold"> Not have an account ! <Link href="/register" className="text-blue-800">Register </Link> </p>
          <p className="my-5 text-right"> <Link href="/register" className="text-blue-800">Forget Password  </Link> </p>

        </form>

      </div>
    </section>
  );
}
