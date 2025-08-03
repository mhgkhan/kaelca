import React from 'react'

const page = () => {
  return (
    <>

      <section className="w-full">
        <div className="container mx-auto">
          <div className="md:px-0 px-2 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-black">About Us</h1>
            <p className="text-lg md:text-xl mb-6 dark:text-gray-200 text-gray-700">
              Khyber Afghan Academy is a leading educational institution dedicated to empowering students through quality language and
              computer education. Our mission is to provide accessible, high-quality training that equips learners with the skills they need to succeed in today's digital world.
            </p>
            <p className="text-lg md:text-xl mb-6 dark:text-gray-200 text-gray-700">
              We offer a range of courses in spoken English, computer skills, and digital literacy, designed to meet the needs of students at all levels.
              Our experienced instructors use innovative teaching methods to ensure that every student receives personalized attention and support.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="md:px-0 px-2 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-black">Who we are</h2>
            <p className="text-lg md:text-xl mb-6 dark:text-gray-200 text-gray-700">
              Khyber Afghan Academy is a premier educational institution dedicated to providing high-quality language and computer education.
              Our mission is to empower students with the skills they need to succeed in today's digital world.
              We offer a range of courses in spoken English, computer skills, and digital literacy, designed to meet the needs of students at all levels.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="md:px-0 px-2 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-black">Our Mission</h2>
            <p className="text-lg md:text-xl mb-6 dark:text-gray-200 text-gray-700">
              Our mission is to provide accessible, high-quality training that equips learners with the skills they need to succeed in today's digital world.
              We are committed to fostering a supportive learning environment that encourages personal and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="md:px-0 px-2 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-black">Our Vision</h2>
            <p className="text-lg md:text-xl mb-6 dark:text-gray-200 text-gray-700">
              Our vision is to be a leading educational institution recognized for excellence in language and computer education.
              We strive to empower students to achieve their full potential and become confident, skilled professionals in their chosen fields.
            </p>
          </div>
        </div>
      </section>

      

    </>
  )
}

export default page
