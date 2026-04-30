// components/sections/Hero.tsx
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Gradient from "../ui/Gradient";
import myProfile from "../../assets/myprofile.jpg"

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center pt-24 pb-12 md:pt-32">
      <div className="mx-auto max-w-6xl px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Detail & Typography */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <div className="relative inline-block whitespace-nowrap overflow-hidden py-2">
              {/* Animated reveal text typing effect */}
              <motion.div
                animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 -5% 0 0)"] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "linear", repeatDelay: 1 }}
                className="inline-block"
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl pr-2">
                  <Gradient>Hi, I’m Phorn Sydeth</Gradient>
                </h1>
              </motion.div>
              
              {/* Typing Cursor block */}
              <motion.div
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "linear", repeatDelay: 1 }}
                className="absolute top-2 bottom-2 w-[3px] bg-blue-500 rounded-full"
              />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0"
          >
            Full-stack developer building clean, scalable and modern web
            applications with great user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center md:justify-start gap-4"
          >
            <Button>View Projects</Button>
            <Button variant="ghost">Contact Me</Button>
          </motion.div>
        </div>

        {/* Right Side: Profile Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end mb-10 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
            {/* Background Animated Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-pink-500 opacity-30 blur-2xl dark:opacity-40 -z-10" />

            {/* Rotating colorful frame rim */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl"
            >
              {/* Inner Cutout matching background */}
              <div className="w-full h-full bg-white dark:bg-gray-950 rounded-full" />
            </motion.div>
            
            {/* Inner Circular Image Profile */}
            <div className="absolute inset-2 md:inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <img 
                src={myProfile} 
                alt="Profile Placeholder" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 grayscale hover:grayscale-0" 
              />
            </div>
            
            {/* Visual Orbiting Dot 1 */}
            <motion.div
              animate={{ y: [-15, 10, -15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 right-8 md:right-12 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            />
            {/* Visual Orbiting Dot 2 */}
            <motion.div
              animate={{ y: [15, -10, 15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 left-6 md:left-10 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 shadow-[0_0_15px_rgba(236,72,153,0.8)]"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
