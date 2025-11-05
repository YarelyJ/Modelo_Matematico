import { NextResponse } from "next/server"

export async function GET() {
  const classification = {
    normal: {
      count: 67343,
      percentage: 53.5,
      description: "Normal network traffic without intrusions",
    },
    anomaly: {
      count: 58630,
      percentage: 46.5,
      description: "Anomalous traffic indicating potential intrusions",
      types: [
        { name: "DoS", count: 45927, description: "Denial of Service attacks" },
        { name: "Probe", count: 11656, description: "Surveillance and probing" },
        { name: "R2L", count: 995, description: "Remote to Local attacks" },
        { name: "U2R", count: 52, description: "User to Root attacks" },
      ],
    },
    total: 125973,
  }

  return NextResponse.json(classification)
}
