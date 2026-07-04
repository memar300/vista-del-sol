export type LotStatus = "available" | "contract" | "sold" | "hold"

export interface Lot {
  id: number
  lotNumber: string
  status: LotStatus
  price?: number
  acres?: number
}

export const lots: Lot[] = [
  { id: 1, lotNumber: "1", status: "sold", price: 145000, acres: 0.25 },
  { id: 2, lotNumber: "2", status: "sold", price: 148000, acres: 0.28 },
  { id: 3, lotNumber: "3", status: "contract", price: 152000, acres: 0.32 },
  { id: 4, lotNumber: "4", status: "available", price: 140000, acres: 0.24 },
  { id: 5, lotNumber: "5", status: "available", price: 142000, acres: 0.26 },
  { id: 6, lotNumber: "6", status: "available", price: 155000, acres: 0.35 },
  { id: 7, lotNumber: "7", status: "hold", price: 148000, acres: 0.29 },
  { id: 8, lotNumber: "8", status: "available", price: 160000, acres: 0.4 },
  { id: 9, lotNumber: "9", status: "sold", price: 145000, acres: 0.27 },
  { id: 10, lotNumber: "10", status: "available", price: 143000, acres: 0.25 },
  { id: 11, lotNumber: "11", status: "available", price: 147000, acres: 0.28 },
  { id: 12, lotNumber: "12", status: "contract", price: 150000, acres: 0.31 },
  { id: 13, lotNumber: "13", status: "available", price: 141000, acres: 0.24 },
  { id: 14, lotNumber: "14", status: "available", price: 144000, acres: 0.26 },
  { id: 15, lotNumber: "15", status: "sold", price: 158000, acres: 0.38 },
  { id: 16, lotNumber: "16", status: "available", price: 146000, acres: 0.27 },
  { id: 17, lotNumber: "17", status: "available", price: 149000, acres: 0.29 },
  { id: 18, lotNumber: "18", status: "hold", price: 152000, acres: 0.33 },
  { id: 19, lotNumber: "19", status: "available", price: 140000, acres: 0.23 },
  { id: 20, lotNumber: "20", status: "available", price: 143000, acres: 0.25 },
  { id: 21, lotNumber: "21", status: "contract", price: 156000, acres: 0.36 },
  { id: 22, lotNumber: "22", status: "available", price: 145000, acres: 0.27 },
  { id: 23, lotNumber: "23", status: "available", price: 148000, acres: 0.29 },
  { id: 24, lotNumber: "24", status: "sold", price: 151000, acres: 0.31 },
  { id: 25, lotNumber: "25", status: "available", price: 144000, acres: 0.26 },
  { id: 26, lotNumber: "26", status: "available", price: 147000, acres: 0.28 },
  { id: 27, lotNumber: "27", status: "hold", price: 153000, acres: 0.34 },
  { id: 28, lotNumber: "28", status: "available", price: 141000, acres: 0.24 },
  { id: 29, lotNumber: "29", status: "available", price: 146000, acres: 0.27 },
  { id: 30, lotNumber: "30", status: "contract", price: 159000, acres: 0.39 },
  { id: 31, lotNumber: "31", status: "available", price: 142000, acres: 0.25 },
  { id: 32, lotNumber: "32", status: "available", price: 145000, acres: 0.27 },
  { id: 33, lotNumber: "33", status: "sold", price: 154000, acres: 0.35 },
  { id: 34, lotNumber: "34", status: "available", price: 143000, acres: 0.26 },
  { id: 35, lotNumber: "35", status: "available", price: 148000, acres: 0.29 },
  { id: 36, lotNumber: "36", status: "hold", price: 150000, acres: 0.3 },
  { id: 37, lotNumber: "37", status: "available", price: 140000, acres: 0.23 },
  { id: 38, lotNumber: "38", status: "available", price: 144000, acres: 0.26 },
  { id: 39, lotNumber: "39", status: "contract", price: 157000, acres: 0.37 },
  { id: 40, lotNumber: "40", status: "available", price: 146000, acres: 0.28 },
  { id: 41, lotNumber: "41", status: "available", price: 162000, acres: 0.42 },
]

export const statusConfig: Record<LotStatus, { label: string; color: string; bgClass: string }> = {
  available: { label: "Available", color: "bg-lot-available", bgClass: "bg-lot-available/10" },
  contract: { label: "Under Contract", color: "bg-lot-contract", bgClass: "bg-lot-contract/10" },
  sold: { label: "Sold", color: "bg-lot-sold", bgClass: "bg-lot-sold/10" },
  hold: { label: "Hold", color: "bg-lot-hold", bgClass: "bg-lot-hold/10" },
}
