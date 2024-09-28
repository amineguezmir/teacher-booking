"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

export default function Availability() {
  const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date());

  const formattedDate = `${bookDate
    ?.toString()
    .split(" ")
    .slice(0, 4)
    .join(" ")} - GMT${
    bookDate?.toString().split("GMT")[1]?.split(" ")[0] || ""
  }`;

  const timeSlots = [
    "8:30am",
    "9:45am",
    "10:45am",
    "12:00am",
    "14:30pm",
    "15:45am",
    "17:00am",
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-bold py-4 text-xl uppercase text-slate-500 tracking-wider">
        Select Date and Time
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={setBookDate}
            className="rounded-md border"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-purple-100 text-purple-700 text-center py-3 px-4 border border-purple-300 rounded-md">
            {formattedDate}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((time, index) => (
              <Button
                key={time}
                variant="outline"
                className="bg-blue-600 hover:bg-blue-700 text-white border-none"
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
