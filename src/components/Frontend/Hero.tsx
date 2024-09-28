"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const words = ["Learning", "Potential", "Future", "Skills"];
const words2 = ["Teachers", "Courses", "Resources", "Community"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change `words` every 1 second

    const word2Interval = setInterval(() => {
      setIndex2((prevIndex) => (prevIndex + 1) % words2.length);
    }, 1500); // Change `words2` every 1.5 seconds (staggered)

    return () => {
      clearInterval(wordInterval);
      clearInterval(word2Interval);
    };
  }, []);

  return (
    <section className="bg-[#1e1b4b] text-white w-full">
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Unlock Your{" "}
              <motion.div
                className="relative inline-block min-w-[180px] sm:min-w-[220px] md:min-w-[260px]  overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={index}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Background with animation */}
                <motion.div
                  className="absolute inset-0 bg-yellow-400 z-0"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                {/* Word with text color change */}
                <motion.span
                  className="relative z-10 block text-white p-2 rounded-md"
                  initial={{ color: "#1e1b4b" }}
                  animate={{ color: "#fff" }}
                  transition={{ duration: 0.5 }}
                >
                  {words[index]} {/* Display current word */}
                </motion.span>
              </motion.div>{" "}
              Journey
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Start your path to knowledge with our innovative{" "}
              <motion.div
                className="relative inline-block min-w-[140px] sm:min-w-[160px] md:min-w-[180px] h-[1.2em] overflow-hidden"
                key={index2}
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Background with animation */}
                <motion.div
                  className="absolute inset-0 bg-yellow-400 z-0"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                {/* Word with text color change */}
                <motion.span
                  className="relative z-10 block text-white p-2 rounded-md"
                  initial={{ color: "#1e1b4b" }}
                  animate={{ color: "#fff" }}
                  transition={{ duration: 0.6 }}
                >
                  {words2[index2]} {/* Display current word with flip effect */}
                </motion.span>
              </motion.div>{" "}
              that will help you achieve your goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 sm:mb-8"
            >
              <SearchBar />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-white text-[#1e1b4b] hover:bg-gray-200 transition-colors"
              >
                Start Learning Today
              </Button>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <motion.video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <source src="/firstvd.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            </div>
            <motion.div
              className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 -right-4 sm:-right-8 md:-right-12 lg:-right-16 w-2/3 aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              >
                <source src="/secondvd.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
