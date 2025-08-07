# Mini Website

A tiny, production-ready static website you can deploy in minutes via GitHub Pages.

## Local development

Open `index.html` in your browser.

## Deploy (GitHub Pages + Actions)

This repo includes a GitHub Actions workflow that publishes the site on every push to `main`.

Steps:

1. Ensure you have Git installed and the GitHub CLI (`gh`).
2. From this project directory, run:

```bash
git init -b main
git add .
git commit -m "Initial commit: mini website"
gh repo create mini-website --public --source=. --remote=origin --push
```

The first push triggers the `Deploy static site to Pages` workflow. When it finishes, your site will be live at a URL like:

```
https://<your-gh-username>.github.io/mini-website/
```

## Custom domain (optional)

1. In your GitHub repo, go to Settings → Pages, set a custom domain, and save.
2. In your DNS provider, add a CNAME record pointing your domain to `<your-gh-username>.github.io`.


