"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const correlations = [
  { feature: "same_srv_rate", correlation: 0.85, type: "positive" },
  { feature: "dst_host_same_srv_rate", correlation: 0.82, type: "positive" },
  { feature: "dst_host_srv_serror_rate", correlation: -0.78, type: "negative" },
  { feature: "dst_host_serror_rate", correlation: -0.75, type: "negative" },
  { feature: "serror_rate", correlation: -0.72, type: "negative" },
  { feature: "srv_serror_rate", correlation: -0.7, type: "negative" },
  { feature: "dst_host_srv_count", correlation: 0.65, type: "positive" },
  { feature: "count", correlation: 0.58, type: "positive" },
]

export function CorrelationMatrix() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Correlations</CardTitle>
        <CardDescription>Top correlations with classification target</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {correlations.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{item.feature}</p>
                <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.type === "positive" ? "bg-chart-2" : "bg-chart-3"}`}
                    style={{ width: `${Math.abs(item.correlation) * 100}%` }}
                  />
                </div>
              </div>
              <div className="ml-4 flex items-center gap-2">
                <Badge variant={item.type === "positive" ? "default" : "secondary"}>
                  {item.correlation > 0 ? "+" : ""}
                  {item.correlation.toFixed(2)}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
