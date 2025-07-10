import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const services = [
  { name: "Identity and Branding", icon: "/V logo.png", route: "/services/identity-branding" },
  { name: "Visual Communication", icon: "/Visual comm.png", route: "/services/visual-communication" },
  { name: "Multimedia and Web", icon: "/Multi Media.png", route: "/services/multimedia-web" },
  { name: "Event Management", icon: "/MANAGEMENT.png", route: "/services/event-management" },
  { name: "Medical Communications", icon: "/Medical.png", route: "/services/medical-communications" },
  { name: "Digital Marketing", icon: "/Digital.png", route: "/services/digital-marketing" },
  { name: "Content Creation", icon: "/Content.png", route: "/services/content-creation" },
  { name: "Brand Reminders", icon: "/Gifts.png", route: "/services/brand-reminders" },
];

const leftServices = services.slice(0, 4);
const rightServices = services.slice(4);

const MainMenu: React.FC = () => {
  const router = useRouter();
  const [navigating, setNavigating] = useState<string | null>(null);

  // Water drop animation loop
  React.useEffect(() => {
    const interval = setInterval(() => {
      // setDropKey((k) => k + 1); // This line was removed as per the edit hint
    }, 2200); // every 2.2s
    return () => clearInterval(interval);
  }, []);

  async function handleNavigate(route: string) {
    setNavigating(route);
    router.push(route);
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Frame background */}
      <div className="absolute inset-0 scale-[0.95]">
        <Image
          src="/Frame.png"
          alt="Frame"
          fill
          className="object-contain object-center pointer-events-none select-none z-0"
          priority
        />
      </div>

      {/* Centered 3-column layout */}
      <div className="relative z-20 flex flex-1 items-center justify-center gap-6 w-full h-full min-h-[700px] min-w-[1100px] py-16 px-8">
        {/* Left services */}
        <div className="flex flex-col justify-center gap-10 items-center">
          {leftServices.map((service) => (
            <motion.button
              key={service.name}
              className={`flex flex-col items-center gap-2 text-2xl font-extrabold text-[#1A3366] transition-all duration-150 focus:outline-none ${navigating === service.route ? 'opacity-60 pointer-events-none' : ''}`}
              whileHover={{ scale: 1.08, color: '#FF7F2A' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavigate(service.route)}
              disabled={navigating === service.route}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Image src={service.icon} alt={service.name} width={56} height={56} />
              <span
                className="text-center uppercase tracking-wide"
                style={{ fontWeight: 700, letterSpacing: "0.02em", marginTop: "-0.25em" }}
              >
                {service.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Water splash logo with animated shadow and water drop */}
        <div className="flex items-center justify-center px-10">
          <Image
            src="/Water.png"
            alt="Water Splash Logo"
            width={500}
            height={500}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Right services */}
        <div className="flex flex-col justify-center gap-10 items-center">
          {rightServices.map((service) => (
            <motion.button
              key={service.name}
              className="flex flex-col items-center gap-2 text-2xl font-extrabold text-[#FF7F2A] hover:scale-110 transition-all"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push(service.route)}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Image src={service.icon} alt={service.name} width={56} height={56} />
              <span
                className="text-center uppercase tracking-wide"
                style={{ fontWeight: 700, letterSpacing: "0.02em", marginTop: "-0.25em" }}
              >
                {service.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tagline bottom right */}
      <motion.div
        className="absolute right-80 bottom-6 text-5xl font-playlist text-[#1A3366] italic drop-shadow-lg z-20 select-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{ letterSpacing: "0.01em" }}
      >
        Let your ideas <span className="text-[#4A90E2]">flow like water</span>
      </motion.div>
    </div>
  );
};

export default MainMenu;
