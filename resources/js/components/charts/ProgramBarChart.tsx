import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { programData } from '../../data/chart-data';

export default function ProgramBarChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={programData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="program" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" fill="#16a34a" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}