"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleClick = (item: NavItem) => {
    setActiveTab(item.name)
    const element = document.getElementById(item.url.replace('#', ''))
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={cn(
        "fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 md:gap-3 bg-background/80 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg overflow-x-auto scrollbar-hide">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={cn(
                "relative cursor-pointer text-xs md:text-sm font-medium px-4 md:px-6 py-2 rounded-full transition-colors whitespace-nowrap flex-shrink-0",
                "text-foreground/70 hover:text-foreground",
                isActive && "text-foreground",
              )}
            >
              <span className="hidden sm:inline">{item.name}</span>
              <span className="sm:hidden">
                <Icon size={16} strokeWidth={2.5} className="md:w-[18px] md:h-[18px]" />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-accent rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-foreground rounded-t-full">
                    <div className="absolute w-12 h-6 bg-foreground/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-foreground/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-foreground/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
