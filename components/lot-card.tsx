"use client"

import { motion } from "framer-motion"
import { type Lot, statusConfig } from "@/lib/lots-data"
import { cn } from "@/lib/utils"

interface LotCardProps {
  lot: Lot
  index: number
  onSelect: (lot: Lot) => void
}

export function LotCard({ lot, index, onSelect }: LotCardProps) {
  const config = statusConfig[lot.status]
  const isAvailable = lot.status === "available"

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
      whileHover={isAvailable ? { scale: 1.02, y: -4 } : {}}
      whileTap={isAvailable ? { scale: 0.98 } : {}}
      onClick={() => isAvailable && onSelect(lot)}
      className={cn(
        "relative p-4 md:p-5 rounded-lg border text-left transition-all duration-300",
        "bg-card shadow-sm",
        isAvailable
          ? "border-border hover:border-primary/30 hover:shadow-md cursor-pointer"
          : "border-border/50 cursor-default opacity-75"
      )}
    >
      {/* Status indicator */}
      <span
        className={cn(
          "absolute top-3 right-3 w-3 h-3 rounded-full",
          config.color
        )}
      />

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">
          Lot {lot.lotNumber}
        </h3>
        
        <p className={cn(
          "text-xs font-medium uppercase tracking-wide",
          lot.status === "available" ? "text-lot-available" :
          lot.status === "contract" ? "text-lot-contract" :
          lot.status === "sold" ? "text-lot-sold" :
          "text-lot-hold"
        )}>
          {config.label}
        </p>

        {lot.price && isAvailable && (
          <p className="text-xl font-semibold text-foreground">
            ${lot.price.toLocaleString()}
          </p>
        )}

        {lot.acres && (
          <p className="text-sm text-muted-foreground">
            {lot.acres} acres
          </p>
        )}
      </div>
    </motion.button>
  )
}
