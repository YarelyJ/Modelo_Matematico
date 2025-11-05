import { NextResponse } from "next/server"

export async function GET() {
  const statistics = [
    {
      feature: "duration",
      mean: 47.98,
      std: 707.75,
      min: 0,
      max: 58329,
      description: "Length of connection in seconds",
    },
    {
      feature: "src_bytes",
      mean: 3025.61,
      std: 880612.42,
      min: 0,
      max: 1379963888,
      description: "Number of data bytes from source to destination",
    },
    {
      feature: "dst_bytes",
      mean: 868.53,
      std: 33032.86,
      min: 0,
      max: 5155468,
      description: "Number of data bytes from destination to source",
    },
    {
      feature: "wrong_fragment",
      mean: 0.01,
      std: 0.14,
      min: 0,
      max: 3,
      description: "Number of wrong fragments",
    },
    {
      feature: "urgent",
      mean: 0.0,
      std: 0.02,
      min: 0,
      max: 3,
      description: "Number of urgent packets",
    },
    {
      feature: "hot",
      mean: 0.21,
      std: 1.68,
      min: 0,
      max: 101,
      description: "Number of hot indicators",
    },
    {
      feature: "num_failed_logins",
      mean: 0.0,
      std: 0.02,
      min: 0,
      max: 5,
      description: "Number of failed login attempts",
    },
    {
      feature: "num_compromised",
      mean: 0.06,
      std: 3.39,
      min: 0,
      max: 7479,
      description: "Number of compromised conditions",
    },
  ]

  return NextResponse.json({ statistics })
}
