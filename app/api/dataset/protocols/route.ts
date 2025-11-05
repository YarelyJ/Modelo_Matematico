import { NextResponse } from "next/server"

export async function GET() {
  const protocols = [
    {
      protocol: "TCP",
      count: 102689,
      percentage: 81.5,
      description: "Transmission Control Protocol - connection-oriented",
    },
    {
      protocol: "UDP",
      count: 14993,
      percentage: 11.9,
      description: "User Datagram Protocol - connectionless",
    },
    {
      protocol: "ICMP",
      count: 8291,
      percentage: 6.6,
      description: "Internet Control Message Protocol - diagnostic",
    },
  ]

  return NextResponse.json({ protocols, total: 125973 })
}
