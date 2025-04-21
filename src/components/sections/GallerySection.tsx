
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

// Example images (replace with real ones as needed)
const galleryImages = [
  {
    src: "/lovable-uploads/9361ac80-eaae-4905-b9d1-fbbcb3eae0c7.png",
    alt: "School Assembly 1",
    caption: "Assembly - Unity in Discipline",
  },
  {
    src: "/lovable-uploads/c6d9b869-9adb-4e5c-8dc1-2ae1b9634215.png",
    alt: "Annual Function",
    caption: "Annual Function Highlights",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    alt: "Class Activity",
    caption: "Interactive Classroom Sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
    alt: "Cultural Day",
    caption: "Cultural Day Celebration",
  },
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">School Gallery</h2>
          <p className="section-subtitle">Glimpses from School Life</p>
        </div>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
              loop: true,
              dragFree: true,
            }}
            className="max-w-4xl mx-auto"
          >
            <CarouselContent className="gap-6">
              {galleryImages.map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="relative overflow-hidden rounded-xl shadow-lg group"
                    viewport={{ once: true }}
                  >
                    <div className="aspect-[4/3]">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-4 text-white">
                        <h4 className="text-lg font-semibold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {img.caption}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
