# Islamic Handbook (Learn Deen)

A beautiful, interactive, and responsive web application designed to be your simple, Sunnah-based guide to Islam. Built with modern web technologies, it features a handwritten "paper" aesthetic to make learning feel personal and engaging.

![Project Preview](https://via.placeholder.com/800x400?text=Islamic+Handbook+Preview)

## 🌟 Features

- **18 Comprehensive Topics**: Covering everything from the Pillars of Islam to Daily Duas and Hajj.
- **Dynamic Themes**: 
  - ☀️ **Light Mode**: Clean, day-time reading.
  - 🌙 **Dark Mode**: Premium slate aesthetic for night reading.
  - 📜 **Sepia Mode**: Warm, old-book feel for comfort.
- **Responsive Design**: Fluid layouts that look great on Mobiles, Tablets, and Desktops (up to 4K).
- **Interactive Elements**: "Doodle" cards with smooth hover animations.
- **Fast Performance**: Built as a Single Page Application (SPA) for instant navigation.

## 🛠 Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Deployment**: GitHub Pages (via GitHub Actions)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/learndeen/learndeen.github.io.git
   cd learndeen.github.io
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist/` directory.

## 🌍 Deployment

This project is configured to **automatically deploy** to GitHub Pages using GitHub Actions.

1. Push changes to the `main` or `dev_rameez24Dec25responsive` branch.
2. The Action will automatically build and deploy the app.
3. Your site will be live at: `https://[username].github.io/learndeen.github.io/`

## 📁 Project Structure

```
/src
  /assets        # Static assets (images, fonts)
  /components    # Reusable UI components (ThemeSwitcher, ScrollToTop)
  /context       # React Context (ThemeProvider)
  /data          # Static data (Topics list)
  /pages         # Page components (Home, HajjUmrah, TopicPage)
  App.jsx        # Main App component & Routes
  index.css      # Global styles & Tailwind imports
  main.jsx       # Entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

*Verified content based on Qur'an and Sunnah.*
