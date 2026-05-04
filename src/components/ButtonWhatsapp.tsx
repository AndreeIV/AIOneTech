'use client'

import React from "react"


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
            <button onClick={handleClick} className="mt-2 flex gap-3 border rounded-sm p-3 border-gray-500"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z"/>
            </svg>Solicitar Servicio</button>
        </>
    )
}

