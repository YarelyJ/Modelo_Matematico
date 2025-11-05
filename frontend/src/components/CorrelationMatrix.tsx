"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { TrendingUp } from "lucide-react"
import { getCorrelations } from "../services/api"

export default function CorrelationMatrix() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCorrelations()
        // Tomar las 10 correlaciones más significativas
        const topCorrelations = result.slice(0, 10)
        setData(topCorrelations)
      } catch (error) {
        console.error("Error fetching correlations:", error)
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
          <div className="h-96 bg-slate-800 rounded"></div>
        </div>
      </div>
    )
  }

  const getColor = (value: number) => {
    if (value > 0) return "#10b981" // green for positive
    return "#ef4444" // red for negative
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-cyan-400" />
        <h2 className="text-lg font-semibold text-slate-100">Top 10 Correlaciones con "class"</h2>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 200, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis type="number" domain={[-1, 1]} stroke="#94a3b8" style={{ fontSize: "12px" }} />
          <YAxis type="category" dataKey="feature" stroke="#94a3b8" style={{ fontSize: "11px" }} width={190} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "#f1f5f9",
            }}
            formatter={(value: any) => value.toFixed(6)}
          />
          <Bar dataKey="correlation" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.correlation)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
