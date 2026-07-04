"use client"

import { motion } from "framer-motion"
import { Map } from "lucide-react"

export function InteractivePlan() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-foreground mb-4">
            Subdivision Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our thoughtfully designed community layout
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] bg-card rounded-lg border border-border shadow-sm overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
              <Map className="h-16 w-16 mb-4 opacity-30" />
              <p className="text-xl font-medium">Interactive lot map coming here</p>
              <p className="text-sm mt-2 opacity-70">Click on lots to view details</p>
            </div>
            
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                  <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#smallGrid)"/>
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
