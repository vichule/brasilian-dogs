import HeroContent from "./HeroContent";
import HeroFeatures from "./HeroFeatures";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden ">
            <div className="container-custom py-16 sm:py-20 lg:py-24">
                <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="flex flex-col">
                        <HeroContent />
                        <HeroFeatures />
                    </div>

                    <HeroImage />
                </div>
            </div>
        </section>
    );
}