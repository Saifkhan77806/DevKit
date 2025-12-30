import Gradientbtn from "../blocks/Gradientbtn";
import { Button } from "../ui/button";
import Overlay from "../blocks/Overlay";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="poppins pt-28 pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-12 px-4 sm:px-8 lg:px-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Turn your data into secure APIs instantly
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            Built for SaaS teams, frontend developers, and startups that want
            data ownership without backend complexity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
            <Gradientbtn onClick={() => navigate("/signin")}>
              Try for free
            </Gradientbtn>

            <Button
              variant="outline"
              className="hover:scale-105 transition-transform"
            >
              View docs
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-none">
          <Overlay />
          <img
            src="/images/landing/hero.png"
            alt="Secure API generation dashboard preview"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
