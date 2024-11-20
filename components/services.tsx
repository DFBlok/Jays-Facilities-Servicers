import { Droplet, Paintbrush, Plug, Shield, Wind, Wrench } from "lucide-react";
import { title } from "process";
import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

//list of services
const services = [
  {
    icon: Wrench,
    title: "General Maintainance",
    description:
      "Comprehensive maintenance services to keep your property in top condition.",
  },
  {
    icon: Droplet,
    title: "Plumbing",
    description:
      "Expert plumbing services for repairs, installations, and maintenance.",
  },
  {
    icon: Wind,
    title: "HVAC",
    description:
      "Heating, ventilation, and air conditioning services for optimal comfort.",
  },
  {
    icon: Paintbrush,
    title: "Cleaning",
    description:
      "Professional cleaning services for a spotless and healthy environment.",
  },
  {
    icon: Plug,
    title: "Electrical",
    description:
      "Licensed electrical services for all your power and lighting needs.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Advanced security solutions to protect your property and assets.",
  },
];

const Services = () => {
  return (
    <section className="bg-red-900 py-12 ">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Expertise, Your Peace of Mind
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          A wide range of professional services to support and maintain your
          property’s needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card
            key={service.title}
            className="p-6 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-shadow mx-9"
          >
            <service.icon className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
            <Button variant="outline" className="mt-auto">
              Explore Service
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
