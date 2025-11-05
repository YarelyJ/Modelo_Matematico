"use client"

import { useEffect, useState } from "react"
import { Activity, Database, Network, BarChart3 } from "lucide-react"
import DatasetOverview from "./components/DatasetOverview"
import ProtocolDistribution from "./components/ProtocolDistribution"
import ClassificationChart from "./components/ClassificationChart"
import CorrelationMatrix from "./components/CorrelationMatrix"
import StatisticsTable from "./components/StatisticsTable"
import { getOverview } from "./services/api"
import "./App.css"

function App() {
  const [overview, setOverview] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const data = await getOverview()
        setOverview(data)
      } catch (err) {
        setError("Error al cargar los datos. Verifica que el backend esté ejecutándose.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchOverview()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-slate-400">Cargando datos del dataset...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-red-400 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-slate-200 mb-2">Error de Conexión</h2>
          <p className="text-slate-400">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Database className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">NSL-KDD Dataset Analysis</h1>
              <p className="text-sm text-slate-400">Sistema de Detección de Intrusiones</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Database className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium text-slate-400">Total Registros</span>
            </div>
            <p className="text-3xl font-bold text-slate-100">{overview?.total_records.toLocaleString()}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-slate-400">Tráfico Normal</span>
            </div>
            <p className="text-3xl font-bold text-slate-100">{overview?.classification.normal.toLocaleString()}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Network className="w-5 h-5 text-red-400" />
              <span className="text-sm font-medium text-slate-400">Anomalías</span>
            </div>
            <p className="text-3xl font-bold text-slate-100">{overview?.classification.anomaly.toLocaleString()}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-violet-400" />
              <span className="text-sm font-medium text-slate-400">Atributos</span>
            </div>
            <p className="text-3xl font-bold text-slate-100">{overview?.total_attributes}</p>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-8">
          <DatasetOverview />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ProtocolDistribution />
          <ClassificationChart />
        </div>

        {/* Correlation Matrix */}
        <div className="mb-8">
          <CorrelationMatrix />
        </div>

        {/* Statistics Table */}
        <div>
          <StatisticsTable />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 mt-12">
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-sm text-slate-400">
            NSL-KDD Dataset Analysis Dashboard • Sistema Distribuido Django + React
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
