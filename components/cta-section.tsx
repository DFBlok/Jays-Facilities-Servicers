import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 bg-blue-800">
      <div className="py-12 bg-primary text-primary-foreground text-center rounded-3xl mx-8 ">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Ready to Get Started?
        </h2>
        <p className="max-w-[600px] mx-auto text-lg mb-8">
          Contact us today for a free consultation and quote. Our team is ready
          to help you with all your maintenance needs.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-orange-500 hover:bg-blue-950 hover:text-white"
        >
          Get Your Free Quote
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
