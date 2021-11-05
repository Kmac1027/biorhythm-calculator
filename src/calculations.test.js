import { calculateBiorhythyms } from './calculations'

it('calculate PHYSICAL biorhythm', () => {
  const { physical } = calculateBiorhythyms('Jan-01-1995', 'Feb-18-2020');
  expect(physical).toBeCloseTo(0.5196);
});
it('calculate EMOTIONAL biorhythm', () => {
  const { emotional } = calculateBiorhythyms('Jan-01-1995', 'Feb-18-2020');
  expect(emotional).toBeCloseTo(-0.9010);
});
it('calculate INTELLECTUAL biorhythm', () => {
  const { intellectual } = calculateBiorhythyms('Jan-01-1995', 'Feb-18-2020');
  expect(intellectual).toBeCloseTo(0.8146);
});