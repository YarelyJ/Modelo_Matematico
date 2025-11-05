import { NextResponse } from "next/server"

export async function GET() {
  const overview = {
    totalRecords: 125973,
    features: 43,
    normalTraffic: 67343,
    anomalies: 58630,
    protocols: {
      tcp: 102689,
      udp: 14993,
      icmp: 8291,
    },
    format: "ARFF/TXT",
    purpose: "Intrusion Detection System Training",
  }

  return NextResponse.json(overview)
}
