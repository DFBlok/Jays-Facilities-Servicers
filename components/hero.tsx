import React from "react";
import { Button } from "./ui/button";
/* import { Button } from "@/components/ui/button"; */
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const hero = () => {
  return (
    <section className="bg-pink-200 pt-24 pb-12">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Comprehensive Solutions
          <br />
          <span className="text-primary">For Every Need</span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Whether it's maintenance, repairs, or projects—our team offers
          tailored solutions for homes and businesses. Reliable, efficient, and
          always at your service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Explore Our Services
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
          {[
            {
              icon: Shield,
              title: "Trusted Experts",
              description:
                "Certified professionals for a wide range of services",
            },
            {
              icon: Clock,
              title: "Around the Clock Support",
              description: "Available whenever you need assistance",
            },
            {
              icon: Award,
              title: "Quality You Can Count On",
              description: "We deliver reliable results on every project",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center space-y-2 p-4"
            >
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default hero;
