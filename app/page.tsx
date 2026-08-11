import type { Metadata } from "next";
import { LocalTime } from "./LocalTime";
import { RadioPlayer } from "./RadioPlayer";
import { SaloonDepth } from "./SaloonDepth";
import { SaloonAtmosphere } from "./SaloonAtmosphere";

export const metadata: Metadata = {
  title: "Nukkad Saloon",
  description: "An ambient street-corner radio from an always-open saloon.",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#100d0a] text-[#fff4df]">
      <section className="saloon-scene relative isolate flex min-h-screen items-center justify-center px-5 py-10">
        <SaloonDepth />
        <div
          className="hero-bg absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/nukkad-saloon-hero-single-tubelight-removed-2x.png')",
            backgroundPosition: "center 52%",
          }}
          aria-hidden="true"
        />
        <div className="light-particles absolute inset-0 -z-10" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_55%_47%,rgba(52,21,12,0),rgba(12,10,8,0.22)_45%,rgba(9,8,7,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-gradient-to-t from-[#100d0a]/85 to-transparent" />
        <LocalTime />

        <div className="hero-stack mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center">
          <div className="brand-lockup">
            <h1 className="font-serif text-[clamp(3rem,9vw,7.4rem)] font-black leading-none tracking-normal text-[#ffe6b0] drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
              नुक्कड़ सैलून
            </h1>
            <p className="tagline text-base font-semibold uppercase tracking-[0.2em] text-[#ffd18b] sm:text-lg">
              Nukkad Saloon · open all hours
            </p>
          </div>

          <SaloonAtmosphere />

          <div className="radio-panel">
            <RadioPlayer />
          </div>
        </div>
      </section>
    </main>
  );
}
