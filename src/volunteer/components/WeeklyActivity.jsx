import { BarChart,Bar,XAxis,YAxis,ResponsiveContainer,Tooltip, } from "recharts";

const weeklyData = [
  { day: "MON", tasks: 2 },
  { day: "TUE", tasks: 7 },
  { day: "WED", tasks: 4 },
  { day: "THU", tasks: 3 },
  { day: "FRI", tasks: 5 },
  { day: "SAT", tasks: 1 },
  { day: "SUN", tasks: 5 },
];

const WeeklyActivity = () => {
  return (
    <div className="bg-[#0f172a] rounded-xl p-6 w-full h-[350px]">
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-white text-lg font-semibold">
          Weekly Activity
        </h2>
        <p className="text-gray-400 text-sm">
          Tasks completed over the last 7 days
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={weeklyData}>
          <XAxis
            dataKey="day"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip />
          <Bar
            dataKey="tasks"
            fill="#3b82f6"
            radius={[8, 8, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyActivity;