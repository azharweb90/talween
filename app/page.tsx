import Image from "next/image";

const services = [
  {
    title: "Signage",
    description: "Design and fabrication of indoor and outdoor signs.",
  },
  {
    title: "Installation",
    description: "Safe, precise on-site installation by our own team.",
  },
  {
    title: "Maintenance",
    description: "Repairs, cleaning and upkeep to keep signs looking new.",
  },
  {
    title: "Build",
    description: "Custom structures, frames and fit-outs built to order.",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-[#f6f8ff] text-[#0b1640]">
      {/* Blueprint grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(#0236fb14 1px, transparent 1px), linear-gradient(90deg, #0236fb14 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#0236fb] opacity-10 blur-3xl"
      />

      <main className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <Image
          src="/Images/Logo.svg"
          alt="Talween logo"
          width={120}
          height={117}
          priority
          className="h-24 w-auto sm:h-28"
        />

        <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#0236fb]/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0236fb]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#0236fb]" />
          Coming soon
        </span>

        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          We&apos;re building something{" "}
          <span className="text-[#0236fb]">you&apos;ll notice.</span>
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-[#0b1640]/70 sm:text-lg">
          Our new website is under construction. Talween designs, builds,
          installs and maintains signage that gets your business seen.
        </p>

        <ul className="mt-12 grid w-full gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-2xl border border-[#0236fb]/10 bg-white/80 p-5 shadow-sm backdrop-blur"
            >
              <div className="mb-3 h-1 w-8 rounded-full bg-[#0236fb]" />
              <h2 className="font-semibold">{service.title}</h2>
              <p className="mt-1 text-sm leading-6 text-[#0b1640]/65">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </main>

      <footer className="relative py-6 text-center text-sm text-[#0b1640]/50">
        © {new Date().getFullYear()} Talween. All rights reserved.
      </footer>
    </div>
  );
}
