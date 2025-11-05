import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const statistics = [
  { feature: "duration", mean: "47.98", std: "707.75", min: "0", max: "58329" },
  { feature: "src_bytes", mean: "3025.61", std: "880612.42", min: "0", max: "1379963888" },
  { feature: "dst_bytes", mean: "868.53", std: "33032.86", min: "0", max: "5155468" },
  { feature: "wrong_fragment", mean: "0.01", std: "0.14", min: "0", max: "3" },
  { feature: "urgent", mean: "0.00", std: "0.02", min: "0", max: "3" },
  { feature: "hot", mean: "0.21", std: "1.68", min: "0", max: "101" },
  { feature: "num_failed_logins", mean: "0.00", std: "0.02", min: "0", max: "5" },
  { feature: "num_compromised", mean: "0.06", std: "3.39", min: "0", max: "7479" },
]

export function StatisticsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistical Summary</CardTitle>
        <CardDescription>Descriptive statistics for key features</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead className="text-right">Mean</TableHead>
              <TableHead className="text-right">Std Dev</TableHead>
              <TableHead className="text-right">Min</TableHead>
              <TableHead className="text-right">Max</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {statistics.map((stat, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{stat.feature}</TableCell>
                <TableCell className="text-right">{stat.mean}</TableCell>
                <TableCell className="text-right">{stat.std}</TableCell>
                <TableCell className="text-right">{stat.min}</TableCell>
                <TableCell className="text-right">{stat.max}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
