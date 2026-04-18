# Future Coding Task | Minesweeper

A small coding task that shows a minesweeper grid.

For details see 'docs/Minesweeper-task.pdf'

## Reasoning

Minesweeper is written using Typescript and React. This makes it easy to visualize the grid in a web page.

The build tools are pnpm and Vite, which are both popular modern/fast tools for React. The project directory structure follows the recommendations from 'bulletproof-react'.

The code to generate the grid of fields, with bombs and counts is here:
```
src/utils/minesweeper/MinesweeperGenerator.ts
```

The function 'generateGameBoard' takes the number of rows & columns, and count of mines to be placed. Other functions are nested within this outer function, so that they have easy access to the counts and other variables (e.g., the grid). This is a good technique for more complex algorithms.

The stages are:
* Initialize the grid as a 2d array, where each field (aka. cell) is set to 'empty'.
* The mines are then placed, using a modern version of the 'Fisher–Yates shuffle' algorithm.
* Finally, it loops through all non-mine fields, and sets the count of the neighboring mines.

Using 'Fisher-Yates' to randomize the indices of grid has some advantages. It has linear time to complete. And it avoids the problem of a random index generator hitting a field that already has a mine.

The method of counting neighboring mines was suggested by chat GPT, however the it was hand coded!

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
