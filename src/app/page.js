import LoginForm from "@/components/ui/LoginForm";

export default function Home() {
  return (
    <section className="login-section mt-[-10px] w-full min-h-[70vh]" style={{ background: "url(/images/banner.jpg) no-repeat center center/cover" }}>
      <div className="container mx-auto">

        <LoginForm />
    
      </div>
    </section>
  );
}
