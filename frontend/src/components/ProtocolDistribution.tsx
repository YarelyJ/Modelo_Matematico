"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Network } from "lucide-react"
import { getProtocols } from "../services/api"

const COLORS = ["#3b82f6", "#10b981", "#8b5cf6"]

export default function ProtocolDistribution() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProtocols()
        const chartData = [
          { name: "TCP", value: result.tcp, color: COLORS[0] },
          { name: "UDP", value: result.udp, color: COLORS[1] },
          { name: "ICMP", value: result.icmp, color: COLORS[2] },
        ]
        setData(chartData)
      } catch (error) {
        console.error("Error fetching protocols:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-slate-800 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-slate-800 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Network className="w-5 h-5 text-cyan-400" />
        <h2 className="text-lg font-semibold text-slate-100">Distribución de Protocolos</h2>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "#f1f5f9",
            }}
          />
          <Legend wrapperStyle={{ color: "#94a3b8" }} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
