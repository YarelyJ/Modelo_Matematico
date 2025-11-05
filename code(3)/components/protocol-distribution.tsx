"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { protocol: "TCP", count: 102689, percentage: 81.5 },
  { protocol: "UDP", count: 14993, percentage: 11.9 },
  { protocol: "ICMP", count: 8291, percentage: 6.6 },
]

export function ProtocolDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Protocol Distribution</CardTitle>
        <CardDescription>Network traffic by protocol type</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="protocol" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="count" fill="hsl(var(--chart-1))" name="Record Count" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
