"use client"

import {
  ChartLegendContent,
  ChartRoot,
  useChartConfig,
} from "compositions/ui/chart"
import { Legend, PolarGrid, Radar, RadarChart } from "recharts"

export const RadarChartLinesOnly = () => {
  const chart = useChartConfig({
    data: [
      { windows: 30, mac: 100, month: "January" },
      { windows: 120, mac: 20, month: "February" },
      { windows: 45, mac: 130, month: "March" },
      { windows: 140, mac: 40, month: "May" },
      { windows: 60, mac: 50, month: "June" },
      { windows: 20, mac: 160, month: "July" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "orange.solid" },
    ],
  })

  return (
    <ChartRoot maxW="sm">
      <RadarChart data={chart.data}>
        <PolarGrid stroke={chart.color("border")} />
        <Legend content={<ChartLegendContent chart={chart} />} />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            strokeWidth={2}
            stroke={chart.color(item.color)}
            fill="none"
          />
        ))}
      </RadarChart>
    </ChartRoot>
  )
}
