# Jakson Te — Personal Engineering Notebook Site

## Quick Start

```bash
# Install dependencies
npm install

# Run locally (opens at http://localhost:5173)
npm run dev
```

## Editing Your Content

All your website text, projects, thoughts, and entries live in one file:

```
src/data/content.js
```

Open it and edit anything — the site will update automatically while running locally.

### Adding a photo
1. Put your photo in `public/images/` (e.g. `public/images/photo.jpg`)
2. In `content.js`, change `avatar: null` to `avatar: "/jakson-site/images/photo.jpg"`

### Adding a GIF or image to a Field Log
In `FieldLogs.jsx`, you can add an `<img>` tag inside any log entry. Or add an `image` field to the fieldLogs data in content.js and render it in the component.

---

## Deploying to GitHub Pages

### First time setup:
1. Create a repo on GitHub named `jakson-site`
2. In `package.json`, change `YOUR-GITHUB-USERNAME` to your actual GitHub username
3. In `vite.config.js`, make sure `base` matches `/your-repo-name/`
4. Push your code:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/jakson-site.git
   git push -u origin main
   ```
5. Deploy:
   ```bash
   npm run deploy
   ```

Your site will be live at: `https://YOUR-USERNAME.github.io/jakson-site`

### Future updates:
After editing `content.js` or any component, just run:
```bash
npm run deploy
```

---

## File Structure

```
src/
  data/
    content.js        ← EDIT THIS to update your site content
  pages/
    Home.jsx          ← Home page
    Current.jsx       ← Current page
    Lab.jsx           ← Lab Notes page
    Garden.jsx        ← Thought Garden page
    Atlas.jsx         ← Atlas page
    Index.jsx         ← Index/CV page
    FieldLogs.jsx     ← Field Logs page
  components/
    UI.jsx            ← Shared components (Card, Label, etc.)
  App.jsx             ← Navigation & routing
  main.jsx            ← Entry point
public/
  images/             ← Put your photos/GIFs here
```
