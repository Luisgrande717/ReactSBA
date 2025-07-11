# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# ReactSBA

# 🎮 Esports Café Companion App

A pixel-and-botanical-themed front-end application designed to showcase upcoming gaming events, curated tea pairings, and a vibrant community experience. Built with React and styled to evoke both nostalgic arcade energy and calming café warmth.

---

## 🧪 Technologies Used

- **React** + **Vite** – fast front-end SPA setup
- **React Router DOM** – for client-side routing
- **CSS Modules** – component-scoped styling
- **JavaScript (ES6+)** – functional components and hooks
- **OMDB API** – pulls live movie data for themed events
- **Netlify** – hosted and deployed

---

## 🌿 Pixel ↔ Botanical Theme System

Users can toggle between two immersive UI themes:

- 🕹️ **Pixel Mode**: neon borders, arcade-style font, retro black backgrounds
- 🍵 **Botanical Mode**: soothing greens, earth-tone accents, elegant typography

Toggle implemented with DOM class manipulation and scoped modular styles.

---

## 🔍 Features

- ✅ **Theme toggle button**: swaps global body class
- ✅ **Responsive navbar**: adjusts styling per theme
- ✅ **Modular component styling**: EventCard, MenuItem, ProfileCard
- ✅ **External API integration**: OMDB fetches live film info for each themed event
- ✅ **Dynamic rendering**: movie plots, genres, and IMDb scores appear with poster image
- ✅ **Mock data rendering**: tea blends and RSVP user info via components

---

- Visit http://localhost:5173 in your browser
💡 You'll need your own OMDB API key. Add it to src/api/omdb.js

Live SITE
[View the live app on Netlify](https://6870d93487e311dac9e592f8--vocal-souffle-6ce998.netlify.app/)

📝 Approach
This project blends personal storytelling and full-stack principles:
- 📦 Theme toggle is handled via native DOM classes with modular styling
- 🧠 Styling is component-scoped to avoid global conflicts
- 🎬 OMDB integration adds dynamic flair to event cards
- 🍵 Pixel + botanical pairing reflects café-meets-gaming ethos

🧩 Future Stretch Goals
- Add YouTube trailer integration for featured movies
- Save RSVP state using localStorage
- Build backend support with Express and MongoDB
- Design themed landing hero and transition animations

❗ Unsolved Problems
- Movie fetch fails silently on invalid titles
- Theme state isn't saved between sessions

👨‍💻 Author
Luis Angel Grande
Recent graduate in Full Stack Software Engineering
Crafted this app to explore immersive UI styling, practical component structure, and storytelling through technology



