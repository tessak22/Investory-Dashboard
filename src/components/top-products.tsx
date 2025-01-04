"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    name: "Product A",
    total: 1823,
  },
  {
    name: "Product B",
    total: 1345,
  },
  {
    name: "Product C",
    total: 1234,
  },
  {
    name: "Product D",
    total: 1023,
  },
  {
    name: "Product E",
    total: 956,
  },
]

interface TopProductsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TopProducts({ className, ...props }: TopProductsProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>
          Top selling products across all locations
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar
              dataKey="total"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

