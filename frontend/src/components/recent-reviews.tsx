"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const reviews = [
  {
    id: 1,
    product: "Wireless Earbuds",
    customer: "Alex Thompson",
    rating: 5,
    comment: "Great sound quality and battery life!",
    date: "2024-01-03",
  },
  {
    id: 2,
    product: "Smart Watch",
    customer: "Sarah Chen",
    rating: 4,
    comment: "Good features but the app needs improvement",
    date: "2024-01-02",
  },
  {
    id: 3,
    product: "Bluetooth Speaker",
    customer: "Michael Rodriguez",
    rating: 5,
    comment: "Excellent sound and build quality",
    date: "2024-01-01",
  },
]

export function RecentReviews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Reviews</CardTitle>
        <CardDescription>Latest customer feedback on products</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={`/avatars/${review.id}.png`} alt={review.customer} />
                <AvatarFallback>{review.customer[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{review.customer}</p>
                <p className="text-sm text-muted-foreground">{review.product}</p>
                <div className="flex items-center pt-2">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>
                <p className="text-sm">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

