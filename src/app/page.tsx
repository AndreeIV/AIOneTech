import Image from "next/image";
import ScrollVelocity from "@/components/ScrollVelocity";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiSharp,
  SiGithub,
} from "react-icons/si";
import Prism from "@/components/background";
import GradientText from "@/components/reactbits/GradientText";
import AnimatedContent from "@/components/reactbits/AnimatedContent"
import TrueFocus from "@/components/reactbits/TrueFocus";


import TextType from "@/components/reactbits/TextType";
import ButtonWhatsapp from "@/components/ButtonWhatsapp";

// ICONS
import { FaDev,  FaShieldHalved, FaToolbox} from "react-icons/fa6";
import Link from "next/link";


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiPython />, title: "Python", href: "https://tailwindcss.com" },
  { node: <SiSharp />, title: "Csharp", href: "https://tailwindcss.com" },
  { node: <SiGithub />, title: "Github", href: "https://tailwindcss.com" },
  
];

export default function Home() {
  return (

  
    <div className="flex flex-col flex-1 items-center font-sans">
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
        <div className=" h-50 w-5/7 flex flex-col items-center justify-center text-center top-1/8 left-1/2 absolute -translate-x-1/2 ">
          {/* <h1 className="text-2xl font-bold mb-2 text-white uppercase tracking-widest text-shadow-black"></h1> */}
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <GradientText
              colors={["#DC2626", "#FF9FFC", "#B497CF"]}
              animationSpeed={20}
              showBorder={false}
              className="text-4xl mb-4"
            >
              AIOne Tech
            </GradientText>
          </AnimatedContent>

          <TrueFocus
            sentence="Cybersecurity Tech_Support Programming"
            manualMode={false}
            blurAmount={1.5}
            borderColor="#DC2626"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
        
        </div>
      </div>
      
      <div className="flex justify-center">

          <ButtonWhatsapp></ButtonWhatsapp>
        </div>

      {/* QUIEN SOY? */}
      <div className="text-center w-dvw mt-15 mb-20">
        <TextType
          style={{ color: "#DC2626" }}
          className="text-start ml-10 mb-4 text-2xl tracking-wider"
          // text={["Yo soy Andree"]}
          typingSpeed={75}
          pauseDuration={2000}
          showCursor
          cursorCharacter="_"
          text={[ "I'm AndreeIV 🌹" ]}
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
        />

        {/* <h2 className="text-start ml-10 mb-2 text-2xl uppercase tracking-wider">I'AM Andree</h2> */}

        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={true}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <p className="text-xs ml-10 mr-10">
            Estudiante de Ingeniería de Ciberseguridad en SENATI y fundador de
            AIOne Tech. Me apasiona la tecnología en todas sus capas: desde
            auditar redes y configurar sistemas seguros, hasta desarrollar
            aplicaciones robustas. Además del código, me ensucio las manos
            ofreciendo soporte técnico realizando diagnósticos, mantenimiento y
            reparación de PCs e impresoras para asegurar que tus equipos siempre
            rindan al máximo.
          </p>
        </AnimatedContent>
      </div>

      {/* SKILLS */}
      <div className="text-center w-dvw mb-20">
        <LogoLoop
            className="mb-10"
            logos={techLogos}
            speed={80}
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







      {/* SERVICIOS */}
      <div className="w-dvw pl-5 pr-5">

        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl text-center font-extrabold pb-5">Soluciones Digitales</h2>
          <p className="font-normal text-center"> Soporte Técnico, Programación Personalizada, Ciberseguridad y más.</p>
          <button className="block border-2 rounded-sm px-6 py-3 mt-5">
            <Link href="/servicios" aria-current="true" className='bg-gray-950/50 text-white hover:bg-white/5 hover:text-white'>Ver Servicios</Link>
          </button>
        </div>

        <br /><br />
        
        <div className="flex flex-col md:flex-row gap-10 pl-5 pr-5">

          <div className="bg-gray-900 rounded-2xl p-5 flex gap-5 justify-center">
            <FaToolbox size={128} />
            <div className="flex flex-col justify-center">
              <h3 className="text-start text-xl font-bold mb-5">Soporte Técnico</h3>
              <p className="text-justify font-normal text-xs">Reparación y mantenimiento experto de computadoras y laptops para un rendimiento óptimo.</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-5 flex gap-5 justify-center">
            <FaDev size={128} />
            <div className="flex flex-col justify-center ">
              <h3 className="text-start text-xl font-bold mb-5">Programas Propios</h3>
              <p className="text-justify font-normal text-xs">Soluciones de software y script personalizados diseñados para facilitar tus tareas diarias.</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-5 flex gap-5 justify-center">
            <FaShieldHalved size={128} />
            <div className="flex flex-col justify-center">
              <h3 className="text-start text-xl font-bold mb-5"> Seguridad Personal</h3>
              <p className="text-justify font-normal text-xs">Protección de datos y limpieza de malware para mantener tu vida digital segura.</p>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
}
