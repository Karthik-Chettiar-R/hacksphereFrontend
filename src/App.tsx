import DemandChart from './components/demandChart'
import CurrentPowerCard from './components/currentPowerCard'

function App() {
  const progress = 0.5
  const progressPercentage = Math.round(progress * 100)

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Energy dashboard
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Power overview
          </h1>
          <p className="mt-2 text-slate-500">
            Monitor your current source and demand throughout the day.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <CurrentPowerCard />

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">System capacity</h2>
                <p className="mt-1 text-sm text-slate-500">Current overall usage</p>
              </div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
                {progressPercentage}%
              </span>
            </div>

            <div
              className="mt-6 h-4 overflow-hidden rounded-full bg-slate-100 p-1"
              role="progressbar"
              aria-label="System capacity"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progressPercentage}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 shadow-[0_0_12px_rgba(139,92,246,0.55)] transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between text-xs font-medium text-slate-400">
              <span>0%</span>
              <span>100%</span>
            </div>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-slate-900">Demand forecast</h2>
            <p className="mt-1 text-sm text-slate-500">
              Projected and actual demand by hour
            </p>
          </div>
          <div className="flex justify-center">
            <DemandChart />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
