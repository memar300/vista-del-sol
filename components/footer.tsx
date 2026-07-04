"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-sans font-semibold mb-4">
            Ready to Find Your Lot?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us today to schedule a tour or learn more about available properties.
          </p>
          
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg"
            asChild
          >
            <a href="tel:512-660-8405">
              <Phone className="mr-2 h-5 w-5" />
              Call 512-660-8405
            </a>
          </Button>
        </motion.div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70 font-sans">
              Vista del Sol
            </p>
            <p className="text-xs text-primary-foreground/50 text-center md:text-right max-w-lg">
              All information is subject to change without notice. Lot availability, pricing, and sizes are approximate and should be verified with the sales team. This is not an offer where prohibited by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
