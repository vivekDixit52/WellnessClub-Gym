// Edit this file to customise the demo for the real gym.
export const gym = {
  name: 'The Wellness Club Gym',
  tagline: 'Train well. Live well.',
  area: 'Sector 23, Gurugram',
  address: 'The Wellness Club Gym, Sector 23, Gurugram, Haryana',
  phone: '91XXXXXXXXXX', // country code + number, no + or spaces
  email: 'hello@wellnessclubgym.in',
  hours: [['Mon – Sat', '5:30 AM – 10:30 PM'], ['Sunday', '7:00 AM – 1:00 PM']],
  mapQuery: 'The Wellness Club Gym Sector 23 Gurugram',
}

// Sample pricing (₹) – replace with the gym's real rates.
export const plans = [
  { name: 'Starter', blurb: 'Gym floor access to get going.', price: { 1: 1800, 3: 4800, 12: 14400 }, perks: ['Cardio & strength floor', 'Locker access', 'Free fitness assessment'] },
  { name: 'Complete', featured: true, blurb: 'Most members pick this one.', price: { 1: 2800, 3: 7500, 12: 22000 }, perks: ['Everything in Starter', 'Group classes (Zumba, HIIT, Yoga)', 'Steam & shower', 'Monthly progress check'] },
  { name: 'Coached', blurb: 'A trainer plans and tracks it all.', price: { 1: 5500, 3: 15000, 12: 48000 }, perks: ['Everything in Complete', 'Personal training sessions', 'Custom diet plan', 'Weekly check-ins'] },
]
export const durations = [{ id: 1, label: 'Monthly' }, { id: 3, label: 'Quarterly' }, { id: 12, label: 'Yearly' }]

export const trainers = [
  { name: 'Rohit Sharma', role: 'Head Coach · Strength', exp: '9 yrs', tags: ['Powerlifting', 'Muscle gain'] },
  { name: 'Neha Verma', role: 'Yoga & Mobility', exp: '7 yrs', tags: ['Yoga', 'Recovery'] },
  { name: 'Aman Chauhan', role: 'Fat-loss & HIIT', exp: '6 yrs', tags: ['HIIT', 'Weight loss'] },
  { name: 'Simran Kaur', role: 'Nutrition & Zumba', exp: '5 yrs', tags: ['Diet plans', 'Zumba'] },
]

export const programs = [
  { title: 'Weight loss', text: 'Cardio, circuits and a diet plan built around your routine.' },
  { title: 'Muscle building', text: 'Progressive strength training with form coaching.' },
  { title: 'Yoga & mobility', text: 'Morning and evening batches for flexibility and stress.' },
  { title: 'Group classes', text: 'Zumba, HIIT and functional training, six days a week.' },
]

export const facilities = ['Air-conditioned floor', 'Free weights & machines', 'Cardio zone', 'Functional area', 'Steam & shower', 'Lockers', 'Parking', 'Drinking water & lounge']
export const gallery = ['Strength floor', 'Cardio zone', 'Functional area', 'Group class studio', 'Free weights', 'Reception & lounge']
