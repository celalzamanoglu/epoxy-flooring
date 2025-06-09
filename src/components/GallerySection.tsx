"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, X } from "lucide-react";

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery items - in a real project, these would be actual images
  const galleryItems = [
    {
      id: 1,
      title: "Modern Garage Floor",
      category: "Residential",
      description: "Metallic epoxy finish with custom color pattern",
    },
    {
      id: 2,
      title: "Industrial Warehouse",
      category: "Industrial",
      description: "Heavy-duty coating with anti-slip surface",
    },
    {
      id: 3,
      title: "Retail Showroom",
      category: "Commercial",
      description: "High-gloss finish with logo embedding",
    },
    {
      id: 4,
      title: "Restaurant Kitchen",
      category: "Commercial",
      description: "Chemical-resistant coating with seamless finish",
    },
    {
      id: 5,
      title: "Basement Renovation",
      category: "Residential",
      description: "Moisture-barrier coating with decorative flakes",
    },
    {
      id: 6,
      title: "Manufacturing Plant",
      category: "Industrial",
      description: "Anti-static coating for electronic components",
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="gallery"
      className="relative py-20 overflow-hidden flex items-center justify-center min-h-screen"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#1C1C1C" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the transformative power of our epoxy flooring solutions
            through our portfolio of completed projects across residential,
            commercial, and industrial spaces.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] group-hover:shadow-2xl transition-all duration-300">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-8 h-8 text-gray-500" />
                    </div>
                    <div className="text-sm font-medium">View Project</div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-2">
                      {item.description}
                    </p>
                    <span className="text-xs bg-blue-500 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-gray-900/25"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {galleryItems[selectedImage].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {galleryItems[selectedImage].description}
                </p>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {galleryItems[selectedImage].category}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
