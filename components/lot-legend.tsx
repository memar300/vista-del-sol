"use client"

import { motion } from "framer-motion"
import { statusConfig, type LotStatus } from "@/lib/lots-data"

export function LotLegend() {
  const statuses: LotStatus[] = ["available", "contract", "sold", "hold"]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap justify-center gap-6 py-8"
    >
      {statuses.map((status, index) => (
        <motion.div
          key={status}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center gap-2"
        >
          <span className={`w-4 h-4 rounded-full ${statusConfig[status].color}`} />
          <span className="text-sm text-muted-foreground font-medium">
            {statusConfig[status].label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}
