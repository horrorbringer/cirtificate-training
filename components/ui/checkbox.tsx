"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { CheckIcon, MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn("peer size-4 shrink-0 rounded-[4px] border border-input bg-background shadow-xs outline-none transition-colors data-[state=checked]:border-emerald-600 data-[state=checked]:bg-emerald-600 data-[state=indeterminate]:border-emerald-600 data-[state=indeterminate]:bg-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/25 disabled:cursor-not-allowed disabled:opacity-50", className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="grid place-items-center text-white">
        {props.checked === "indeterminate" ? <MinusIcon className="size-3" /> : <CheckIcon className="size-3" />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
