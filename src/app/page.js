import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full h-[80vh] relative">
        <div className="hero-img relative w-full h-full">
          <Image src="/images/hero.jpg" width={1200} height={800} alt="Khyber afghan english language and computer academy" className="w-full h-full object-cover" />
        </div>
        <div className="her0-content absolute inset-0 bg-[#e6dada92] to-transparent">
          <div className="flex flex-col items-center justify-center h-full text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-800 text-shadow-2xs text-shadow-amber-600">Khyber Afghan English Language and Computer Academy</h1>
            <p className="text-lg md:text-xl mb-8 px-3 bg-blue-800">Empowering Futures Through Education</p>
            <Link href="#/courses" className="bg-blue-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      
    </>
  );
}
