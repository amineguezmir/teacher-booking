"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/student1.jpg",
    rating: 5,
    review:
      "The telehealth service was incredibly convenient. The doctor was attentive and provided excellent care. I'm impressed!",
    specialty: "General Consultation",
  },
  {
    id: 2,
    name: "Samantha Lee",
    avatar: "/student2.webp",
    rating: 4,
    review:
      "Quick and efficient service. The platform was easy to use, and I got the help I needed without leaving home.",
    specialty: "Dermatology",
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "/student3.jpg",
    rating: 5,
    review:
      "The follow-up care was exceptional. I felt supported throughout my recovery process. Highly recommended!",
    specialty: "Orthopedics",
  },
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-xl shadow-lg max-w-4xl mx-auto my-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">
        What Our Patients Say
      </h2>
      <div className="relative h-[350px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentReview}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex flex-col items-center"
          >
            <Avatar className="w-24 h-24 mb-4 border-4 border-white shadow-lg">
              <AvatarImage
                src={reviews[currentReview].avatar}
                alt={reviews[currentReview].name}
              />
              <AvatarFallback>
                {reviews[currentReview].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={
                    i < reviews[currentReview].rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-1">
              {reviews[currentReview].name}
            </h3>
            <p className="text-sm text-purple-600 mb-4">
              {reviews[currentReview].specialty}
            </p>
            <blockquote className="text-center italic text-gray-700 mb-6 relative">
              <Quote
                className="absolute top-0 left-0 text-purple-200 -z-10"
                size={40}
              />
              <Quote
                className="absolute bottom-0 right-0 text-purple-200 -z-10 transform rotate-180"
                size={40}
              />
              "{reviews[currentReview].review}"
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="bg-white hover:bg-purple-100 text-purple-800"
        >
          <ChevronLeft size={24} />
          <span className="sr-only">Previous review</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="bg-white hover:bg-purple-100 text-purple-800"
        >
          <ChevronRight size={24} />
          <span className="sr-only">Next review</span>
        </Button>
      </div>
    </section>
  );
}
