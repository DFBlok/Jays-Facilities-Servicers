import { Star, StarHalfIcon } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Property Manager",
    content:
      "MaintenancePro has been instrumental in keeping our properties in perfect condition. Their team is professional, reliable, and always goes above and beyond.",
    rating: 5,
  },
  {
    name: "Micheal Chen",
    role: "Business Owner",
    content:
      "Outstanding service! Their preventive maintenance program has saved us thousands in potential repairs. Highly recommended for any business owner.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Homeowner",
    content:
      "I've been using MaintenancePro for all my home maintenance needs. They're always punctual, professional, and deliver quality work every time.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-purple-200">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Don't just take our word for it - hear from our satisfied clients
        </p>
      </div>
      {/**Client review */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="p-6 flex flex-col justify-between space-y-4 mx-8"
          >
            <div className="space-y-4">
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
