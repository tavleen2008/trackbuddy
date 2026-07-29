import Image from "next/image";
import Star from "./components/Star";
import GreenStar from "./components/GreenStar";

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(228,181,95,0.2) 0%, rgba(228,181,95,0.2) 100%), #FFFFFF",
      }}
    >
      {/* ---------- Background Paper Top Left ---------- */}
      <Image
        src="/page1.png"
        alt=""
        width={666}
        height={700}
        priority
        className="
          absolute
          pointer-events-none
          select-none
          -top-28 -left-36
          sm:-top-40 sm:-left-48
          lg:-top-[277px] lg:-left-[372px]
          w-[420px]
          sm:w-[520px]
          lg:w-[666px]
          h-auto
        "
      />

      {/* ---------- Background Paper Bottom Right ---------- */}
      <Image
        src="/page2.png"
        alt=""
        width={722}
        height={722}
        className="
          absolute
          pointer-events-none
          select-none
          -bottom-32 -right-20
          sm:-bottom-44 sm:-right-28
          lg:-bottom-[278px] lg:-right-[135px]
          w-[420px]
          sm:w-[560px]
          lg:w-[722px]
          h-auto
        "
      />

      {/* ---------- Brown Star ---------- */}
      <Star
        className="
          absolute
          -top-6 -left-10
          sm:-top-10 sm:-left-12
          lg:-top-[53px] lg:-left-[89px]
          w-36
          sm:w-48
          lg:w-[323px]
          h-auto
        "
      />

      {/* ---------- Green Star ---------- */}
      <GreenStar
        className="
          absolute
          right-[-40px]
          top-48
          sm:right-[-60px]
          sm:top-56
          lg:right-[-105px]
          lg:top-[302px]
          w-36
          sm:w-52
          lg:w-[298px]
          h-auto
        "
      />

      {/* ---------------- Hero Content ---------------- */}

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

  {/* Quote */}
  <p
    className="
      text-[#8C6046]
      text-xl
      sm:text-2xl
      md:text-3xl
      lg:text-[40px]
      font-medium
      max-w-5xl
    "
  >
    Because "I will study tomorrow" never works
  </p>

  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">

  <h1
    className="
      text-[#2C2725]
      text-6xl
      sm:text-7xl
      md:text-8xl
      lg:text-[96px]
      font-black
      tracking-tight
    "
  >
    LockIn
  </h1>


</div>

  {/* Description */}
  <p
    className="
      mt-8
      max-w-4xl
      text-[#394B0D]
      text-lg
      sm:text-xl
      md:text-2xl
      lg:text-[34px]
      leading-relaxed
    "
  >
    Track your syllabus, plan your study hours,
    and know if you're actually on track.
  </p>
  {/* Buttons */}
<div className="mt-10 flex flex-col sm:flex-row items-center gap-6">

  <button
    className="
      bg-[#96584E]
      text-[#F1E4CC]
      px-10
      py-4
      rounded-xl
      text-xl
      sm:text-2xl
      hover:scale-105
      transition-all
      shadow-lg
    "
  >
    Sign Up
  </button>

  <button
    className="
      bg-[#96584E]
      text-[#F1E4CC]
      px-10
      py-4
      rounded-xl
      text-xl
      sm:text-2xl
      hover:scale-105
      transition-all
      shadow-lg
    "
  >
    Login
  </button>

</div>

</section>

    </main>
  );
}