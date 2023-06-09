"use client"

import { ColumnDef } from "@tanstack/react-table"

import { cn } from "@/lib/utils"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Measure = {
  id: string
  measureTime: string
  sys: number
  dia: number
  pul: number
  pp: number
  af: boolean | string
  //   //   status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<Measure>[] = [
  {
    accessorKey: "measureTime",
    header: "Date",
  },
  {
    accessorKey: "sys",
    header: () => <div className="text-left">{`Systolic`}</div>,
    cell: ({ row }) => {
      // // const amount = parseFloat(row.getValue("amount"))
      // // const formatted = new Intl.NumberFormat("en-US", {
      // //   style: "currency",
      // //   currency: "USD",
      // // }).format(amount)
      const sysValue = row.getValue("sys") as number

      // // return <div className="text-right font-medium">{sysValue} bpm</div>
      return (
        <div className="font-medium">
          <span
            className={cn(
              sysValue < 120
                ? "text-green-500"
                : sysValue >= 120 && sysValue <= 129
                ? "text-lime-500"
                : sysValue >= 130 && sysValue <= 139
                ? "text-yellow-500"
                : sysValue >= 140 && sysValue <= 159
                ? "text-amber-500"
                : sysValue >= 160 && sysValue <= 179
                ? "text-orange-500"
                : sysValue >= 180
                ? "text-red-500"
                : "text-neutral-500"
            )}
          >
            {sysValue}
          </span>
          <span className="text-xs font-light">{` mmHg`}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "dia",
    header: () => <div className="text-left">{`Diastolic`}</div>,
    cell: ({ row }) => {
      const diaValue = row.getValue("dia") as number
      return (
        <div className="font-medium">
          <span
            className={cn(
              diaValue < 80
                ? "text-green-500"
                : diaValue >= 80 && diaValue <= 84
                ? "text-lime-500"
                : diaValue >= 85 && diaValue <= 89
                ? "text-yellow-500"
                : diaValue >= 90 && diaValue <= 99
                ? "text-amber-500"
                : diaValue >= 100 && diaValue <= 109
                ? "text-orange-500"
                : diaValue >= 110
                ? "text-red-500"
                : "text-neutral-500"
            )}
          >
            {diaValue}
          </span>
          <span className="text-xs font-light">{` mmHg`}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "pp",
    header: () => <div className="text-left">{`Pulse Preassure`}</div>,
    cell: ({ row }) => {
      const ppValue = row.getValue("pp") as number
      return (
        <div className="font-medium">
          {ppValue} <span className="text-xs font-light">{` mmHg`}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "pul",
    header: () => <div className="text-left">{`Pulse`}</div>,
    cell: ({ row }) => {
      const pulValue = row.getValue("pul") as number
      return (
        <div className="font-medium">
          {pulValue} <span className="text-xs font-light">{`bpm`}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "af",
    header: () => <div className="text-left">{`Irregular beat`}</div>,
    cell: ({ row }) => {
      const afValue = row.getValue("af") as string
      return (
        <div
          className={cn(
            "font-medium",
            afValue === "Yes" ? "text-red-500" : "text-green-500"
          )}
        >
          {afValue}
        </div>
      )
    },
  },
]
