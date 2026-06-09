# MyndLab Demo Prototype

Interactive clickable prototype for the MyndLab product flow.

**Live prototype:** https://pathak-r.github.io/mindlabdemoprototype/

## Development

```bash
pnpm install
PORT=8081 BASE_PATH=/__mockup pnpm --filter @workspace/mockup-sandbox run dev
```

Individual screen previews are available at `/__mockup/preview/myndlab/<ScreenName>` during development.

## Production build

```bash
pnpm run build:prototype
```

Output is written to `artifacts/mockup-sandbox/dist/`.
