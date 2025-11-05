"use client"

import { useEffect, useState } from "react"
import { Table } from "lucide-react"
import { getStatistics } from "../services/api"

export default function StatisticsTable() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getStatistics()
        // Tomar las primeras 10 características
        setData(result.slice(0, 10))
      } catch (error) {
        console.error("Error fetching statistics:", error)
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
        <Table className="w-5 h-5 text-cyan-400" />
        <h2 className="text-lg font-semibold text-slate-100">Estadísticas Descriptivas (Top 10)</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="text-left py-3 px-4 text-slate-400 font-medium">Característica</th>
              <th className="text-right py-3 px-4 text-slate-400 font-medium">Media</th>
              <th className="text-right py-3 px-4 text-slate-400 font-medium">Desv. Est.</th>
              <th className="text-right py-3 px-4 text-slate-400 font-medium">Mínimo</th>
              <th className="text-right py-3 px-4 text-slate-400 font-medium">Máximo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stat, index) => (
              <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-4 text-slate-300 font-medium">{stat.feature}</td>
                <td className="py-3 px-4 text-right text-slate-300">{stat.mean.toFixed(2)}</td>
                <td className="py-3 px-4 text-right text-slate-300">{stat.std.toFixed(2)}</td>
                <td className="py-3 px-4 text-right text-slate-300">{stat.min.toFixed(2)}</td>
                <td className="py-3 px-4 text-right text-slate-300">{stat.max.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
