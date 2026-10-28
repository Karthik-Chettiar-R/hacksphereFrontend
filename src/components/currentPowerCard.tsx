import { useState } from 'react'

export default function CurrentPowerCard() {
  const [mainGridColour] = useState('text-green-500')
  const [renewableColour] = useState('text-gray-500')

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Current power source</h2>
      <p className="mt-1 text-sm text-slate-500">Available energy sources</p>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600">Main grid</span>
          <span className={`${mainGridColour} text-sm font-semibold`}>Active</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600">Renewable storage</span>
          <span className={`${renewableColour} text-sm font-semibold`}>Standby</span>
        </div>
      </div>
    </article>
  )
}