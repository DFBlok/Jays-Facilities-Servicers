import { Check } from "lucide-react";
import React from "react";
import Image from "next/image";

const features = [
  "24/7 Emergency Support",
  "Licensed & Certified Technicians",
  "Competitive Pricing",
  "Satisfaction Guarantee",
  "Preventive Maintenance Plans",
  "Latest Equipment & Technology",
];

const Features = () => {
  return (
    <section className=" py-12 bg-muted/50 bg-orange-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Why Choose Jay's Faclities Solutin & Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer comprehensive services with a focus on quality,
            reliability, and customer satisfaction, ensuring your property is
            always well cared for.
          </p>
          <ul className="grid gap-4 mt-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="h-5 w-5 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center relative bg-center h-[400px] lg:h-[600px] from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
          <Image
            src={"/maintain-ing.avif"}
            width={800}
            height={600}
            alt="maintain"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
