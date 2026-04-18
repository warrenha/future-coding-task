# Future Coding Task | Minesweeper

A coding test that shows a minesweeper grid.

For details see 'docs/Minesweeper-task.pdf'

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
pnpm run build --base=/minesweeper/
```
This adds the base 'minesweeper' to urls, so assets can be found using an absolute path.

```
http://my-server.local/minesweeper
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
```
