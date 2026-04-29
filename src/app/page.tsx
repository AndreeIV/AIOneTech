import Image from "next/image";
import ScrollVelocity from "@/components/ScrollVelocity";
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiSharp, SiGithub } from 'react-icons/si';
import Prism from '@/components/background'

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://tailwindcss.com" },
  { node: <SiSharp />, title: "Csharp", href: "https://tailwindcss.com" },
  { node: <SiGithub />, title: "Github", href: "https://tailwindcss.com" },
];



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans" >

      <div className="relative h-75 w-full">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3}
          baseWidth={5.5}
          scale={2}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={0.5}
        />


      {/* TEXTO */}
      <div className=" h-50 flex flex-col items-center justify-center text-center mb-10 top-1/7 left-1/2 absolute -translate-x-1/2">

        <h1 className="text-2xl font-bold mb-2 text-white uppercase tracking-widest text-shadow-black">AIOne Tech</h1>

        <p className="text-gray-200 w-dvw">Cybersecurity<br />Tech Support | Programming</p>

      </div>
      </div>




      {/* SKILLS */}
      <div className="text-center w-dvw">
        <h2 className="text-white mb-5 text-2xl uppercase tracking-wider">Programing Skills</h2>

        <div className="w-full h-50" >
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={32}
            gap={30}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="oklch(0.145 0 0)"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
      

    </div>
  );
}
