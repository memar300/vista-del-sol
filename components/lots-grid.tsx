"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { lots, type Lot, type LotStatus } from "@/lib/lots-data"
import { LotCard } from "./lot-card"
import { LotLegend } from "./lot-legend"
import { Button } from "@/components/ui/button"

interface LotsGridProps {
  onLotSelect: (lot: Lot) => void
}

export function LotsGrid({ onLotSelect }: LotsGridProps) {
  const [filter, setFilter] = useState<LotStatus | "all">("all")

  const filteredLots = filter === "all" 
    ? lots 
    : lots.filter(lot => lot.status === filter)

  const availableCount = lots.filter(l => l.status === "available").length

  return (
    <section id="lots" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-foreground mb-4">
            Available Lots
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {availableCount} lots currently available for purchase
          </p>
        </motion.div>

        <LotLegend />

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {(["all", "available", "contract", "sold", "hold"] as const).map((status) => (
            <Button
              key={status}
              variant={filter === status ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(status)}
              className="capitalize"
            >
              {status === "all" ? "All Lots" : status === "contract" ? "Under Contract" : status}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
          >
            {filteredLots.map((lot, index) => (
              <LotCard
                key={lot.id}
                lot={lot}
                index={index}
                onSelect={onLotSelect}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredLots.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-12"
          >
            No lots found with the selected filter.
          </motion.p>
        )}
      </div>
    </section>
  )
}
