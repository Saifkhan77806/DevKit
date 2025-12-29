import React from "react";
import Gradientbtn from "../blocks/Gradientbtn";
import { Button } from "../ui/button";
import Overlay from "../blocks/Overlay";

const Hero = () => {
  return (
    <section className="min-h-screen flex poppins py-32">
      <div className="flex-1 px-16 h-fit self-center space-y-6">
        <h1 className="text-5xl font-semibold">
          Bring your own MongoDB. Get safe APIs, SDKs, and schema control —
          without running a backend.
        </h1>
        <p>
          Built for SaaS teams, frontend developers, and startups that want data
          ownership without backend complexity.
        </p>
        <div className="space-x-7 my-8">
          <Gradientbtn>Try for free</Gradientbtn>
          <Button
            variant={"outline"}
            className="cursor-pointer hover:scale-105 transition-all"
          >
            View docs
          </Button>
        </div>
      </div>
      <div className="flex-2/12 h-fit self-center relative">
        <Overlay />
        {/* TODO:// set all the alt text image for hero section */}
        <img
          src="/images/landing/hero.png"
          alt=""
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
