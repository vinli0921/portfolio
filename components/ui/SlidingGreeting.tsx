"use client";
import React from 'react';
import { motion } from 'framer-motion';

const greetings = [
  "Hello!",       // English
  "你好!",        // Chinese (Mandarin)
  "こんにちは!",    // Japanese
  "안녕하세요!",    // Korean
  "Hola!",        // Spanish
  "Bonjour!",     // French
  "Guten Tag!",   // German
  "Ciao!",        // Italian
  "Olá!",         // Portuguese
  "Привет!",      // Russian
  "مرحبا!",       // Arabic
  "नमस्ते!",      // Hindi
  "Hej!",         // Swedish
  "Hallo!",       // Dutch
  "Γεια σας!",    // Greek
  "Merhaba!",     // Turkish
  "שלום!",        // Hebrew
  "Sawubona!",    // Zulu
  "Jambo!",       // Swahili
  "Xin chào!",    // Vietnamese
  "สวัสดี!",      // Thai
  "Selamat!",     // Indonesian/Malay
  "Kumusta!",     // Filipino
  "Salam!",       // Persian
  "Halo!",        // Indonesian
  "Chào!",        // Vietnamese (casual)
  "Salut!",       // Romanian
  "Ahoj!",        // Czech
  "హలో!",        // Telugu
  "வணக்கம்!",     // Tamil
];

const SlidingGreeting = () => {
  // Create a duplicated array for seamless looping
  const duplicatedGreetings = [...greetings, ...greetings];

  return (
    <div className="overflow-hidden whitespace-nowrap max-w-80">
      <motion.div
        className="inline-flex gap-8"
        animate={{
          x: [`0%`, `-${100}%`],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60, // Adjust speed here (lower = faster)
            ease: "linear",
          },
        }}
      >
        {duplicatedGreetings.map((greeting, index) => (
          <span
            key={index}
            className="uppercase tracking-widest text-xs text-blue-100 flex-shrink-0"
          >
            {greeting}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingGreeting; 