"use client";

import { motion } from "framer-motion";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Since we started working with Ugur Epoxy, we were able to trust that the work would be done on time and at the quality standard we set without me having to micromanage or check in daily.",
    },
    {
      name: "Michael Chen",
      text: "I now have a professional presence, high-quality floors every week, and durable coatings ready to go—all with seamless communication and a team that truly understands my brand.",
    },
    {
      name: "Lisa Rodriguez",
      text: "We were blown away by how quickly Ugur Epoxy nailed our commercial flooring style. The communication has been outstanding, and it's already freed me up to connect with more clients.",
    },
    {
      name: "David Thompson",
      text: "Within 24 hours, I had an installer delivering high-quality, on-brand floors that followed every instruction. Their system is so clear and easy, it's taken a huge weight off my plate so I can focus on filming and growing the business.",
    },
    {
      name: "Jennifer White",
      text: "The final product made me so happy and it lifted my spirits! I was worried that it was going to be something that was high quality.",
    },
    {
      name: "Robert Martinez",
      text: "Ugur Epoxy took our instructions seriously and nailed it on the first round. Both our long form and short form installations were on budget, on time, and on brand—I couldn't be happier.",
    },
    {
      name: "Amanda Davis",
      text: "With one project day, we got over 120 pieces of content back in less than a week. I've never come across a company or individual that can deliver that kind of volume with the quality Ugur Epoxy did.",
    },
    {
      name: "James Wilson",
      text: "Ugur Epoxy didn't just meet our expectations—they exceeded them. The communication was seamless, the quality was consistently high, and having them as a partner has helped us raise our game and better serve our clients.",
    },
  ];

  // Split testimonials into upper and lower halves
  const upperHalf = testimonials.slice(0, 4);
  const lowerHalf = testimonials.slice(4, 8);

  return (
    <section className="relative min-h-[20vh] px-8 overflow-hidden flex  bg-[#1C1C1C]">
      <div className="relative z-10 w-full px-8">
        {/* Upper Half - Continuous Slide Right */}
        <motion.div
          animate={{ x: ["-100vw", "100vw"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex gap-6 py-8 px-8 overflow-hidden"
        >
          {upperHalf.map((testimonial, index) => (
            <motion.div
              key={index}
              className="w-80 h-60 flex-shrink-0 rounded-lg border border-gray-700/50 overflow-hidden"
              style={{ backgroundColor: "#222525" }}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-white font-bold text-lg mb-4 flex-shrink-0">
                  {testimonial.name}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed flex-1 overflow-y-auto">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
          {/* Duplicate for seamless loop */}
          {upperHalf.map((testimonial, index) => (
            <motion.div
              key={`duplicate-${index}`}
              className="w-80 h-60 flex-shrink-0 rounded-lg border border-gray-700/50 overflow-hidden"
              style={{ backgroundColor: "#222525" }}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-white font-bold text-lg mb-4 flex-shrink-0">
                  {testimonial.name}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed flex-1 overflow-y-auto">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lower Half - Continuous Slide Left */}
        <motion.div
          animate={{ x: ["100vw", "-100vw"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex gap-6 overflow-hidden"
        >
          {lowerHalf.map((testimonial, index) => (
            <motion.div
              key={index + 4}
              className="w-80 h-60 flex-shrink-0 rounded-lg border border-gray-700/50 overflow-hidden"
              style={{ backgroundColor: "#222525" }}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-white font-bold text-lg mb-4 flex-shrink-0">
                  {testimonial.name}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed flex-1 overflow-y-auto">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
          {/* Duplicate for seamless loop */}
          {lowerHalf.map((testimonial, index) => (
            <motion.div
              key={`duplicate-${index + 4}`}
              className="w-80 h-60 flex-shrink-0 rounded-lg border border-gray-700/50 overflow-hidden"
              style={{ backgroundColor: "#222525" }}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-white font-bold text-lg mb-4 flex-shrink-0">
                  {testimonial.name}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed flex-1 overflow-y-auto">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
