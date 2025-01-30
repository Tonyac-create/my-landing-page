import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col gap-8">
        <HeroSection />
        <TestimonialSection />
        <ProjectsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
