# Netlify setup for Auto Lab Solutions

## Import from GitHub

1. Netlify → Add new project → Import an existing project.
2. Choose GitHub.
3. Select this repository.
4. Use these build settings:

```text
Build command: vite build
Publish directory: dist
```

The repo includes `netlify.toml` with the same settings.

## Required environment

Node 22 is recommended. The `netlify.toml` file pins this:

```toml
[build.environment]
NODE_VERSION = "22"
```

## Dependency note

Use npm for this repo. The `package-lock.json` was regenerated so clean installs do not fail from a stale lockfile.

## After deploy

1. Open the temporary `.netlify.app` URL.
2. Test the phone buttons on mobile.
3. Submit the callback form and confirm Netlify receives it under Site → Forms.
4. Only then attach the final domain.
