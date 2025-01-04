"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const alerts = [
  {
    product: "Wireless Earbuds",
    stock: 5,
    location: "Warehouse A",
    status: "critical",
  },
  {
    product: "Smart Watch",
    stock: 8,
    location: "Store B",
    status: "warning",
  },
  {
    product: "Bluetooth Speaker",
    stock: 3,
    location: "Warehouse C",
    status: "critical",
  },
]

interface LowStockAlertsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LowStockAlerts({ className, ...props }: LowStockAlertsProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Low Stock Alerts</CardTitle>
        <CardDescription>Products requiring immediate attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.product}
              className="flex items-center justify-between space-x-4"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {alert.product}
                </p>
                <p className="text-sm text-muted-foreground">
                  {alert.location}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{alert.stock} units</span>
                <Badge variant={alert.status === "critical" ? "destructive" : "warning"}>
                  {alert.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

