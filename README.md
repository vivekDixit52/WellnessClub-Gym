# The Wellness Club Gym – Demo Website (React + Vite)

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```
## Customise
- `src/data/gym.js` – gym name, **WhatsApp number**, hours, plans, trainers, facilities
- `src/components/Gallery.jsx` – swap gradient tiles for real photos (`/public/images`)
- `src/components/EnquiryForm.jsx` – currently sends the enquiry to WhatsApp; connect a backend for production

## Structure
```
src/
  components/  Navbar, Hero, Programs, Plans, Trainers, Facilities, Gallery, EnquiryForm, Footer, WhatsAppButton, Section
  data/        gym.js (all content)
  utils/       whatsapp.js
  styles/      index.css (responsive: mobile ≤720px, tablet ≤1024px, laptop)
```
Deploy free on Vercel/Netlify.
