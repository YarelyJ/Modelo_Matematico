"use client"

import { useEffect, useState } from "react"
import { Database, FileText, Network } from "lucide-react"
import { getOverview } from "../services/api"

export default function DatasetOverview() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getOverview()
        setData(result)
      } catch (error) {
        console.error("Error fetching overview:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-slate-800 rounded w-1/4"></div>
          <div className="h-20 bg-slate-800 rounded"></div>
        </div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Database className="w-5 h-5 text-cyan-400" />
        <h2 className="text-lg font-semibold text-slate-100">Información del Dataset</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <FileText className="w-4 h-4" />
            <span>Nombre del Dataset</span>
          </div>
          <p className="text-slate-100 font-medium">{data.dataset_name}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Database className="w-4 h-4" />
            <span>Total de Registros</span>
          </div>
          <p className="text-slate-100 font-medium text-2xl">{data.total_records.toLocaleString()}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Network className="w-4 h-4" />
            <span>Atributos</span>
          </div>
          <p className="text-slate-100 font-medium text-2xl">{data.total_attributes}</p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-800">
        <h3 className="text-sm font-medium text-slate-400 mb-3">Distribución de Protocolos</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-xs text-slate-400 mb-1">TCP</p>
            <p className="text-xl font-bold text-blue-400">{data.protocols.tcp.toLocaleString()}</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-xs text-slate-400 mb-1">UDP</p>
            <p className="text-xl font-bold text-emerald-400">{data.protocols.udp.toLocaleString()}</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-xs text-slate-400 mb-1">ICMP</p>
            <p className="text-xl font-bold text-violet-400">{data.protocols.icmp.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
