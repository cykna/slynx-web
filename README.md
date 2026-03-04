## Slynx Web

Slynx Web is the official web interface and documentation site for the **Slynx** language.  
It is built with Next.js and serves as the main entry point for users and contributors.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Runtime / Package Manager**: Bun (recommended) or Node.js
- **UI**: React 19, CSS Modules

---

## Getting Started

### Prerequisites

- Git
- Bun (recommended) – see `https://bun.sh`
- Or Node.js (LTS) + npm / pnpm / yarn

### Install dependencies

From the project root:

```bash
bun install
# or
npm install
```

### Run the development server

```bash
bun dev
# or
npm run dev
```

Then open `http://localhost:3000` in your browser.  
If port `3000` is already in use, Next.js may start on another port (e.g. `3001`); check the terminal output.

### Linting

```bash
bun lint
# or
npm run lint
```

### Production build

```bash
bun run build
# or
npm run build
```

---

## Project Structure (high level)

- `src/app` – Next.js App Router pages, layouts and routes
- `src/app/components` – shared UI components
- `src/app/docs` – documentation structure and MDX content
- `public` – static assets (images, icons, etc.)

---

## Contributing

We welcome contributions of all kinds: bug fixes, documentation, design tweaks, new features and refactors.

### How to contribute

1. **Fork** the repository on GitHub:
   - `https://github.com/Slynx-Language/slynx-web`
2. **Clone your fork**:
   ```bash
   git clone https://github.com/<your-username>/slynx-web.git
   cd slynx-web
   ```
3. (Optional) **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/Slynx-Language/slynx-web.git
   git fetch upstream
   ```
4. **Update your local base branch** before starting any work:
   ```bash
   git checkout main
   git pull upstream main   # or origin main, depending on your setup
   ```
5. **Create a topic branch** from the appropriate base (usually `development`):
   ```bash
   git checkout -b feat/my-feature
   # or
   git checkout -b fix/bug-description
   ```
6. Make your changes and run:
   ```bash
   bun lint
   bun dev   # to manually verify in the browser
   ```
7. **Commit** with a clear, English message:
   ```bash
   git add .
   git commit -m "feat: short, clear description"
   ```
8. **Push your branch**:
   ```bash
   git push origin feat/my-feature
   ```
9. **Open a Pull Request** on GitHub targeting the appropriate base branch (usually `development`).

For more detail (branch naming, workflow, expectations), see the **Git Workflow** section below.

---

## Git Workflow (GitFlow)

We follow a GitFlow-inspired workflow. The idea is to keep the main branches stable and use short‑lived branches for each task.

### Long‑lived branches

- **`main`** – production-ready code.  
  - Only receives stable, tested changes via Pull Requests.
- **`test`** – integration and broader testing.  
  - New features and fixes are validated here before moving forward.
- **`development`** – preparation for release.  
  - Final polishing, small fixes, versioning and changelog work happen here.

> Do **not** commit directly to these branches. Always use feature/fix/etc. branches and open a Pull Request.

### Short‑lived branches

Create a new branch for each task and delete it after the PR is merged.

- **`feat/<name>`** – new features  
  - Base: `development`  
  - Example: `feat/landing-page`, `feat/theme-toggle`

- **`refactor/<name>`** – internal refactors without changing external behavior  
  - Base: `development`  
  - Example: `refactor/header-layout`

- **`fix/<name>`** – bug fixes  
  - Base: usually `development`  
  - Example: `fix/broken-hero-layout`

- **`docs/<topic>`** – documentation-only updates  
  - Base: `development` or `main`, depending on context  
  - Example: `docs/contributing-guide`

- **`chore/<task>`** – maintenance tasks (configs, CI/CD, tooling, deps)  
  - Base: `development`  
  - Example: `chore/update-deps`

### Example flow for a new feature

```bash
# Update local base
git checkout development
git pull upstream development

# Create feature branch
git checkout -b feat/my-new-feature

# Work on your changes...

git add .
git commit -m "feat: add my new feature"
git push origin feat/my-new-feature
```

Then open a Pull Request to **`development`**.

---

## Commit Message Style

We follow the conventions described at:  
`https://github.com/iuricode/padroes-de-commits`

Examples:

- `feat: add hero section`
- `fix: correct header alignment`
- `docs: update contributing guide`
- `refactor: simplify page layout`
- `chore: update dependencies`

Guidelines:

- Use **English** for all commit messages.
- One commit per logical change/feature whenever possible.

---

## Reporting Bugs & Suggesting Features

- Use **GitHub Issues**.
- For bugs, include:
  - Clear description of the problem
  - Steps to reproduce (and, if possible, screenshots)
  - Expected vs actual behavior
  - Environment (OS, browser, Node/Bun version)
- For feature requests, include:
  - What you propose
  - Why it is useful (use cases)
  - Examples of how it might be used in the UI or docs

---

## Code of Conduct

Please be respectful, inclusive, and constructive in all interactions.  
We want Slynx Web to be a welcoming place for newcomers and experienced contributors alike.

