# Future Coding Task Widget

A small test. For details see 'docs/Coding Interview Task - Widget.pdf'

### Running (Dev)
To build and run the development server:
```
pnpm run dev
```

Then in a browser (the url shown by vite):
```
http://localhost:5173/
```

### Building (Prod)
```
pnpm run build --base=/widget/
```
This adds the base 'widget' to urls, so assets can be found using an absolute path.

```
http://my-server.local/widget
```

### Testing (Integration)
Tests are written using Vitest & React Testing Library.

To run the unit & integration tests:
```
pnpm test
```

### Testing (End-to-End)

Installed with:
```
%% pnpm create playwright
✔ Where to put your end-to-end tests? · test/playwright
✔ Add a GitHub Actions workflow? (Y/n) · true
✔ Install Playwright browsers (can be done manually via 'pnpm exec playwright install')? (Y/n) · true

Inside that directory, you can run several commands:

  pnpm exec playwright test
    Runs the end-to-end tests.

  pnpm exec playwright test --ui
    Starts the interactive UI mode.

  pnpm exec playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  pnpm exec playwright test example
    Runs the tests in a specific file.

  pnpm exec playwright test --debug
    Runs the tests in debug mode.

  pnpm exec playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    pnpm exec playwright test

And check out the following files:
  - ./test/playwright/example.spec.ts - Example end-to-end test
  - ./playwright.config.ts - Playwright Test configuration
```
