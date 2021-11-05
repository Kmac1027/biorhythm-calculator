import React from 'react';
import dayjs from 'dayjs';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  ReferenceLine,
  CartesianGrid,
} from 'recharts';
import { calculateBiorhythymSeries } from '../calculations';
import './BioChart.css'

function formatDate(isoString) {
  return dayjs(isoString).format('D MM');
}

function BioChart({ dateOfBirth, targetDate }) {
  console.log('birthdate:', dateOfBirth);
  console.log('targetDate:', targetDate);
  const startDate = dayjs(targetDate).subtract(15, 'day');
  const data = calculateBiorhythymSeries(dateOfBirth, startDate, 31).map(
    (item) => ({ ...item, date: formatDate(item.date) }));
  return (
    <ResponsiveContainer className='biorhythm-card' width='100%' height={200}>
      <LineChart data={data}>
        <XAxis dataKey='date'
          ticks={[data[3].date, data[15].date, data[27].date]} />
        <CartesianGrid vertical={false} strokeDashArray="3 3" />
        <ReferenceLine x={data[15].date} />
        <Line type='natural' dot={false} dataKey="physical" className='phy' />
        <Line type='natural' dot={false} dataKey="emotional" className='emo' />
        <Line type='natural' dot={false} dataKey="intellectual" className='int' />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BioChart;