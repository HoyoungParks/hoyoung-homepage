# Hoyoung Park Homepage

Static personal academic homepage for GitHub Pages, Vercel, Netlify, or any ordinary web host.

## Local preview

```bash
cd hoyoung-homepage
python3 -m http.server 5174
```

Then open <http://localhost:5174>.

## Maintenance

Most content changes are in `index.html`.

- Profile, education, news, grants, publications, students, teaching, and contact sections are each separate `<section>` blocks.
- Visual styling is in `styles.css`.
- Replace the profile photo or CV by putting the new file in `assets/` and updating the matching `src` or `href` in `index.html`.
- After edits, run the local preview command above and check the page in a browser.
- For detailed Korean instructions, see `HOMEPAGE_UPDATE_MANUAL_KO.md`.

Quick checks:

```bash
python3 -m html.parser index.html >/dev/null
curl -I http://localhost:5174
```

## Deploy with GitHub Pages

Important: make a repository from this `hoyoung-homepage` folder only. Do not push the whole `openclaw_work` workspace.

1. Create an empty GitHub repository, for example `HoyoungParks/hoyoung-homepage`.
2. In this folder, initialize git and commit the site:

```bash
cd /Users/hoyoungpark/Library/CloudStorage/Dropbox/openclaw_work/hoyoung-homepage
git init
git add index.html styles.css script.js README.md assets
git commit -m "Build personal academic homepage"
```

3. Connect the GitHub remote and push:

```bash
git branch -M main
git remote add origin git@github.com:HoyoungParks/hoyoung-homepage.git
git push -u origin main
```

4. In GitHub, open Settings > Pages.
5. Set Source to `Deploy from a branch`, Branch to `main`, and Folder to `/root`.

Future updates:

```bash
git add index.html styles.css script.js README.md assets
git commit -m "Update homepage content"
git push
```

## Files

- `index.html`: page content and section structure
- `styles.css`: responsive design system
- `script.js`: header state and icons
- `assets/research-hero.png`: generated hero image
- `assets/CV_Hoyoung_Park.pdf`: attached CV copy
- `HOMEPAGE_UPDATE_MANUAL_KO.md`: Korean homepage update manual
