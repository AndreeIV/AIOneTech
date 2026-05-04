'use client'

import React from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiSharp,
  SiGithub,
  SiWhatsapp,
} from "react-icons/si";

const phone = 51938985009
const text = "🌹"


function isMobile() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

export default function Home() {

    const handleClick = () => {

        const webUrl = `https://wa.me/${phone}?text=${text}`;
        const appUrl = `whatsapp://send?phone=${phone}&text=${text}`;


        if (isMobile()) {
            // intenta abrir app nativa; si no funciona, se puede abrir web como fallback
            window.location.href = appUrl;
            // Nota: algunos navegadores bloquean esquemas; generalmente funciona en móviles.
            // Si prefieres, puedes usar setTimeout para abrir fallback tras unos ms.
            setTimeout(() => window.open(webUrl, "_blank", "noopener,noreferrer"), 700);
        } else {
            window.open(webUrl, "_blank", "noopener,noreferrer");
        }


        alert('Hola mundo')
    }

    return (
        <>
            <button onClick={handleClick} className="mt-2 flex gap-3 items-center border rounded-sm p-3 border-gray-500">
                <SiWhatsapp size={32} />
                Cotizar Servicio
            </button>
        </>
    )
}

