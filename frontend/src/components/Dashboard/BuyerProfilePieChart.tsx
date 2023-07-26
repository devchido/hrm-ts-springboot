import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}

const data = [
  { name: 'Male', value: 540 },
  { name: 'Female', value: 620 },
  { name: 'Other', value: 210 },
];

const RADIAN: number = Math.PI / 180;
const COLORS: string[] = ['#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: CustomLabelProps): JSX.Element => {
  const radius: number = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x: number = cx + radius * Math.cos(-midAngle * RADIAN);
  const y: number = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function BuyerProfilePieChart() {
  return (
    <div className="w-[21rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Buyer Profile</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((i, index) => (
                <Cell key={`cell-${i}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BuyerProfilePieChart;
