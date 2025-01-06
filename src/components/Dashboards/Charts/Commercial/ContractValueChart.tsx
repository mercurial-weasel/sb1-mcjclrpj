import React from 'react';
import Plot from 'react-plotly.js';
import { commercialData } from '../../../../data/commercialData';

export function ContractValueChart({ selectedMonth }: { selectedMonth: string }) {
  const data = commercialData[selectedMonth as keyof typeof commercialData];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Plot
        data={[{
          type: 'waterfall',
          name: 'Contract Value',
          orientation: 'v',
          measure: ['absolute', 'relative', 'relative', 'relative', 'relative', 'total'],
          x: ['Original', 'Change 1', 'Change 2', 'Change 3', 'Change 4', 'Current'],
          y: [
            data.contractValue.original,
            ...data.contractValue.changes,
            data.contractValue.current
          ],
          connector: { line: { color: 'rgb(63, 63, 63)' } },
          decreasing: { marker: { color: '#F87171' } },
          increasing: { marker: { color: '#34D399' } },
          totals: { marker: { color: '#60A5FA' } }
        }]}
        layout={{
          title: 'Contract Value Changes',
          height: 300,
          margin: { t: 30, r: 30, l: 40, b: 40 },
          yaxis: { title: 'Value ($)' }
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}