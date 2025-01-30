import Header from "../components/AboutHeader";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";



export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col gap-7">
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
