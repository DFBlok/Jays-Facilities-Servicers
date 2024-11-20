import React from "react";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <Services />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
