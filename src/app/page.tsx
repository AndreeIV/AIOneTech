import Image from "next/image";
import ScrollVelocity from "@/components/ScrollVelocity";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black " >
      {/* Sección del Portafolio / Título */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white uppercase tracking-widest">
          AIOne Tech
        </h1>
        <p className="text-gray-400">Cybersecurity & Tech Support</p>
      </div>

      {/* Aquí insertas el componente con las props que ya tienes */}

      <div className="w-[80%] max-w-[1000px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <ScrollVelocity 
        texts={['Andree', 'Ismodes']} 
        velocity={50} // Bajé un poco la velocidad para que sea legible
        className="text-red-700 font-regular text-xl"
        numCopies={20} 
        damping={50} 
        stiffness={100} 
      />

      {/* Puedes agregar otra instancia debajo con dirección opuesta si quieres */}
      <div className="mt-20">
        <ScrollVelocity 
          texts={['Prueba', 'Andree']} 
          velocity={-50} // Velocidad negativa para que ruede hacia el otro lado
          className="text-white/20 font-regular text-xl"
        />
      </div>


      </div>
    </div>
  );
}
