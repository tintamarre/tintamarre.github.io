# Tintamarre

VitePress blog for `www.tintamarre.be`.

## Requirements

- Node.js 20 or newer
- npm

Install dependencies with:

```bash
make install
```

## Development

```bash
make dev
```

This starts VitePress at `http://localhost:5173/`.

## Build

```bash
make build
```

Preview the production build locally with:

```bash
make preview
```

## Deployment

Deployment is handled by [`.github/workflows/deploy-docs.yml`](.github/workflows/deploy-docs.yml).

The workflow runs automatically on every push to `master`:

1. Checks out the repository.
2. Installs dependencies with `npm ci`.
3. Builds the site with `npm run build`.
4. Adds `src/.vitepress/dist/.nojekyll`.
5. Copies the root `CNAME` file into the generated site.
6. Publishes `src/.vitepress/dist` to the `gh-pages` branch.

For GitHub Pages, the repository should be configured to serve from the `gh-pages` branch. The custom domain is stored in `CNAME` and copied during deployment.

To create the same deployable artifact locally:

```bash
make deploy
```

## Common Commands

```bash
make help
make install
make dev
make build
make preview
make deploy
make deploy-build
make clean
```
