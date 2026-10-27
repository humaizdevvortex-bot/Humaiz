# Humaiz Ur Rehman — Personal Portfolio Website

A premium, production-ready developer portfolio for **Humaiz Ur Rehman** — WordPress Developer & Team Lead | AI-Assisted Web Developer.

Built with **React 19, Vite, TypeScript, Tailwind CSS v4, Lucide Icons, and Motion**. Designed around a dark navy & warm orange glow aesthetic, featuring a verified 170-project database, career timeline, AI vibe-coding capabilities, and Netlify Forms integration.

---

## 🚀 Key Features

- **Split Hero Section**: Features Humaiz's verified portrait, orbiting technology badges (WordPress, Elementor, WooCommerce, Shopify, React/Vite, Google AI Studio), and live rotating title animations.
- **170-Project Verified Inventory**: Powered by centralized structured data (`src/data/projects.ts` & `src/data/projects.js`). Includes:
  - Search by project/client name, industry, and URL.
  - Multi-faceted filters for CMS (WordPress, Shopify, WooCommerce, GoHighLevel, Webflow), Company/Source (DevVortex, Rex Technologies, Eliix Marketing, Freelance, Duologiq), and Industry.
  - Featured projects spotlight showcasing 16 highlighted client websites.
  - Deduplicated clean view (166 unique websites) with audit mode toggle to inspect all 170 database records.
  - Project detail modal with verified live links and graceful handling for internal client projects.
- **Verified Career Journey**: Detailed timeline of Rex Technologies (October 2023 onward: Intern to Junior to Team Lead), DevVortex (October 2024 to Present: WordPress & SEO Architect, mentoring 2 interns), Eliix Marketing, and BS in Computer Science (GCUF, 2022).
- **AI-Assisted Development & Vibe Coding**: Explaining Humaiz's workflow using Google AI Studio, prompt architecture, and rapid prototyping while applying strict human QA and responsive review.
- **5 Specialized Services**: WordPress Development, Elementor Redesign, WooCommerce & Shopify, AI-Assisted Vibe Coding, and White-Label Agency Partnerships.
- **How I Work (5-Step Process & Trust)**: Transparent client workflow from brief to delivery without fabricated claims.
- **Netlify Forms Integration**: Fully configured with static HTML detection in `index.html`, React state handling, form validation, and dev fallback.
- **SEO & Social Cards**: Tailored meta tags, OpenGraph cards, Twitter preview cards, and Schema.org JSON-LD Person/WebSite markup.

---

## 🛠️ Tech Stack

- **Framework**: React 19 (SPA on Vite 8)
- **Styling**: Tailwind CSS v4 with custom dark navy palettes & orange gradients
- **Icons**: Lucide React
- **Animations**: CSS keyframes & Motion
- **Hosting Target**: Netlify (via `netlify.toml` with SPA redirects)

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to Netlify via GitHub

### Step 1: Initialize Git and Push to GitHub

If you haven't pushed to GitHub yet:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "feat: complete Humaiz Ur Rehman developer portfolio with 170 projects"

# Rename branch to main
git branch -M main

# Add your GitHub repository remote (replace with your repo URL)
git remote add origin https://github.com/humaizdevvortex-bot/humaiz-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Netlify

1. Log in to your [Netlify Dashboard](https://app.netlify.com/).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select **GitHub** and authorize access to your repository (`humaiz-portfolio`).
4. Configure the build settings (these match `netlify.toml` automatically):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**. Netlify will automatically build and assign a production URL.

### Step 3: Netlify Forms Detection

The project includes the required hidden HTML form placeholder in `index.html`:
```html
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <input type="text" name="projectType" />
  <input type="text" name="budget" />
  <textarea name="message"></textarea>
</form>
```
When Netlify builds your site, it registers the form under your Netlify Site Dashboard → **Forms** tab. All form submissions will appear there and can send instant email notifications to your inbox.

---

## 📁 Project Structure

```
├── public/
│   ├── assets/aistudio/
│   │   └── hu_5c6e75ff.jpg        # Humaiz's professional portrait
│   ├── favicon.svg               # Custom developer brand icon
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # SEO sitemap
├── src/
│   ├── components/
│   │   ├── About.tsx              # Career narrative, stats, and CV summary
│   │   ├── AiExperience.tsx       # AI Studio, vibe coding, and QA workflow
│   │   ├── Contact.tsx            # Netlify-ready interactive contact form
│   │   ├── ExperienceTimeline.tsx # Verified career chronology
│   │   ├── Footer.tsx             # Brand links, social profiles, and back-to-top
│   │   ├── Header.tsx             # Sticky navigation and mobile menu
│   │   ├── Hero.tsx               # Split hero, photo, animated roles, badges
│   │   ├── Process.tsx            # 5-step workflow & trust pillars
│   │   ├── ProjectModal.tsx       # Modal for project details & live links
│   │   ├── Projects.tsx           # Searchable 170-project portfolio
│   │   ├── Services.tsx           # 5 specialized service cards
│   │   └── Skills.tsx             # Skill matrix without arbitrary percentages
│   ├── data/
│   │   ├── projects.ts            # Typed 170-entry project database
│   │   ├── projects.js            # JavaScript mirror of project database
│   │   └── socials.ts             # Verified links & personal metadata
│   ├── App.tsx                    # Master layout and page orchestration
│   ├── index.css                  # Tailwind CSS v4 and glow utilities
│   └── main.tsx                   # React 19 entry point
├── index.html                     # HTML5 shell with SEO metadata & Netlify form
├── netlify.toml                   # Netlify redirect and header configuration
├── package.json                   # Dependencies and scripts
└── tsconfig.json                  # TypeScript compiler settings
```

---

## 🔒 Personal Links & Verification

- **GitHub**: [github.com/humaizdevvortex-bot](https://github.com/humaizdevvortex-bot)
- **Netlify Dashboard**: [app.netlify.com/teams/humaizdevvortex-bot/projects](https://app.netlify.com/teams/humaizdevvortex-bot/projects)
- **LinkedIn**: [linkedin.com/in/humaiz-ur-rehman](https://www.linkedin.com/in/humaiz-ur-rehman)
- **Instagram**: [@humaiz_mazi](https://www.instagram.com/humaiz_mazi?obrf=MWNkd3F6em1nbTBnZQ==)
- **Facebook**: [facebook.com/share/1CEeCYr9Nd/](https://www.facebook.com/share/1CEeCYr9Nd/)
- **Direct Email**: [humaiz.devvortex@gmail.com](mailto:humaiz.devvortex@gmail.com)
