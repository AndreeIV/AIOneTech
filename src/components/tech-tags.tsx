'use client'; // Necesario en Next.js para componentes con animación
import { motion } from 'framer-motion';

const tags = [
  "Cybersecurity", "Networking", "Godot Engine", 
  "Linux Arch", "React", "Next.js", "AIOne Tech"
];

export default function TechTags() {
  return (
    <div className="flex flex-wrap gap-3 p-10 bg-[#0a0a0a] justify-center">
      {tags.map((tag, index) => (
        <motion.span
          key={index}
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(168, 85, 247, 0.5)" // Un toque púrpura como tu imagen
          }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 cursor-pointer rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium transition-colors shadow-lg"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}