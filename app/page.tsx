import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Services />
                <About />
                <Gallery />
                <Contact />
            </main>

            <Footer />
        </>
    );
}