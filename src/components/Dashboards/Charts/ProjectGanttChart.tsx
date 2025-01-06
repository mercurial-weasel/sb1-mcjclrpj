import React from 'react';
import Plot from 'react-plotly.js';
import { ProjectTask } from '../../../types/project';

interface ProjectGanttChartProps {
  tasks: ProjectTask[];
  selectedMonth: string;
}

export function ProjectGanttChart({ tasks, selectedMonth }: ProjectGanttChartProps) {
  return (
    <Plot
      data={[
        {
          type: 'bar',
          x: tasks.map(task => task.duration),
          y: tasks.map(task => task.name),
          orientation: 'h',
          marker: {
            color: tasks.map(task => task.status === 'completed' ? '#34D399' : 
              task.status === 'in-progress' ? '#60A5FA' : '#F87171'),
          },
          text: tasks.map(task => `${task.progress}% Complete`),
          textposition: 'auto',
          hoverinfo: 'text',
          hovertext: tasks.map(task => 
            `${task.name}<br>` +
            `Start: ${task.startDate}<br>` +
            `End: ${task.endDate}<br>` +
            `Progress: ${task.progress}%`
          ),
        }
      ]}
      layout={{
        title: 'Project Timeline & Milestones',
        height: 400,
        margin: { t: 30, r: 30, l: 150, b: 30 },
        xaxis: {
          title: 'Timeline',
          showgrid: true,
        },
        yaxis: {
          automargin: true,
        },
        showlegend: false,
      }}
      config={{ responsive: true }}
    />
  );
}