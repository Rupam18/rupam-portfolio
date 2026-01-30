import Image from "next/image";
export default function Home() {
  return (
    <main className="bg-slate-900 text-white">


      {/* HERO */}

      <section className="h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
        <Image
          src="/mypic.jpeg"
          alt="Rupam Sarangi"
          width={160}
          height={160}
          className="rounded-full mx-auto mb-6 border-4 border-slate-700"
/>

          <h1 className="text-5xl font-bold">
            Rupam Kumar Sarangi
          </h1>

          <p className="text-xl text-slate-500 mt-4">
            Java and Salesforce Developer
          </p>

          <p className="mt-4 text-slate-400">
            I build scalable backend systems and business automation using Java, Spring Boot, and Salesforce.
          </p>

          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition">
            View My Work
          </button>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-slate-300 leading-8">
          I am a backend-focused developer with hands-on experience building secure APIs,
          authentication systems, and business automation using Java, Spring Boot, and Salesforce.
          I enjoy solving real business problems and writing clean, scalable code.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-4 rounded-lg">Java</div>
          <div className="bg-slate-800 p-4 rounded-lg">Spring Boot</div>
          <div className="bg-slate-800 p-4 rounded-lg">REST APIs</div>
          <div className="bg-slate-800 p-4 rounded-lg">MySQL</div>
          <div className="bg-slate-800 p-4 rounded-lg">Salesforce</div>
          <div className="bg-slate-800 p-4 rounded-lg">Apex & SOQL</div>
        </div>
      </section>
      <section className="py-24 max-w-5xl mx-auto px-6">
  <h2 className="text-3xl font-bold mb-8">Projects</h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">Authentication System</h3>
      <p className="text-slate-400 mb-4">
        Secure login and signup system with JWT authentication and role-based access.
      </p>
      <p className="text-sm text-slate-500">Java • Spring Boot • JWT • MySQL</p>
    </div>

    <div className="bg-slate-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">Task Management API</h3>
      <p className="text-slate-400 mb-4">
        REST API for managing tasks with user assignment and status tracking.
      </p>
      <p className="text-sm text-slate-500">Java • REST • MySQL</p>
    </div>

    <div className="bg-slate-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">Salesforce Lead Automation</h3>
      <p className="text-slate-400 mb-4">
        Automated lead routing and follow-ups using Apex triggers and Flows.
      </p>
      <p className="text-sm text-slate-500">Salesforce • Apex • SOQL</p>
    </div>

  </div>
</section>
<section className="py-24 max-w-5xl mx-auto px-6 text-center">
  <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
  <p className="text-slate-400 mb-8">
    Want to work together or discuss an opportunity? Feel free to reach out.
  </p>

  <div className="flex justify-center gap-6">
    <a
      href="mailto:rupamsarangi2001@gmail.com"
      className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
    >
      Email Me
    </a>

    <a
      href="https://github.com/Rupam18"
      target="_blank"
      className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/rupam-sarangi/"
      target="_blank"
      className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10"
    >
      LinkedIn
    </a>
  </div>
</section>

    </main>
  );
}
