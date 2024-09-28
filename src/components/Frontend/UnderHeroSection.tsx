"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, Video } from "lucide-react";

export default function UnderHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1e1b4b] text-white w-full">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30"
        >
          <source src="/third.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Connect with Expert Teachers
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 text-center text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Book a session or schedule a meeting with our experienced educators
            to accelerate your learning journey.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Calendar,
                title: "Flexible Scheduling",
                description: "Choose a time that works best for you",
              },
              {
                icon: Video,
                title: "Virtual Sessions",
                description: "Learn from anywhere with online meetings",
              },
              {
                icon: Clock,
                title: "On-Demand Support",
                description: "Get help when you need it most",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-yellow-400 text-[#1e1b4b] hover:bg-yellow-500 transition-colors"
            >
              Book a Teacher Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
