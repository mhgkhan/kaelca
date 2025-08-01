import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen relative">
        <div className="hero-img relative w-full h-full">
          <Image src="/images/hero.jpg" width={1200} height={800} alt="Khyber afghan english language and computer acadmey" className="w-full h-full" />
        </div>
        <div className="her0-content absolute inset-0">
          <div className="flex flex-col items-center justify-center h-full text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Khyber Afghan English Language and Computer Academy</h1>
            <p className="text-lg md:text-xl mb-8">Empowering Futures Through Education</p>
            <a href="#courses" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Explore Courses
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
