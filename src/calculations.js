import dayjs from 'dayjs';

function calculateBiorhythym(dateOfBirth, targetDate, cycle) {
  const birthDay = dayjs(dateOfBirth).startOf('day');
  const targetDay = dayjs(targetDate).startOf('day');
  const diff = targetDay.diff(birthDay, 'days');
  return Math.sin(2 * Math.PI * diff / cycle);
}
export function calculateBiorhythyms(dateOfBirth, targetDate) {
  return {
    date: targetDate,
    physical: calculateBiorhythym(dateOfBirth, targetDate, 23),
    emotional: calculateBiorhythym(dateOfBirth, targetDate, 28),
    intellectual: calculateBiorhythym(dateOfBirth, targetDate, 33),
  };
}

export function calculateBiorhythymSeries(dateOfBirth, startDate, size) {
  const series = [];
  const startDay = dayjs(startDate).startOf('day');
  for (let i = 0; i < size; i++) {
    const targetDate = startDay.add(i, 'days').toISOString();
    series.push(calculateBiorhythyms(dateOfBirth, targetDate));
  }
  return series;
}