"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  Building2,
  Factory,
  Palette,
  Shield,
  Sparkles,
} from "lucide-react";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Home,
      title: "Residential Flooring",
      description:
        "Transform your garage, basement, or patio with beautiful, durable epoxy floors that withstand daily wear and tear.",
      features: [
        "Garage floors",
        "Basement waterproofing",
        "Patio coatings",
        "Kitchen floors",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Solutions",
      description:
        "Professional-grade flooring for retail spaces, offices, and commercial buildings that make a lasting impression.",
      features: [
        "Retail stores",
        "Office buildings",
        "Restaurants",
        "Showrooms",
      ],
    },
    {
      icon: Factory,
      title: "Industrial Applications",
      description:
        "Heavy-duty epoxy systems designed for manufacturing facilities, warehouses, and high-traffic industrial environments.",
      features: [
        "Manufacturing floors",
        "Warehouse coating",
        "Chemical resistance",
        "Anti-slip surfaces",
      ],
    },
    {
      icon: Palette,
      title: "Custom Designs",
      description:
        "Personalized flooring solutions with unlimited color options, patterns, and decorative finishes to match your vision.",
      features: [
        "Color matching",
        "Logo embedding",
        "Artistic patterns",
        "Metallic finishes",
      ],
    },
    {
      icon: Shield,
      title: "Protective Coatings",
      description:
        "Advanced protective systems that guard against chemicals, stains, impacts, and extreme weather conditions.",
      features: [
        "Chemical resistance",
        "UV protection",
        "Impact resistance",
        "Waterproofing",
      ],
    },
    {
      icon: Sparkles,
      title: "Maintenance & Repair",
      description:
        "Comprehensive maintenance services and expert repairs to keep your epoxy floors looking pristine for years.",
      features: [
        "Deep cleaning",
        "Crack repair",
        "Recoating",
        "Maintenance plans",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="relative py-20 overflow-hidden flex items-center justify-center min-h-screen"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at right, #5D142B , #1C1C1C)",
        }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From residential garages to industrial facilities, we provide
            comprehensive epoxy flooring solutions tailored to your specific
            needs and requirements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-gray-400 text-sm flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            Get Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
