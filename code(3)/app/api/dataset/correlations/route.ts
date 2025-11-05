import { NextResponse } from "next/server"

export async function GET() {
  const correlations = [
    {
      feature: "same_srv_rate",
      correlation: 0.751913,
      type: "positive",
      description: "Percentage of connections to the same service",
    },
    {
      feature: "dst_host_srv_count",
      correlation: 0.722535,
      type: "positive",
      description: "Count of connections to same service on destination host",
    },
    {
      feature: "dst_host_same_srv_rate",
      correlation: 0.693803,
      type: "positive",
      description: "Percentage of connections to same service on destination host",
    },
    {
      feature: "srv_diff_host_rate",
      correlation: 0.119377,
      type: "positive",
      description: "Percentage of connections to different hosts",
    },
    {
      feature: "dst_host_srv_serror_rate",
      correlation: -0.654985,
      type: "negative",
      description: "Percentage of connections with SYN errors on destination host service",
    },
    {
      feature: "dst_host_serror_rate",
      correlation: -0.651842,
      type: "negative",
      description: "Percentage of connections with SYN errors on destination host",
    },
    {
      feature: "serror_rate",
      correlation: -0.650652,
      type: "negative",
      description: "Percentage of connections with SYN errors",
    },
    {
      feature: "srv_serror_rate",
      correlation: -0.648289,
      type: "negative",
      description: "Percentage of connections with SYN errors for service",
    },
    {
      feature: "count",
      correlation: -0.576444,
      type: "negative",
      description: "Number of connections to same host in past 2 seconds",
    },
    {
      feature: "dst_host_count",
      correlation: -0.375052,
      type: "negative",
      description: "Count of connections to destination host",
    },
    {
      feature: "srv_rerror_rate",
      correlation: -0.253504,
      type: "negative",
      description: "Percentage of connections with REJ errors for service",
    },
    {
      feature: "dst_host_srv_rerror_rate",
      correlation: -0.25343,
      type: "negative",
      description: "Percentage of connections with REJ errors on destination host service",
    },
    {
      feature: "rerror_rate",
      correlation: -0.253397,
      type: "negative",
      description: "Percentage of connections with REJ errors",
    },
    {
      feature: "dst_host_rerror_rate",
      correlation: -0.252563,
      type: "negative",
      description: "Percentage of connections with REJ errors on destination host",
    },
    {
      feature: "dst_host_diff_srv_rate",
      correlation: -0.242898,
      type: "negative",
      description: "Percentage of different services on destination host",
    },
    {
      feature: "diff_srv_rate",
      correlation: -0.20366,
      type: "negative",
      description: "Percentage of connections to different services",
    },
    {
      feature: "wrong_fragment",
      correlation: -0.095905,
      type: "negative",
      description: "Number of wrong fragments",
    },
    {
      feature: "dst_host_same_src_port_rate",
      correlation: -0.092444,
      type: "negative",
      description: "Percentage of connections from same source port on destination host",
    },
    {
      feature: "dst_host_srv_diff_host_rate",
      correlation: -0.062332,
      type: "negative",
      description: "Percentage of different hosts for service on destination host",
    },
    {
      feature: "duration",
      correlation: -0.048785,
      type: "negative",
      description: "Length of connection in seconds",
    },
  ]

  return NextResponse.json({ correlations })
}
