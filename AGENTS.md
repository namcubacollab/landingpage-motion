# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Roadster project decisions
- Selected concept: 'Bên trong cỗ máy điều khiển lực'. The user authorized a complete ambitious implementation on 19/10/2026.
- Preserve the sibling vcar-story project. This is a separate editorial prototype.
- Use official 2026 redesigned white Roadster imagery. Label generated cutaway renders and all physics diagrams as illustrative.
- Keep actual vehicle claims distinct from illustrative controls. Never imply all configurations fly.
- Source visual target: design/hero-reference.png. Finish mobile, keyboard and reduced-motion behavior before handoff.
