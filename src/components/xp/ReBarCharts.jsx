import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../ui/chart";
import { CarIcon, Monitor } from "lucide-react";

const chartData = [
  { day: "Monday", earnings: 186 },
  { day: "Tuesday", earnings: 305 },
  { day: "Wednesday", earnings: 237 },
  { day: "Thurday", earnings: 73 },
  { day: "Friday", earnings: 209 },
  { day: "Saturday", earnings: 214 },
];

const chartConfig = {
  earnings: {
    label: "revenue",
    color: "#2563eb",
    icon: CarIcon,
  },
};

const Chart = () => {
  return (
    <ChartContainer config={chartConfig} className="size-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={2}
          axisLine={true}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        {/* <YAxis
          dataKey="month"
          tickLine={true}
          tickMargin={10}
          axisLine={true}
          tickFormatter={(value) => value.slice(0, 3)}
        /> */}
        <ChartTooltip content={<ChartTooltipContent />} label="just me" />
        {/* <ChartLegend content={<ChartLegendContent />} /> */}
        <Bar dataKey="earnings" fill="bg-eco-green" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default Chart;
