"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, TrendingUp, AlertTriangle, Star } from 'lucide-react'

const stats = [
  {
    title: "Total Products",
    value: "2,345",
    description: "Active products in inventory",
    icon: Package,
  },
  {
    title: "Low Stock Items",
    value: "15",
    description: "Products below threshold",
    icon: AlertTriangle,
  },
  {
    title: "Top Rated",
    value: "4.8",
    description: "Average product rating",
    icon: Star,
  },
  {
    title: "Sales Trend",
    value: "+12.3%",
    description: "Increase from last month",
    icon: TrendingUp,
  },
]

export function InventoryOverview() {
  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

