import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DatasetOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Dataset Information</CardTitle>
          <CardDescription>NSL-KDD 2009 Intrusion Detection Dataset</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm font-medium text-muted-foreground">Dataset Name</span>
              <span className="text-sm font-semibold text-foreground">ISCX NSL-KDD 2009</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm font-medium text-muted-foreground">Total Records</span>
              <span className="text-sm font-semibold text-foreground">125,973</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm font-medium text-muted-foreground">Features</span>
              <span className="text-sm font-semibold text-foreground">43 attributes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-sm font-medium text-muted-foreground">Format</span>
              <span className="text-sm font-semibold text-foreground">ARFF / TXT</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium text-muted-foreground">Purpose</span>
              <span className="text-sm font-semibold text-foreground">IDS Training</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Protocol Distribution</CardTitle>
          <CardDescription>Network protocols in the dataset</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">TCP</span>
                <span className="text-sm font-semibold text-foreground">102,689 (81.5%)</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-chart-1" style={{ width: "81.5%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">UDP</span>
                <span className="text-sm font-semibold text-foreground">14,993 (11.9%)</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-chart-2" style={{ width: "11.9%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">ICMP</span>
                <span className="text-sm font-semibold text-foreground">8,291 (6.6%)</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-chart-3" style={{ width: "6.6%" }} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
