"use client";
import { useState } from "react";
import { Star, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Availability from "@/components/Availability";

const TeacherDetails = () => {
  console.log("TeacherDetails page loaded");
  const [showCredentials, setShowCredentials] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Sat, Sep 28");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 mb-36">
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">Dr. Raphael Odekunle, MD</h1>
              <div className="flex items-center mt-2">
                <Star className="text-yellow-400 w-5 h-5" />
                <span className="ml-1 font-semibold">4.7</span>
                <span className="text-gray-500 ml-1">(1617)</span>
                <span className="ml-2 text-gray-500">Family medicine</span>
              </div>
              <span className="inline-block mt-2 px-2 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                Highly rated
              </span>
            </div>
            <img
              src="/person1.jpg?height=80&width=80"
              alt="Dr. Raphael Odekunle"
              className="rounded-full h-20 w-20"
            />
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">About the doctor</h2>
          <p className="text-gray-700">
            Dr. Raphael Odekunle, MD, is a board-certified Family Physician with
            25 years of medical experience. A graduate of Obafemi Awolowo
            University, he completed his residency training at Bronx Care Health
            System in New York. Dr. Odekunle specializes in Family Medicine,
            providing comprehensive care for patients of all ages.
          </p>
          <p className="text-gray-700 mt-4">
            His wide range of services includes video consultations for wound
            care for both new and existing patients, telehealth visits and
            prescription refill appointments. Dr. Odekunle also offers video
            consults for specific concerns such as COVID-19, yeast infections,
            UTIs, hair loss and management of chronic diseases.
          </p>
          <p className="text-gray-700 mt-4">
            For patients with sexual health and wellness concerns, he offers
            virtual vaginal infection visits, premature ejaculation consults,
            video STD management consults and virtual ED consults. He is also
            available for critical care consultations when needed.
          </p>
          <p className="text-gray-700 mt-4">
            Dr. Odekunle's patient care style is characterized by a
            compassionate, respectful and attentive approach, ensuring that each
            individual's unique needs are met while fostering a comfortable and
            trusting environment.
          </p>

          <div className="mt-6">
            <Button
              variant="outline"
              onClick={() => setShowCredentials(!showCredentials)}
              className="flex items-center"
            >
              Service provider credentials
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            {showCredentials && (
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-semibold">Specialities</h3>
                  <p>Family medicine</p>
                </div>
                <div>
                  <h3 className="font-semibold">Licensed to practice</h3>
                  <p>CA, GA, NJ, NY, SC, TX</p>
                </div>
                <div>
                  <h3 className="font-semibold">Practice name</h3>
                  <p>Raphael Odekunle</p>
                </div>
                <div>
                  <h3 className="font-semibold">Languages spoken</h3>
                  <p>English</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Patient reviews</h2>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
            <span className="ml-2 text-2xl font-bold">4.7</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Waiting time</p>
              <p className="font-semibold">4.9</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Would recommend</p>
              <p className="font-semibold">4.8</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Bedside manner</p>
              <p className="font-semibold">4.8</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Would visit again</p>
              <p className="font-semibold">4.8</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              "Doctor was wonderful, prompt, and understanding!",
              "Dr Raphael Odekunle was great, I highly recommend his services.",
              "He is prompt, courteous and doesn't waste time",
            ].map((review, index) => (
              <div key={index} className="border-t pt-4">
                <div className="flex items-center mb-2">
                  <Star className="text-green-500 w-5 h-5" />
                  <span className="ml-2 text-green-600 font-semibold">
                    Satisfied
                  </span>
                  <span className="ml-auto text-gray-500">
                    Verified patient
                  </span>
                </div>
                <p className="text-gray-700">{review}</p>
                <p className="text-sm text-gray-500 mt-2">1 week ago</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <Availability />
        </CardContent>
      </Card>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="space-y-1">
            <p className="text-3xl font-bold text-gray-900">$49</p>
            <p className="text-sm font-medium text-purple-600">
              Or $39 with Sesame Plus
            </p>
            <p className="text-sm text-gray-600">
              Sat, Sep 28 - 10:15 PM GMT+1
            </p>
            <p className="text-sm text-gray-500">You won't be charged yet</p>
          </div>
          <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-150 ease-in-out transform hover:scale-105">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
