# End-to-end deployment guide — WLGA Istanbul 2026 POC

This guide takes you from the code on your machine to a live URL. The app is a **frontend-only** (Vite + React) static site.

---

## Step 0: Prepare your project

### 0.1 Check the project builds

Open a terminal in your project folder and run:

```bash
cd wlga-poc/frontend
npm install
npm run build
```

You should see `✓ built in ...` at the end. If there are errors, fix them before deploying.

### 0.2 Put the project under Git (if not already)

From the **root folder that contains `wlga-poc`** (e.g. `istanbul` or your repo root):

```bash
git init
git add .
git commit -m "WLGA Istanbul 2026 POC - ready to deploy"
```

### 0.3 Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in.
2. Click **+** (top right) → **New repository**.
3. Name it (e.g. `wlga-istanbul-2026`), leave it **Public**, do **not** add README or .gitignore.
4. Click **Create repository**.

### 0.4 Push your code to GitHub

In the same terminal (from your repo root):

```bash
git remote add origin https://github.com/YOUR_USERNAME/wlga-istanbul-2026.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `wlga-istanbul-2026` with your GitHub username and repo name.  
If GitHub asks for auth, use a **Personal Access Token** (Settings → Developer settings → Personal access tokens) as the password.

---

## Step 1: Choose where to deploy

You can use **Vercel** or **Render**. Both are free for this kind of static site.

| Platform | Best for |
|----------|----------|
| **Vercel** | Easiest; great for React/Vite; instant previews per branch. |
| **Render** | Simple; good free tier; optional Blueprint (YAML) deploy. |

Follow **either** Path A (Vercel) or Path B (Render) below.

---

## Path A: Deploy on Vercel (recommended)

### A.1 Sign up / log in

1. Go to [vercel.com](https://vercel.com).
2. Click **Sign Up** or **Log In**.
3. Choose **Continue with GitHub** and authorize Vercel.

### A.2 Import the project

1. On the Vercel dashboard, click **Add New…** → **Project**.
2. You should see your GitHub repos. Find **wlga-istanbul-2026** (or your repo name) and click **Import** next to it.
3. If you don’t see it, click **Import Git Repository**, paste your repo URL, and click **Import**.

### A.3 Configure the project (important)

Before clicking Deploy, set these:

1. **Root Directory**  
   Click **Edit** next to “Root Directory”.  
   Enter: **`wlga-poc/frontend`**  
   (This is the folder that contains `package.json` and `vercel.json`.)

2. **Framework Preset**  
   Should show **Vite**. If not, select **Vite**.

3. **Build and Output Settings** (usually auto-filled):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment variables (optional)**  
   If you have a backend API later, add:
   - **Key:** `VITE_API_BASE_URL` → **Value:** `https://your-api-url.com`
   - **Key:** `VITE_WEBSOCKET_URL` → **Value:** `https://your-websocket-url.com`  
   You can skip this for the POC.

### A.4 Deploy

1. Click **Deploy**.
2. Wait for the build to finish (usually 1–2 minutes).
3. When it’s done, click **Visit** or the URL shown (e.g. `https://wlga-istanbul-2026.vercel.app`).

Your app is live. Routes like `/`, `/innovation-tracker`, `/un-advocacy`, `/matchmaking` will work because `vercel.json` sends all paths to `index.html`.

### A.5 Later: redeploy on push

- Every push to `main` will trigger a new production deploy.
- Other branches get preview URLs automatically.

---

## Path B: Deploy on Render

### B.1 Sign up / log in

1. Go to [render.com](https://render.com).
2. Click **Get Started** or **Log In**.
3. Choose **Sign up with GitHub** and authorize Render.

### B.2 Create a static site

1. In the Render dashboard, click **New +** → **Static Site**.
2. Under **Connect a repository**, find **wlga-istanbul-2026** (or your repo) and click **Connect**.  
   If it’s not listed, click **Configure account** and connect the right GitHub account/repo.

### B.3 Configure the static site

Fill in the form exactly:

| Field | What to enter |
|-------|----------------|
| **Name** | `wlga-istanbul-2026` (or any name you like) |
| **Branch** | `main` |
| **Root Directory** | `wlga-poc/frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### B.4 Add SPA rewrite (so all routes work)

1. Scroll to **Advanced** and expand it.
2. Find **Redirects/Rewrites** (or **Rewrite rules**).
3. Add a **Rewrite** (not Redirect):
   - **Source path (or Source):** `/*`
   - **Destination path (or Destination):** `/index.html`  
   (This makes `/innovation-tracker`, `/un-advocacy`, etc. load the app.)

### B.5 Environment variables (optional)

If you add a backend later:

- **Key:** `VITE_API_BASE_URL` → **Value:** your API URL  
- **Key:** `VITE_WEBSOCKET_URL` → **Value:** your WebSocket URL  

You can skip this for the POC.

### B.6 Deploy

1. Click **Create Static Site**.
2. Wait for the first build (a few minutes).
3. When it’s done, open the URL shown (e.g. `https://wlga-istanbul-2026.onrender.com`).

Your app is live. Every push to `main` will trigger a new deploy.

---

## Step 2: Verify the deployment

1. Open your live URL in a browser.
2. You should see the WLGA Istanbul 2026 app (dashboard or home).
3. Use the sidebar to open:
   - **rLPG Tracker** → `/innovation-tracker`
   - **UN Advocacy** → `/un-advocacy`
   - **AI Matchmaking** → `/matchmaking`
4. If any of these show a blank page or 404, the SPA rewrite is wrong — double-check **Path A.3** (Vercel root directory) or **Path B.4** (Render rewrite).

---

## Step 3 (optional): Custom domain

### Vercel

1. Open your project → **Settings** → **Domains**.
2. Add your domain (e.g. `app.yourcompany.com`).
3. Follow the instructions to add the DNS records Vercel shows.

### Render

1. Open your static site → **Settings** → **Custom Domains**.
2. Add your domain and add the DNS records Render shows.

---

## Quick reference

| What | Where |
|------|--------|
| Frontend code | `wlga-poc/frontend/` |
| Build output | `wlga-poc/frontend/dist/` |
| Vercel config (SPA + build) | `wlga-poc/frontend/vercel.json` |
| Render Blueprint (optional) | `wlga-poc/render.yaml` |

### Using Render Blueprint instead of the form

1. In Render: **New +** → **Blueprint**.
2. Connect the same repo.
3. Render will read `wlga-poc/render.yaml` and create the static site with root dir, build command, publish directory, and SPA rewrite already set. You can then adjust **Root Directory** in the Blueprint if your repo layout is different (e.g. if the repo root is `wlga-poc`, use `frontend` as `rootDir`).

---

## Troubleshooting

| Problem | What to do |
|--------|------------|
| Build fails on Vercel/Render | Run `npm run build` inside `wlga-poc/frontend` locally and fix any errors. Ensure **Root Directory** is `wlga-poc/frontend`. |
| 404 on `/innovation-tracker` or other routes | Add the SPA rewrite: all paths → `/index.html` (Vercel uses `vercel.json` automatically when root is `wlga-poc/frontend`). On Render, add the rewrite in **Redirects/Rewrites**. |
| Blank page after deploy | Open the browser dev tools (F12) → Console. Check for failed script loads; usually base path or root directory is wrong. |
| “Root Directory not found” | Your repo root might not contain `wlga-poc`. If your repo root is already `wlga-poc`, set Root Directory to **`frontend`** instead of `wlga-poc/frontend`. |

You’re done. The POC runs without a backend; when you add an API, set `VITE_API_BASE_URL` and `VITE_WEBSOCKET_URL` and redeploy.
