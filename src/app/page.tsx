import { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { InventoryOverview } from "@/components/inventory-overview"
import { TopProducts } from "@/components/top-products"
import { LowStockAlerts } from "@/components/low-stock-alerts"
import { RecentReviews } from "@/components/recent-reviews"

export const metadata: Metadata = {
  title: "Inventory Dashboard",
  description: "Real-time inventory management system powered by HarperDB",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Inventory Dashboard"
        description="Monitor your inventory levels and product performance in real-time."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <InventoryOverview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <TopProducts className="col-span-4" />
        <LowStockAlerts className="col-span-3" />
      </div>
      <RecentReviews />
    </DashboardShell>
  )
}

