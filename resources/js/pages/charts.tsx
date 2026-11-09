import { Head } from '@inertiajs/react';

import MonthlyLineChart from '../components/charts/MonthlyLineChart';
import ProgramBarChart from '../components/charts/ProgramBarChart';
import ProgramPieChart from '../components/charts/ProgramPieChart';

export default function Charts() {
  return (
    <>
      <Head title="Student Analytics" />

      <main className="min-h-screen bg-slate-50 p-6">
        <h1 className="text-3xl font-bold">
          Student Analytics
        </h1>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <section className="rounded-xl bg-white p-5 shadow">
            <h2 className="mb-4 text-xl font-semibold">
              Monthly Registrations
            </h2>
            <MonthlyLineChart />
          </section>

          <section className="rounded-xl bg-white p-5 shadow">
            <h2 className="mb-4 text-xl font-semibold">
              Students by Program
            </h2>
            <ProgramBarChart />
          </section>

          <section className="rounded-xl bg-white p-5 shadow">
            <h2 className="mb-4 text-xl font-semibold">
              Program Distribution
            </h2>
            <ProgramPieChart />
          </section>
        </div>
      </main>
    </>
  );
}