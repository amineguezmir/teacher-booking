"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Book,
  GraduationCap,
  Globe,
  ChevronDown,
  Calculator,
  Atom,
  Beaker,
  Dna,
  BookOpen,
  Clock,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const topBooked = [
  { name: "Mathematics", href: "#", icon: Calculator },
  { name: "Physics", href: "#", icon: Atom },
  { name: "Chemistry", href: "#", icon: Beaker },
  { name: "Biology", href: "#", icon: Dna },
];

const teachers = [
  { name: "Dr. Smith", subject: "Mathematics", href: "#" },
  { name: "Prof. Johnson", subject: "Physics", href: "#" },
  { name: "Ms. Williams", subject: "Chemistry", href: "#" },
  { name: "Mr. Brown", subject: "Biology", href: "#" },
];

const subjects = [
  { name: "Mathematics", href: "#", icon: Calculator },
  { name: "Physics", href: "#", icon: Atom },
  { name: "Chemistry", href: "#", icon: Beaker },
  { name: "Biology", href: "#", icon: Dna },
  { name: "Literature", href: "#", icon: BookOpen },
  { name: "History", href: "#", icon: Clock },
];

const languages = [
  { name: "English", href: "#", flag: "/flags/gb.png" },
  { name: "Spanish", href: "#", flag: "/flags/es.png" },
  { name: "French", href: "#", flag: "/flags/fr.webp" },
  { name: "German", href: "#", flag: "/flags/de.png" },
  { name: "Arabic", href: "#", flag: "/flags/ar.webp" },
  { name: "Japanese", href: "#", flag: "/flags/jp.png" },
];

export default function EnhancedMegaMenu() {
  return (
    <div className="flex justify-center bg-[#1e1b4b] sticky top-0 z-100 w-full">
      <NavigationMenu className="bg-[#1e1b4b] w-full">
        <NavigationMenuList className="shadow-lg rounded-lg">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Menu <ChevronDown className="ml-1 h-4 w-4" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-4 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg">
                    <Book className="h-5 w-5 mb-1" />
                    <h3 className="text-sm font-bold">Learning Platform</h3>
                    <p className="text-xs">Explore our courses and teachers.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-primary text-sm">
                      Top Booked
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {topBooked.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="flex items-center p-2 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-primary text-sm">
                    Featured Teachers
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {teachers.map((teacher) => (
                      <li key={teacher.name}>
                        <Link
                          href={teacher.href}
                          className="block p-2 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="font-medium">{teacher.name}</div>
                          <p className="text-xs text-muted-foreground">
                            {teacher.subject}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Subjects Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <GraduationCap className="mr-2 h-4 w-4" />
              Subjects
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 md:w-[400px] lg:w-[500px] w-full">
                <h4 className="font-bold mb-2 text-secondary text-sm">
                  Available Subjects
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {subjects.map((subject) => (
                    <li key={subject.name}>
                      <NavigationMenuLink asChild>
                        <a
                          className="flex items-center p-2 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                          href={subject.href}
                        >
                          <subject.icon className="mr-2 h-4 w-4" />
                          {subject.name}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Languages Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Globe className="mr-2 h-4 w-4" />
              Languages
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 md:w-[400px] lg:w-[500px] w-full">
                <h4 className="font-bold mb-2 text-accent-foreground text-sm">
                  Available Languages
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <li key={language.name}>
                      <NavigationMenuLink asChild>
                        <a
                          className="flex items-center p-2 rounded-md text-sm transition-colors hover:bg-muted hover:text-muted-foreground"
                          href={language.href}
                        >
                          <Image
                            src={language.flag}
                            alt={`${language.name} flag`}
                            width={24}
                            height={18}
                            className="mr-2 rounded-sm"
                          />
                          {language.name}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
