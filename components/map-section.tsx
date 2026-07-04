"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-foreground mb-4">
            Location
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Perfectly situated with easy access to major highways and amenities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden shadow-sm border border-border"
        >
          {/* Google Maps placeholder */}
          <div className="aspect-[16/9] md:aspect-[21/9] bg-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220679.35702522794!2d-97.89558319453123!3d30.307973099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1706649842024!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vista del Sol Location"
              className="w-full h-full"
            />
          </div>

          {/* Location info overlay */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-card/95 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg border border-border max-w-sm"
          >
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Vista del Sol</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Austin, TX Area
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://maps.google.com/?q=Austin,TX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
