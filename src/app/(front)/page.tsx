import Hero from "@/components/Frontend/Hero";
import Options from "@/components/Frontend/Options";
import Reviews from "@/components/Frontend/Reviews";
import TeacherBooking from "@/components/Frontend/TeacherBooking";
import UnderHeroSection from "@/components/Frontend/UnderHeroSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <UnderHeroSection />
      <TeacherBooking />
      <Options />
      <Reviews />
    </div>
  );
}
