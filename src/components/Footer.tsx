'use client'
import Link from "next/link";
import { SiFacebook, SiGithub, SiInsta360, SiInstagram, SiOnlyfans, SiTiktok } from "react-icons/si";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mi", href: "/" },
];

const iconos = [
    { node: <SiInstagram size={32}/>, name: 'Instagram', href: '/' },
    { node: <SiFacebook size={32} />, name: 'Facebook', href: '/' },
    { node: <SiGithub size={32} />, name: 'Github', href: '/' },
    { node: <SiTiktok size={32} />, name: 'Tiktok', href: '/' },
    { node: <SiOnlyfans size={32} />, name: 'Onlyfans', href: '/' }
]

export default function Main() {
  return (
    <footer className="z-50 relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 flex flex-col gap-10">
      <div className="text-center mt-10 flex justify-center gap-5">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            // aria-current={item.current ? 'page' : undefined}
            // className={classNames(
            //   item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
            //   'rounded-md px-3 py-2 text-sm font-medium',
            // )}
            className="text-gray-400"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* REDES SOCIALES */}
      <div className="text-center flex justify-center gap-10">
        {iconos.map((item) => (
            <Link key={item.name} href={item.href}>{item.node}</Link>
        ))}
      </div>

      <div className="text-center text-xs mb-10">
        © 2024 Your Company, Inc. All rights reserved.
      </div>
    </footer>
  );
}
