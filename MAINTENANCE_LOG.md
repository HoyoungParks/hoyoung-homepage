# Homepage Maintenance Log

This file records consequential maintenance decisions and completed work. Routine typo fixes may remain documented by Git history alone.

## 2026-08-23 — Management handoff and repository audit

### Confirmed state

- The canonical working directory is `/Users/hoyoungpark/Library/CloudStorage/Dropbox/openclaw_work/hoyoung-homepage`.
- The canonical remote is `https://github.com/HoyoungParks/hoyoung-homepage.git`.
- The deployment target is GitHub Pages at <https://hoyoungparks.github.io/hoyoung-homepage/>, deployed from the `main` branch and repository root.
- Local `main`, remote `main`, and the deployed site were checked. Local and remote both pointed to commit `035edee` (`Refine education section copy`), and the deployed URL returned HTTP 200.
- The working tree was clean at the start of the audit; there were no uncommitted or unpushed homepage changes.
- No GitHub Actions workflow, custom domain (`CNAME`), Vercel, or Netlify configuration is present. Deployment therefore relies on GitHub Pages branch publishing configured in the GitHub repository settings.

### Existing content and recent work reviewed

- The site is a static single-page academic homepage built from `index.html`, `styles.css`, and `script.js`, with images and the CV in `assets/`.
- Main sections: profile/about, education, highlights, news, research, funding, publications and manuscripts, presentations, students and alumni, teaching, and contact.
- Recent commits added four submitted manuscripts, corrected CGM and semiparametric manuscript authorship, added first/corresponding-author markers, and refined the education text.
- Publication notation follows `\u2020` for first author and `*` for corresponding author, as also documented in `HOMEPAGE_UPDATE_MANUAL_KO.md`.

### Maintenance decisions

- Use this repository, not the parent `openclaw_work` directory, as the scope of all homepage Git operations.
- Preserve `main` as the publishing branch unless the deployment configuration is deliberately changed.
- Record major content, structure, deployment, and maintenance-policy decisions in this file; use commit history for exact diffs.
- Before publishing, check the working tree, validate HTML, preview locally when visual behavior changes, and verify the public Pages URL after push.
- Do not commit credentials, access tokens, or private contact information.

## 2026-08-23 — EcoSta 2026 student presentation

- Added Chaewon Song's poster presentation at the 9th International Conference on Econometrics and Statistics (EcoSta 2026), hosted by Ryukoku University in Kyoto, Japan, August 8–10, 2026.
- Recorded the presentation in both `News` and `Student Presentations`, retaining the same title used for her earlier Korean Statistical Society presentation: “Sharpening Variance Estimation: An Empirical Bayes Approach under Mean-Variance Dependence.”

## 2026-08-23 — Chaewon Song alumni update

- Recorded Chaewon Song's August 2026 M.S. graduation in `News`.
- Moved her profile from `M.S. Students` to `Alumni`, preserving her study period, thesis title, and profile link.

## 2026-11-20 — GitHub authentication migration

- Replaced expiring HTTPS personal-access-token authentication with a repository-scoped, write-enabled GitHub deploy key for `hoyoung-homepage`.
- The repository remote now uses SSH, avoiding macOS Keychain limitations in Tailscale SSH sessions and recurring PAT renewal.
- Verified both repository read access and write authorization with `git ls-remote` and a dry-run push. No private key or token is stored in this repository.
