'use client';
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const serviceNames: Record<string, string> = {
  "identity-branding": "Identity and Branding",
  "visual-communication": "Visual Communication",
  "multimedia-web": "Multimedia and Web",
  "event-management": "Event Management",
  "medical-communications": "Medical Communications",
  "digital-marketing": "Digital Marketing",
  "content-creation": "Content Creation",
  "brand-reminders": "Brand Reminders",
};

const contentLines = [
  "Social Media And Website Content",
  "Script Writing ..............",
  "Professional Translation Services",
  "Editing And Proofreading",
];

function useTypingAnimation(lines: string[], speed = 40, delay = 600) {
  const [displayed, setDisplayed] = useState<string[]>(Array(lines.length).fill(""));
  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timeout: ReturnType<typeof setTimeout>;
    function type() {
      if (currentLine < lines.length) {
        if (currentChar < lines[currentLine].length) {
          setDisplayed((prev) => {
            const newLines = [...prev];
            newLines[currentLine] = lines[currentLine].slice(0, currentChar + 1);
            return newLines;
          });
          currentChar++;
          timeout = setTimeout(type, speed);
        } else {
          currentLine++;
          currentChar = 0;
          timeout = setTimeout(type, delay);
        }
      }
    }
    setDisplayed(Array(lines.length).fill(""));
    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, [lines, speed, delay]);
  return displayed;
}

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const key = params?.service as string;
  const isReminders = key === "brand-reminders";
  const isBranding = key === "identity-branding";
  const isContent = key === "content-creation";
  const isVisual = key === "visual-communication";
  const isEvent = key === "event-management";
  const isDigital = key === "digital-marketing";
  const isMultimedia = key === "multimedia-web";
  const isMedical = key === "medical-communications";

  const bgStyle = isReminders
    ? {
        backgroundImage: "url('/Reminder.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        filter: "brightness(1.1) saturate(1.2)", // 🌟 boost vibrancy
      }
    : isBranding
    ? {
        backgroundImage: "url('/Brand.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }
    : isContent
    ? {
        backgroundImage: "url('/content-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }
    : isVisual
    ? {
        backgroundImage: "url('/Visual-1.jpg')",
        backgroundSize: "cover", // Full screen
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }
    : isEvent
    ? {
        backgroundImage: "url('/Stage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }
    : isDigital
    ? {
        backgroundImage: "url('/digital-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }
    : isMultimedia
    ? {
        backgroundImage: "url('/92252206_xl_normal_none.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }
    : isMedical
    ? {
        backgroundImage: "url('/medical.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }
    : {};

  const typedLines = useTypingAnimation(contentLines, 35, 600);

  // AnimatePresence for smooth transitions between service pages
  return (
    <motion.div
      key={key}
      style={bgStyle}
      className={isReminders ? "relative" : ""}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {isReminders && (
        <>
          {/* Logo and heading top left */}
          <div className="absolute top-8 left-8 z-20 flex flex-col items-start">
            <Image src="/Gifts.png" alt="Brand Reminders Logo" width={160} height={160} />
            <span className="text-white font-extrabold text-2xl mt-2 tracking-widest drop-shadow-lg">
              BRAND<br />
              <span className="font-normal tracking-[0.3em] text-lg">REMINDERS</span>
            </span>
          </div>

          {/* Animated arrows */}
          <motion.div
            className="absolute top-[110px] left-48 flex gap-1 z-10"
            animate={{ x: [0, 10, 0], transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" } }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="text-white/60 text-3xl font-bold">&#60;</span>
            ))}
          </motion.div>

          {/* Main text block */}
          <div className="absolute top-80 left-28 z-20">
            <div className="relative">
              {/* Creative overlapping */}
              <motion.span
                className="absolute -top-20 -left-4 font-playlist text-9xl text-[#4A90E2] opacity-90 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Creative
              </motion.span>

              {/* Promotional Gifts */}
              <motion.span
  className="text-white font-extrabold text-5xl md:text-10xl tracking-wide drop-shadow-lg relative z-10"
  style={{ fontFamily: '"Arial Black", Arial, sans-serif' }} // 👈 add this
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
>
  Promotional Gifts
</motion.span>

            </div>

            {/* Tagline */}
            <motion.span
              className="text-white text-3xl md:text-5xl drop-shadow-lg mt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Aligned With Marketing Strategies
            </motion.span>
          </div>

          {/* Centered Brand Reminders text */}
          <motion.div
            className="absolute left-1/3 top-2/3 -translate-x-1/2 -translate-y-1/2 z-20 text-white font-bold text-5xl md:text-6xl drop-shadow-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            Brand Reminders
          </motion.div>

          {/* Background texts for depth */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <span className="absolute top-0 left-1/4 text-white/10 text-[6vw] font-bold uppercase tracking-widest">BRAND</span>
            <span className="absolute top-1/2 left-0 text-white/10 text-[4vw] font-bold uppercase tracking-widest" style={{ transform: 'translateY(-50%)' }}>Brand Reminders</span>
            <span className="absolute bottom-8 left-1/4 text-white/10 text-[2.5vw] font-bold uppercase tracking-widest">Aligned With Marketing Strategies</span>
            <span className="absolute bottom-0 right-8 text-white/10 text-[8vw] font-bold">&amp;</span>
          </div>

          {/* Back to Main Menu button */}
          <button
            onClick={() => router.push('/?from=service')}
            className="fixed left-1/2 -translate-x-1/2 bottom-10 z-30 px-6 py-2 bg-[#1A3366] text-white rounded-md text-base font-medium hover:bg-[#16305a] transition-colors"
            style={{ minWidth: 160 }}
          >
            Back to Main Menu
          </button>
        </>
      )}
      {isBranding && (
        <>
          {/* Logo and heading top left */}
          <div className="absolute top-8 left-8 z-20 flex flex-col items-start">
            <Image src="/Idin and Branding.png" alt="Identity and Branding Logo" width={160} height={160} />
          </div>
          {/* Main text blocks - centered left */}
          <div className="absolute top-1/2 left-[15vw] -translate-y-1/2 z-20">
            <div className="flex flex-col items-start gap-4">
              <span className="text-white font-square text-4xl md:text-5xl drop-shadow-lg">Brand Name</span>
              <span className="text-gray-400 font-square text-3xl md:text-4xl drop-shadow-lg -mt-2 pl-10">And Brand Story</span>
              <span className="text-white font-square text-3xl md:text-4xl drop-shadow-lg mt-6">Product</span>
              <span className="text-gray-400 font-square text-2xl md:text-3xl drop-shadow-lg -mt-1 pl-10">And Packaging Design</span>
            </div>
          </div>
          {/* Visual Identity block bottom left */}
          <div className="absolute left-8 bottom-12 z-20 flex flex-col items-start">
            <span className="text-white font-square text-3xl md:text-4xl drop-shadow-lg">Visual Identity <span className="align-top">. . .</span></span>
            <span className="text-white font-square text-2xl md:text-3xl drop-shadow-lg mt-1">LOGO, Color Palette,</span>
            <span className="flex items-end gap-2 mt-1">
              <span className="font-playlist text-3xl md:text-4xl text-white drop-shadow-lg italic">Typefaces</span>
              <span className="text-gray-400 font-square text-2xl md:text-3xl drop-shadow-lg ml-2">And Fonts</span>
            </span>
          </div>
          {/* Back to Main Menu button bottom center */}
          <button
            onClick={() => router.push('/?from=service')}
            className="fixed left-1/2 -translate-x-1/2 bottom-10 z-30 px-6 py-2 bg-[#1A3366] text-white rounded-md text-base font-medium hover:bg-[#16305a] transition-colors"
            style={{ minWidth: 160 }}
          >
            Back to Main Menu
          </button>
        </>
      )}
      {isContent && (
        <>
          {/* Logo top left */}
          <div className="absolute top-8 left-8 z-20 flex flex-col items-start">
            <Image src="/Content.png" alt="Content Creation Logo" width={160} height={160} />
            <span className="text-white font-extrabold text-2xl mt-2 tracking-widest drop-shadow-lg">CONTENT<br /><span className="font-normal tracking-[0.3em] text-lg">CREATION</span></span>
          </div>
          {/* Typing text on paper */}
          <div className="absolute left-1/4 top-[36%] w-1/2 flex flex-col items-center z-10">
            {contentLines.map((line, i) => (
              <span
                key={i}
                className="block text-[#a05a00] font-mono text-2xl md:text-3xl font-bold text-center mb-6 whitespace-pre"
                style={{textShadow: '0 2px 12px #fff, 0 0 2px #fff'}}
              >
                {typedLines[i]}
              </span>
            ))}
          </div>
          {/* Back to Main Menu button bottom center */}
          <button
            onClick={() => router.push('/?from=service')}
            className="fixed left-1/2 -translate-x-1/2 bottom-10 z-30 px-6 py-2 bg-[#1A3366] text-white rounded-md text-base font-medium hover:bg-[#16305a] transition-colors"
            style={{ minWidth: 160 }}
          >
            Back to Main Menu
          </button>
        </>
      )}
      {isVisual && (
        <>
          {/* Logo and heading top left (consistent with other pages) */}
          <div className="absolute top-8 left-8 z-30 flex flex-col items-start select-none">
            <Image src="/Visual comm.png" alt="Visual Communication Logo" width={160} height={160} />
            <span className="text-white font-extrabold text-2xl mt-2 tracking-widest drop-shadow-lg font-square">
              VISUAL<br />
              <span className="font-normal tracking-[0.3em] text-lg">COMMUNICATIONS</span>
            </span>
          </div>

          {/* Top right: Concept Creation (closer to center, cool font) */}
          <div className="absolute top-28 right-1/4 z-20 text-right select-none">
            <span className="text-white font-bold text-5xl md:text-6xl tracking-wide drop-shadow-lg font-square">Concept</span><br />
            <span className="text-[#4A90E2] italic font-playlist text-4xl md:text-5xl drop-shadow-lg">Creation</span>
          </div>

          {/* Left: Motion Graphics And Animation (closer to center, cool font) */}
          <div className="absolute left-12 top-1/2 z-20 select-none" style={{transform: 'translateY(-50%)'}}>
            <span className="text-white font-mono text-2xl md:text-3xl font-bold drop-shadow-lg font-square">Motion Graphics</span><br />
            <span className="text-white/80 font-mono text-xl md:text-2xl drop-shadow-lg font-square">And <span className="tracking-widest">A.n.i.m.a.t.i.o.n</span></span>
          </div>

          {/* Bottom left: Visualization And GRAPHIC DESIGN (closer to center, cool font) */}
          <div className="absolute left-1/4 bottom-24 z-20 select-none">
            <span className="text-white font-extrabold text-3xl md:text-4xl drop-shadow-lg font-square">Visualization</span><br />
            <span className="text-white font-bold text-2xl md:text-3xl drop-shadow-lg font-square">And <span className="tracking-widest">GRAPHIC DESIGN</span></span>
          </div>


          {/* Back to Main Menu button bottom center */}
          <button
            onClick={() => router.push('/?from=service')}
            className="fixed left-1/2 -translate-x-1/2 bottom-10 z-30 px-6 py-2 bg-[#1A3366] text-white rounded-md text-base font-medium hover:bg-[#16305a] transition-colors"
            style={{ minWidth: 160 }}
          >
            Back to Main Menu
          </button>
        </>
      )}
      {isEvent && (
        <>
          {/* Logo and heading top left */}
          <div className="absolute top-8 left-8 z-30 flex flex-col items-start select-none">
            <Image src="/MANAGEMENT.png" alt="Event Management Logo" width={160} height={160} />
            <span className="text-white font-extrabold text-2xl mt-2 tracking-widest drop-shadow-lg font-square">
              EVENT<br />
              <span className="font-normal tracking-[0.3em] text-lg">MANAGEMENT</span>
            </span>
          </div>

          {/* Logistics And Transportation - left */}
          <div className="absolute left-16 top-1/2 z-20 select-none">
            <span className="text-white font-square text-4xl md:text-5xl font-bold drop-shadow-lg">Logistics</span><br />
            <span className="text-gray-300 font-square text-2xl md:text-3xl drop-shadow-lg">And Transportation</span>
          </div>

          {/* Trade Show Booths And Display Systems - bottom left */}
          <div className="absolute left-8 bottom-16 z-20 select-none">
            <span className="text-white font-square text-3xl md:text-4xl font-bold drop-shadow-lg">Trade Show Booths</span><br />
            <span className="text-gray-300 font-square text-2xl md:text-3xl drop-shadow-lg">And Display Systems</span>
          </div>

          {/* Event Concept And Theme Creation - center */}
          <div className="absolute left-1/2 top-1/2 z-20 select-none" style={{transform: 'translate(-50%, -50%)'}}>
            <span className="text-white font-square text-4xl md:text-5xl font-bold drop-shadow-lg">Event Concept</span><br />
            <span className="text-gray-300 font-square text-2xl md:text-3xl drop-shadow-lg">And Theme Creation</span>
          </div>

          {/* Venue Branding - top right */}
          <div className="absolute right-16 top-48 z-20 text-right select-none">
            <span className="text-white font-square text-3xl md:text-4xl font-bold drop-shadow-lg">Venue</span><br />
            <span className="text-gray-300 font-square text-2xl md:text-3xl drop-shadow-lg">BRANDING</span>
          </div>

          {/* Audio/Visual - bottom right */}
          <div className="absolute right-16 bottom-24 z-20 text-right select-none">
            <span className="text-white font-square text-3xl md:text-4xl font-bold drop-shadow-lg">Audio/Visual</span>
          </div>

          {/* Solutions - script font, bottom right */}
          <div className="absolute right-12 bottom-8 z-20 text-right select-none">
            <span className="text-white font-playlist text-4xl italic drop-shadow-lg opacity-80">Solutions</span>
          </div>
        </>
      )}
      {isDigital && (
        <>
          {/* Logo and heading top left */}
          <div className="absolute top-8 left-8 z-30 flex flex-col items-start select-none">
            <Image src="/Digital.png" alt="Digital Marketing Logo" width={160} height={160} />
            <span className="text-white font-extrabold text-2xl mt-2 tracking-widest drop-shadow-lg font-square">
              DIGITAL<br />
              <span className="font-normal tracking-[0.3em] text-lg">MARKETING</span>
            </span>
          </div>
          {/* Main overlays */}
          <div className="absolute left-1/4 top-1/3 z-20 select-none">
            <span className="text-[#444] font-square text-4xl md:text-5xl font-bold drop-shadow-lg">Digital Strategy</span>
          </div>
          <div className="absolute right-1/4 top-1/2 z-20 select-none">
            <span className="text-[#444] font-square text-4xl md:text-5xl font-bold drop-shadow-lg">Lead Generation</span>
          </div>
          <div className="absolute left-8 bottom-16 z-20 select-none">
            <span className="text-[#444] font-square text-2xl md:text-3xl font-bold drop-shadow-lg"># SOCIAL MEDIA ADVERTISING</span><br />
            <span className="text-[#888] font-square text-xl md:text-2xl drop-shadow-lg">and EMAIL MARKETING</span>
          </div>
          <div className="absolute right-8 top-8 z-20 select-none">
            <span className="text-[#444] font-playlist text-3xl italic drop-shadow-lg opacity-80">Search Engine Optimization</span>
          </div>
          <button
            onClick={() => router.push('/?from=service')}
            className="fixed left-1/2 -translate-x-1/2 bottom-10 z-30 px-6 py-2 bg-[#1A3366] text-white rounded-md text-base font-medium hover:bg-[#16305a] transition-colors"
            style={{ minWidth: 160 }}
          >
            Back to Main Menu
          </button>
        </>
      )}
      {isMultimedia && (
        <>
          {/* Logo and heading top left */}
          <div className="absolute top-8 left-8 z-30 flex flex-col items-start select-none">
            <Image src="/Multi Media.png" alt="Multimedia and Web Logo" width={160} height={160} />
            <span className="text-white font-extrabold text-2xl mt-2 tracking-widest drop-shadow-lg font-square">
              MULTIMEDIA<br />
              <span className="font-normal tracking-[0.3em] text-lg">AND WEB</span>
            </span>
          </div>
          {/* Main overlays */}
          <div className="absolute left-1/4 top-1/3 z-20 select-none">
            <span className="text-white font-playlist text-5xl md:text-6xl font-bold drop-shadow-lg">GAMES</span>
          </div>
          <div className="absolute left-1/4 top-1/2 z-20 select-none">
            <span className="text-white font-square text-3xl md:text-4xl font-bold drop-shadow-lg">Educational Programs</span>
          </div>
          <div className="absolute right-1/4 top-1/3 z-20 select-none">
            <span className="text-white font-square text-4xl md:text-5xl font-bold drop-shadow-lg">Interactive Media</span><br />
            <span className="text-white font-square text-2xl md:text-3xl drop-shadow-lg">And E-detailing</span>
          </div>
          <div className="absolute left-1/4 bottom-16 z-20 select-none">
            <span className="text-white font-square text-2xl md:text-3xl font-bold drop-shadow-lg">Presentation Show And Websites</span>
          </div>
          <div className="absolute left-1/4 top-1/4 z-20 select-none">
            <span className="text-white font-square text-2xl md:text-3xl font-bold drop-shadow-lg">OBJECTIVE</span>
          </div>
          <button
            onClick={() => router.push('/?from=service')}
            className="fixed left-1/2 -translate-x-1/2 bottom-10 z-30 px-6 py-2 bg-[#1A3366] text-white rounded-md text-base font-medium hover:bg-[#16305a] transition-colors"
            style={{ minWidth: 160 }}
          >
            Back to Main Menu
          </button>
        </>
      )}
      {isMedical && (
        <>
          {/* Logo and heading top left */}
          <div className="absolute top-8 left-8 z-30 flex flex-col items-start select-none">
            <Image src="/Medical.png" alt="Medical Communications Logo" width={160} height={160} />
            <span className="text-white font-extrabold text-2xl mt-2 tracking-widest drop-shadow-lg font-square">
              MEDICAL<br />
              <span className="font-normal tracking-[0.3em] text-lg">COMMUNICATIONS</span>
            </span>
          </div>
          {/* Curved main overlays */}
          <svg width="1100" height="700" className="absolute left-1/2 top-36 z-20 select-none" style={{transform: 'translateX(-50%)'}}>
            <defs>
              <path id="arc1" d="M 100 400 Q 550 100 1000 400" />
              <path id="arc2" d="M 150 420 Q 550 180 950 420" />
              <path id="arc3" d="M 200 440 Q 550 260 900 440" />
              <path id="arc4" d="M 250 460 Q 550 340 850 460" />
              <path id="arc5" d="M 300 480 Q 550 420 800 480" />
            </defs>
            <text fill="#444" fontSize="28" fontFamily="Square, Arial, sans-serif" fontWeight="bold">
              <textPath href="#arc1">Market Research (KOL And Disease Mapping)</textPath>
            </text>
            <text fill="#444" fontSize="24" fontFamily="Square, Arial, sans-serif">
              <textPath href="#arc2">Review And Annotate Country Specific Materials</textPath>
            </text>
            <text fill="#444" fontSize="22" fontFamily="Square, Arial, sans-serif">
              <textPath href="#arc3">Develop Local Content As Per Updated References</textPath>
            </text>
            <text fill="#444" fontSize="22" fontFamily="Square, Arial, sans-serif">
              <textPath href="#arc4">Speaker Slides Support, Review And Annotations</textPath>
            </text>
            <text fill="#444" fontSize="22" fontFamily="Square, Arial, sans-serif">
              <textPath href="#arc5">Leadership Training Course</textPath>
            </text>
          </svg>
          {/* Center overlays */}
          
          <div className="absolute right-8 top-1/4 z-20 select-none">
            <span className="text-[#444] font-square text-2xl md:text-3xl font-bold drop-shadow-lg">Medical Translation</span><br />
            <span className="text-white font-square text-xl md:text-2xl drop-shadow-lg">(Pils, Patient Materials)</span>
          </div>
          <button
            onClick={() => router.push('/?from=service')}
            className="fixed left-1/2 -translate-x-1/2 bottom-10 z-30 px-6 py-2 bg-[#1A3366] text-white rounded-md text-base font-medium hover:bg-[#16305a] transition-colors"
            style={{ minWidth: 160 }}
          >
            Back to Main Menu
          </button>
        </>
      )}
    </motion.div>
  );
}
