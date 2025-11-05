import { Suspense } from "react"
import { DatasetOverview } from "@/components/dataset-overview"
import { ProtocolDistribution } from "@/components/protocol-distribution"
import { ClassificationChart } from "@/components/classification-chart"
import { CorrelationMatrix } from "@/components/correlation-matrix"
import { StatisticsTable } from "@/components/statistics-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Activity, BarChart3, Database, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">NSL-KDD Analysis</h1>
                <p className="text-sm text-muted-foreground">Intrusion Detection Dataset Visualization</p>
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#overview" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Overview
              </a>
              <a
                href="#analytics"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Analytics
              </a>
              <a
                href="#api"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                API Docs
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Records</p>
                <p className="text-2xl font-bold text-foreground mt-1">125,973</p>
              </div>
              <Database className="h-8 w-8 text-chart-1" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Normal Traffic</p>
                <p className="text-2xl font-bold text-foreground mt-1">67,343</p>
              </div>
              <Activity className="h-8 w-8 text-chart-2" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Anomalies</p>
                <p className="text-2xl font-bold text-foreground mt-1">58,630</p>
              </div>
              <Shield className="h-8 w-8 text-chart-3" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Features</p>
                <p className="text-2xl font-bold text-foreground mt-1">43</p>
              </div>
              <BarChart3 className="h-8 w-8 text-chart-4" />
            </div>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="correlation">Correlation</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
              <DatasetOverview />
            </Suspense>
          </TabsContent>

          <TabsContent value="distribution" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Suspense fallback={<div>Loading...</div>}>
                <ProtocolDistribution />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <ClassificationChart />
              </Suspense>
            </div>
          </TabsContent>

          <TabsContent value="correlation" className="space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
              <CorrelationMatrix />
            </Suspense>
          </TabsContent>

          <TabsContent value="statistics" className="space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
              <StatisticsTable />
            </Suspense>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
