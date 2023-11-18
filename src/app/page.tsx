import Image from "next/image";
import { LoginForm } from "./_components/form/login-form";

export default  function Home() {
  return (
    <main>
    <section className="relative h-screen">
      <Image width={1600} height={768} className="w-full h-full object-cover brightness-50" src="/login.jpg" alt="intro image" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center align-middle">
        <LoginForm/>
      </div>
    </section>
  </main>
  );
}

