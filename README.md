# ⚛️ Vite React TS Template - with powers ✨

This project template provides a solid foundation for building modern web applications using Vite + React + TypeScript, with essential development tools like Eslint, Standard, and Prettier, testing frameworks like Vitest and Cypress, and documentation tools like StoryBook and StyleLint. With built-in CI/CD support, developers can automate building, testing, and deployment, enabling rapid iteration and high-quality results.

## Getting Started

### Prerequisites

You need to have installed Node and npm

```
Node >= v18.15.0
npm >= v8.19.3
```

Install the following extensions to VSCode
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint&ssr=false#review-details) - JavaScript Linter.
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code Formatter
* [Prettier ESlint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) - Used to maintain the code style

### Installing

At project root
```
npm install
```

Start the application with:

```
npm run dev
```

Ready! You would have the application up and running, you can feel free to show what you are made of.

## Start Storybook

The App.stories.tsx template file is located in:
```
src/
└── stories/
    └── App.stories.tsx

```

To run Storybook run:
```
npm run storybook
```

## Running the tests

To run Vitests unit and integration tests with the extension .test.tsx run:
```
npm run test
```
or you can run the vitest user interface with:
```
npm run test:ui
```
Vitest coverage runs with
```
npm run coverage
```
### Testing E2E with Cypress

To run tests with .cy.tsx extension

```
npm run cypress:run
```

### Code Style

The following scripts are available for ESlint style coding

```
// Scripts {.ts|.tsx}
npm run lint:scripts

// Styles {.css}
npm run lint:styles
```

#### Notes
It is recommended for VSCode to have this configuration in your settings.json and have installed the recommended extensions mentioned in prerequisites
```
"[typescriptreact]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
},
"editor.codeActionsOnSave": {
    "source.fixAll": true
}
```

## Deployment

On Progress..

## Built With

* [Vite React-ts](https://vitejs.dev/) - The web framework used

## Authors

* **Alan Escobedo** - *Initial work* - [Alan Escobedo](https://github.com/IngeScobedo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
