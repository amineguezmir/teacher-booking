"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Star,
  Video,
  Clock,
  Calendar,
  ThumbsUp,
  Award,
  ChevronRight,
  Search,
} from "lucide-react";
import Link from "next/link";

const providers = [
  {
    name: "Chandroutie Santoo-Vazquez, FNP-BC",
    specialty: "Family medicine",
    rating: 4.6,
    reviews: 878,
    availableToday: true,
    image: "/person1.jpg", // Path assumes the image is in the /public folder
    badges: ["Quick responses", "Experienced"],
  },
  {
    name: "Joseph Isibor, APRN",
    specialty: "Family medicine",
    rating: 4.7,
    reviews: 3124,
    availableToday: true,
    image: "/person2.jpg", // Path assumes the image is in the /public folder
    badges: ["Highly rated", "Experienced"],
  },
  {
    name: "Dr. Raphael Odekunle, MD",
    specialty: "Family medicine",
    rating: 4.7,
    reviews: 1617,
    availableToday: true,
    highlyRated: true,
    image: "/person3.jpg", // Path assumes the image is in the /public folder
    badges: ["Top rated", "Experienced"],
  },
  {
    name: "Stacey Chase, PA-C",
    specialty: "Family medicine",
    rating: 4.7,
    reviews: 321,
    availableTomorrow: true,
    highlyRated: true,
    image: "/person4.jpg", // Path assumes the image is in the /public folder
    badges: ["Compassionate care", "Thorough"],
  },
];

export default function TeacherBooking() {
  const [withinTwoHours, setWithinTwoHours] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWithinTwoHours(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white p-6 shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center">
          <Video className="mr-2 text-purple-600" />
          Telehealth Care
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search providers..."
            className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center mb-6">
        <div
          className={`w-12 h-6 rounded-full ${
            withinTwoHours ? "bg-purple-600" : "bg-gray-300"
          } transition-colors duration-200 ease-in-out relative`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform duration-200 ease-in-out ${
              withinTwoHours ? "left-6" : "left-0.5"
            }`}
          />
        </div>
        <span className="ml-2 text-sm font-medium flex items-center">
          <Clock className="mr-1 text-purple-600" size={16} />
          Within 2 hours
        </span>
        <a
          href="#"
          className="ml-auto text-purple-600 text-sm font-medium flex items-center hover:underline"
        >
          See all
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {providers.map((provider, index) => (
          <motion.div
            key={provider.name}
            className="border rounded-lg p-4 flex flex-col shadow-md hover:shadow-lg transition-shadow duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-3">
              <Image
                src={provider.image}
                alt={provider.name}
                width={80}
                height={80}
                className="w-16 h-16 rounded-full mr-3 border-2 border-purple-200"
              />
              <div>
                <h2 className="font-semibold text-sm">{provider.name}</h2>
                <div className="flex items-center text-gray-600">
                  <Video size={14} className="mr-1" />
                  <span className="text-xs">{provider.specialty}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < Math.floor(provider.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="ml-1 text-sm font-semibold">
                {provider.rating}
              </span>
              <span className="ml-1 text-xs text-gray-500">
                ({provider.reviews})
              </span>
            </div>
            <div className="mb-3">
              {provider.availableToday && (
                <span className="text-green-500 text-xs font-medium flex items-center mb-1">
                  <Calendar size={14} className="mr-1" />
                  Available today
                </span>
              )}
              {provider.availableTomorrow && (
                <span className="text-blue-500 text-xs font-medium flex items-center mb-1">
                  <Calendar size={14} className="mr-1" />
                  Available tomorrow
                </span>
              )}
              {provider.highlyRated && (
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mb-1 inline-flex items-center">
                  <Award size={14} className="mr-1" />
                  Highly rated
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {provider.badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded inline-flex items-center"
                >
                  <ThumbsUp size={12} className="mr-1" />
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <div className="grid grid-cols-3 gap-2 mb-2">
                {["10:00 pm", "10:15 pm", "10:30 pm"].map((time) => (
                  <Link href="/teacherdetails">
                    <Button
                      key={time}
                      variant="outline"
                      size="sm"
                      className="text-xs flex items-center justify-center"
                    >
                      <Clock size={12} className="mr-1" />
                      {time}
                    </Button>
                  </Link>
                ))}
              </div>
              <Button
                variant="link"
                size="sm"
                className="text-purple-600 text-xs w-full flex items-center justify-center"
              >
                More times
                <ChevronRight size={14} className="ml-1" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
