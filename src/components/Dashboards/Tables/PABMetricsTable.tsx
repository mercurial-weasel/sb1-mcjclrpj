import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface PABMetrics {
  totalDecisions: number;
  approvedItems: number;
  pendingItems: number;
  rejectedItems: number;
  meetingEfficiency: number;
  actionCompletion: number;
  riskMitigated: number;
}

interface PABMetricsTableProps {
  metrics: PABMetrics;
}

export function PABMetricsTable({ metrics }: PABMetricsTableProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Key Performance Metrics</h3>
      <div className="overflow-hidden">
        <table className="min-w-full">
          <tbody className="divide-y divide-gray-200">
            <MetricRow
              label="Total Decisions"
              value={metrics.totalDecisions}
              trend="up"
            />
            <MetricRow
              label="Meeting Efficiency"
              value={`${metrics.meetingEfficiency}%`}
              trend="up"
            />
            <MetricRow
              label="Action Completion"
              value={`${metrics.actionCompletion}%`}
              trend="up"
            />
            <MetricRow
              label="Risk Mitigation"
              value={`${metrics.riskMitigated}%`}
              trend="up"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface MetricRowProps {
  label: string;
  value: string | number;
  trend: 'up' | 'down';
}

function MetricRow({ label, value, trend }: MetricRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="py-3 text-sm text-gray-900">{label}</td>
      <td className="py-3 text-right">
        <div className="flex items-center justify-end space-x-2">
          <span className="text-sm font-medium text-gray-900">{value}</span>
          {trend === 'up' ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
        </div>
      </td>
    </tr>
  );
}