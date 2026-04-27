export interface LiftPR {
  lift: string;
  weight: number;
  unit: 'lbs' | 'kg';
  date: string;
}

export interface WeightEntry {
  date: string;
  weight: number;
}

export interface CardioEntry {
  date: string;
  distance: number;
  unit: 'mi' | 'km';
  time: string;
  pace?: string;
}

export interface WorkoutEntry {
  date: string;
  type: string;
  notes: string;
}

export const liftingPRs: LiftPR[] = [
  { lift: 'Squat', weight: 315, unit: 'lbs', date: '2026-03-10' },
  { lift: 'Bench Press', weight: 225, unit: 'lbs', date: '2026-04-01' },
  { lift: 'Deadlift', weight: 405, unit: 'lbs', date: '2026-02-15' },
  { lift: 'Overhead Press', weight: 155, unit: 'lbs', date: '2026-03-22' },
];

export const bodyWeightLog: WeightEntry[] = [
  { date: '2026-01-01', weight: 182 },
  { date: '2026-01-15', weight: 181 },
  { date: '2026-02-01', weight: 179 },
  { date: '2026-02-15', weight: 178 },
  { date: '2026-03-01', weight: 177 },
  { date: '2026-03-15', weight: 176 },
  { date: '2026-04-01', weight: 175 },
  { date: '2026-04-15', weight: 174 },
];

export const cardioLog: CardioEntry[] = [
  { date: '2026-04-20', distance: 3.1, unit: 'mi', time: '24:30', pace: '7:54/mi' },
  { date: '2026-04-13', distance: 5, unit: 'mi', time: '42:10', pace: '8:26/mi' },
  { date: '2026-04-06', distance: 3.1, unit: 'mi', time: '25:00', pace: '8:03/mi' },
  { date: '2026-03-30', distance: 6.2, unit: 'mi', time: '53:45', pace: '8:40/mi' },
  { date: '2026-03-23', distance: 3.1, unit: 'mi', time: '24:15', pace: '7:49/mi' },
];

export const workoutLog: WorkoutEntry[] = [
  { date: '2026-04-24', type: 'Upper — Push', notes: 'Bench 4×5 @ 215, OHP 3×8 @ 145, Incline DB' },
  { date: '2026-04-22', type: 'Lower — Pull', notes: 'Deadlift 3×3 @ 385, RDL 3×8, Leg Curl' },
  { date: '2026-04-20', type: 'Cardio', notes: '5K run — 24:30' },
  { date: '2026-04-18', type: 'Upper — Pull', notes: 'Weighted pull-ups 4×5, Rows 4×8, Face pulls' },
  { date: '2026-04-16', type: 'Lower — Squat', notes: 'Squat 4×4 @ 295, Leg Press 3×10, Lunges' },
  { date: '2026-04-14', type: 'Rest / Mobility', notes: 'Foam rolling, hip flexor work' },
  { date: '2026-04-13', type: 'Cardio', notes: '5 mile run — 42:10' },
];
