import { Ruluko, Merriweather_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken";




const ruluko = Ruluko({
  variable: "--font-ruluko",
  subsets: ["latin"],
  weight: ["400"]
});

const merriweathersans = Merriweather_Sans({
  variable: "--font-merriweathersans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"]
})





export const metadata = {
  title: "KHYBER AGHAN ENGLISH LANGUAGE AND COMPUTER ACADMEY",
  description: "Learn English and Computer Skills with Khyber Aghan - Your Path to Success!",
  keywords: "English Language, Computer Academy, Khyber Aghan, Language Learning, Computer Skills, Education, Online Courses, Language School, Computer Training, English Classes",
};


export default async function RootLayout({ children }) {

  const allCookies = await cookies();
  // console.log(allCookies)
  
  const token = allCookies.get("AUTH_KEY");
  let userData = {
    name: "",
    email: ""
  };

  let authorized;

  if (token) {
    // decrypting token 
    const decryptingToken = JWT.verify(token.value, process.env.JWT_SECRET_KEY);
    console.log(decryptingToken)
    const email = decryptingToken.email || null;
    if (!email) {
      authorized = false;
    }
    else {
      authorized = true;
      userData.email = decryptingToken.email;
      userData.name = decryptingToken.name;
    }
  }
  else {
    authorized = false;
  }

  // console.log(authorized, userData)


  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="KAELACA" />
      </head>
      <body
        className={`${ruluko.className} ${merriweathersans.variable}  antialiased`}
      >
        <Header authorized={authorized} name={userData.name} email={userData.email} />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
