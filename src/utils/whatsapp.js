import { gym } from '../data/gym'
export const waLink = (text = 'Hi! I would like to know about membership at The Wellness Club Gym.') =>
  `https://wa.me/${gym.phone}?text=${encodeURIComponent(text)}`
