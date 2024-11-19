import React from "react";
import { Button } from "./ui/button";
/* import { Button } from "@/components/ui/button"; */
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const hero = () => {
  return (
    <section className="container pt-24 pb-12">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Professional Maintenance
          <br />
          <span className="text-primary">You Can Trust</span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Expert maintenance services for your home and business. 24/7 support,
          certified professionals, and guaranteed satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View Services
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
          {[
            {
              icon: Shield,
              title: "Licensed & Insured",
              description: "Fully certified professionals",
            },
            {
              icon: Clock,
              title: "24/7 Support",
              description: "Always here when you need us",
            },
            {
              icon: Award,
              title: "Satisfaction Guaranteed",
              description: "100% satisfaction or money back",
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
