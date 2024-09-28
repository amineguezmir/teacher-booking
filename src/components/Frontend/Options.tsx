"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Diamond, Check, ArrowRight } from "lucide-react";

export default function Options() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WP : Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="bg-white p-6 shadow-lg rounded-lg max-w-7xl mx-auto my-12 overflow-hidden  ">
      <h2 className="text-2xl font-bold text-center mb-2">
        Choose what is right for you
      </h2>
      <h3 className="text-3xl font-bold text-center mb-6">Two care options</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <motion.div
          className="bg-purple-50 p-6 rounded-lg shadow-md relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Diamond
            className="text-purple-600 absolute top-4 right-4"
            size={24}
          />
          <h4 className="text-xl font-bold text-purple-600 mb-4">
            Sesame Plus membership
          </h4>
          <p className="text-sm text-gray-600 mb-2">
            from <span className="text-2xl font-bold text-purple-600">$37</span>{" "}
            per visit
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm">
              <Check className="text-purple-600 mr-2" size={16} /> Price per
              visit as low as $37
            </li>
            <li className="flex items-center text-sm">
              <Check className="text-purple-600 mr-2" size={16} /> $10 off of
              all visits
            </li>
            <li className="flex items-center text-sm">
              <Check className="text-purple-600 mr-2" size={16} /> Free lab for
              annual members
            </li>
            <li className="flex items-center text-sm">
              <Check className="text-purple-600 mr-2" size={16} /> Dedicated
              care team
            </li>
            <li className="flex items-center text-sm">
              <Check className="text-purple-600 mr-2" size={16} /> Only
              $8.25/month
            </li>
          </ul>
          <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
            Learn more
          </Button>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-xl font-bold mb-4">One-time visit</h4>
          <p className="text-sm text-gray-600 mb-2">
            from <span className="text-2xl font-bold">$47</span> per visit
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm">
              <Check className="text-green-500 mr-2" size={16} /> Telehealth or
              in-person visit with a provider
            </li>
            <li className="flex items-center text-sm">
              <Check className="text-green-500 mr-2" size={16} /> Prescription
              or lab referral if needed
            </li>
          </ul>
          <Button className="mt-4" variant="outline">
            Find appointment
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-2 ">
          Sign up to save 20% on your first visit.
        </h3>
        <p className="text-gray-600 mb-4">
          Plus get access to exclusive sales and promotions.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center ">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="max-w-xs mr-2"
          />
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
            <ArrowRight size={20} />
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
