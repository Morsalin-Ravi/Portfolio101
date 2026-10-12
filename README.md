# Morsalin Ravi — Video Editor & Motion Designer Portfolio

A premium, minimalist portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Designed for easy portfolio management through a single JSON file.

## ✨ Features

- **Apple-inspired design** — Clean, minimalist aesthetic with glass navigation
- **JSON-driven portfolio** — Manage all projects from a single `projects.json` file
- **No backend required** — Fully static, zero infrastructure cost
- **Video modal** — YouTube & Vimeo embed support with click-to-play
- **Dynamic filters** — Category filters auto-generated from project data
- **Responsive** — Works beautifully on mobile, tablet, and desktop
- **Accessible** — Keyboard navigation, screen reader support, reduced motion
- **SEO optimized** — Meta tags, Open Graph, semantic HTML
- **Free hosting** — Deploy on GitHub Pages with GitHub Actions

---

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📦 How to Update Your Portfolio

### To Add a New Video/Project

1. Open your GitHub repository
2. Navigate to `src/data/projects.json`
3. Click the **Edit** (pencil) button
4. Copy an existing project object (everything between `{` and `}`)
5. Paste it after the last project (before the closing `]`)
6. Add a comma after the previous project's closing `}`
7. Replace the values with your new project details:
   - `id`: A unique identifier (e.g., `"project-010"`)
   - `title`: Your project title
   - `category`: The category (must match an existing category or create a new one)
   - `description`: A short description of the project
   - `thumbnail`: URL to a thumbnail image (use any image hosting service)
   - `videoUrl`: YouTube or Vimeo URL
   - `client`: Client name (leave as `""` if none)
   - `tools`: Array of tools used
   - `featured`: `true` or `false`
8. Click **Commit changes**
9. Wait 1-2 minutes for GitHub Actions to deploy
10. Refresh your live website

**Example of adding a new project:**

```json
{
  "id": "project-010",
  "title": "My New Project",
  "category": "Short-Form Reels",
  "description": "A description of my new project.",
  "thumbnail": "https://example.com/my-thumbnail.jpg",
  "videoUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  "client": "Client Name",
  "tools": ["Premiere Pro", "After Effects"],
  "featured": false
}
```

### To Delete a Video/Project

1. Open `src/data/projects.json`
2. Find the project object you want to remove
3. Delete the entire object including its `{` and `}`
4. Make sure commas between remaining objects are correct
5. Commit changes
6. Wait for deployment

### To Change a Thumbnail or Video URL

1. Open `src/data/projects.json`
2. Find the project you want to update
3. Edit the `thumbnail` or `videoUrl` field
4. Commit changes

### To Create a New Category

Simply use a new category name in any project's `category` field. The filter buttons will automatically include the new category. For example:

```json
{
  "id": "project-011",
  "title": "My Documentary",
  "category": "Documentaries",
  ...
}
```

The "Documentaries" filter will appear automatically.

### To Mark a Project as Featured

Set `"featured": true` in the project object. The first featured project will appear in the spotlight section.

### To Replace the Portrait

The portrait is loaded from a URL in the Hero and About components. To use your own:
1. Upload your portrait to an image hosting service (e.g., Imgur, Cloudinary, or GitHub)
2. Edit `src/components/Hero.tsx` and `src/components/About.tsx`
3. Replace the `src` URL in the `<img>` tag

### To Update Social Links

Edit `src/data/siteConfig.json` → `social` section:

```json
{
  "social": {
    "instagram": "https://instagram.com/yourusername",
    "facebook": "https://facebook.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "youtube": "https://youtube.com/@yourusername",
    "behance": "https://behance.net/yourusername"
  }
}
```

### To Update Your Email

Edit `src/data/siteConfig.json` → `email` field:

```json
{
  "email": "your-real-email@example.com"
}
```

### To Update Testimonials

Edit `src/data/testimonials.json`. Each testimonial needs:
- `id`: Unique identifier
- `name`: Client name
- `role`: Client role/company
- `content`: The review text
- `photo`: URL to profile photo (or `""` for default avatar)

---

## 🌐 GitHub Pages Deployment Setup

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button → **New repository**
3. Name it (e.g., `morsalin-ravi-portfolio`)
4. Keep it **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to `main`

### Step 4: Find Your Live URL

After the first deployment completes (1-2 minutes):
- Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- You can also find the URL in **Settings** → **Pages**

### Important: Base Path for GitHub Pages

If your site doesn't load assets correctly, you may need to set the base path. Edit `vite.config.js` and add:

```js
export default defineConfig({
  base: '/YOUR_REPO_NAME/',
  plugins: [react(), tailwindcss()],
  // ...
});
```

Replace `YOUR_REPO_NAME` with your actual repository name.

---

## 🔧 Troubleshooting

### "Site shows blank page"
- Check that the base path in `vite.config.js` matches your repo name
- Check the browser console for errors

### "Deployment failed"
- Make sure your `projects.json` is valid JSON (no trailing commas, proper quotes)
- Check the GitHub Actions tab for error details
- Use a JSON validator like [jsonlint.com](https://jsonlint.com) to check your file

### "Images not loading"
- Make sure thumbnail URLs are publicly accessible
- Use HTTPS URLs
- Try uploading images to Imgur, Cloudinary, or your GitHub repo's `public/` folder

### "Video doesn't play in modal"
- Make sure the video URL is a valid YouTube or Vimeo URL
- Supported formats:
  - `https://www.youtube.com/watch?v=VIDEO_ID`
  - `https://youtu.be/VIDEO_ID`
  - `https://www.youtube.com/shorts/VIDEO_ID`
  - `https://vimeo.com/VIDEO_ID`

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/                      # Static assets (favicons, etc.)
├── src/
│   ├── components/              # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ExpertiseStrip.tsx
│   │   ├── FeaturedWork.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   ├── Process.tsx
│   │   ├── Reviews.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/                    # ✏️ EDITABLE CONTENT
│   │   ├── projects.json        # Portfolio projects
│   │   ├── testimonials.json    # Client testimonials
│   │   └── siteConfig.json      # Site settings & links
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Styles & animations
├── index.html                   # HTML template
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| Background | `#F7F7F5` |
| Cards | `#FFFFFF` |
| Main Text | `#111111` |
| Secondary Text | `#6B6B6B` |
| Borders | `#E8E8E8` |
| Accent | `#635BFF` |
| Font | Inter |

---

## 📝 License

This project is built for Morsalin Ravi. Feel free to use the structure and design as inspiration for your own portfolio.

---

## 🙏 Built With

- [React](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
