import Image from "next/image";
import Link from "next/link";
import { MdSchool } from "react-icons/md";
export default function Home() {
  return (
    <>
      <section className="w-full h-[80vh] relative">
        <div className="hero-img relative w-full h-full">
          {/* <Image src="/images/hero.jpg" width={1200} height={800} alt="Khyber afghan english language and computer academy" className="w-full h-full object-cover" /> */}
          <Image src="/images/hero.jpg" width={1200} height={800} alt="Khyber afghan english language and computer academy" className="w-full h-full object-cover" />

          <video autoPlay loop muted className="w-full h-full object-cover absolute inset-0">
            <source src="https://cdn.pixabay.com/video/2019/03/11/21941-323198485_large.mp4" type="video/mp4" />
          </video>


        </div>
        <div className="her0-content absolute inset-0 bg-[#e6dada92] to-transparent">
          <div className="container mx-auto w-full h-full">
            <div className="flex flex-col items-center justify-center h-full text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-800 text-shadow-2xs text-shadow-amber-600">Khyber Afghan English Language and Computer Academy</h1>
              <p className="text-lg md:text-xl mb-8 px-3 bg-blue-800 rounded-sm">Empowering Futures Through Education</p>
              <Link href="#courses" className="bg-blue-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto py-16" id="courses">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 flex items-center gap-3"> <MdSchool className="text-blue-800 md:text-5xl text-4xl" /> Our Courses</h2>

          <div className="card-courses-container flex items-center justify-center gap-6 flex-wrap md:px-0 px-2">


            <div className="card-courses dark:bg-slate-700 bg-white  md:w-[500px] w-full h-auto border-dotted border-2 border-blue-800 p-4 rounded-lg shadow-lg">
              <Image src={"/images/books.jpg"} width={500} height={300} alt="Course 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2 px-1 ">English Language Course</h3>
              <p className="text-gray-700 mb-4 dark:text-gray-200">Enhance your English language skills with our comprehensive course designed for all levels.</p>

              <h4 className="text-xl font-bold mb-2">Course Details:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Basic to Advanced Levels </li>
                <li>Classes: Monday to Saturday</li>
                <li>Levels: Beginner to Advanced</li>
                <li>Duration: 2 Months (each level) </li>
                <li>Conversation </li>
                <li>Special Grammar  </li>
              </ul>

            </div>


            <div className="card-courses dark:bg-slate-700 bg-white  md:w-[500px] w-full h-auto border-dotted border-2 border-blue-800 p-4 rounded-lg shadow-lg">
              <Image src={"/images/laptop.jpg"} width={500} height={300} alt="Course 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="font-bold mb-2 text-2xl">Computer Courses </h3>
              <p className="text-gray-700 mb-4 dark:text-gray-200">
                Master essential computer skills with our computer courses, covering everything from basic to advanced topics.
              </p>

              <h4 className=" font-bold mb-2 text-xl">Course Details:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>Windows </li>
                <li>MS word, Excel, Powerpoint </li>
                <li>MS Access (Database) </li>
                <li>Graphic Designing </li>
                <li>Typing Course (10 Days)  </li>
                <li>Duration: 2 Months (each course) </li>
              </ul>

            </div>


          </div>

        </div>
      </section>


      <section className="w-full bg-[url('/images/books.jpg')] bg-fixed bg-cover bg-center">
        <div className="container mx-auto">
          <div className="md:px-0 px-2 py-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Khyber Afghan Academy</h2>
            <p className="text-lg md:text-xl mb-6">Since its founding, Khyber Afghan Academy has trained hundreds of students in spoken English, computing, and digital skills. Our expert instructors are committed to helping each student succeed.</p>
            <Link href="#courses" className="bg-blue-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>


      <section className="w-full">
        <div className="container mx-auto">
          <div className="md:px-0 px-2 py-16 text-center ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-black">Ready to Start Learning </h2>
            <p className="text-lg md:text-xl mb-6 dark:text-gray-200 text-gray-700">
              Join now and unlock your potential through certified language and computer education.</p>
            <div className="flex items-center justify-center gap-3">
              <Link href="#courses" className="bg-blue-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Contact Us
              </Link>

              <Link href="#courses" className="bg-blue-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Join Course
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
