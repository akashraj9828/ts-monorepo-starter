# TypeScript Monorepo Starter

A modern, feature-rich monorepo starter template using TypeScript, Lerna, ESLint, Prettier, Husky, and Jest. This template provides a solid foundation for building and maintaining multiple packages in a single repository.

## Features

- 📦 Monorepo structure using [Lerna](https://lerna.js.org/)
- 🔷 [TypeScript](https://www.typescriptlang.org/) support
- 🎯 Code quality tools:
  - [ESLint](https://eslint.org/) for code linting
  - [Prettier](https://prettier.io/) for code formatting
  - [Husky](https://typicode.github.io/husky/) for Git hooks
  - [lint-staged](https://github.com/okonet/lint-staged) for pre-commit checks
- ✅ Testing with [Jest](https://jestjs.io/)
- 🔄 Hot reload development with `ts-node-dev`
- 🛠️ Configurable build setup

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn (v1.22.0 or higher)

> **Note**: This project includes an `.nvmrc` file. If you use [nvm](https://github.com/nvm-sh/nvm), you can simply run `nvm use` to switch to the correct Node.js version.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/akashraj9828/ts-monorepo-starter.git
   cd ts-monorepo-starter
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```

## Project Structure

```
ts-monorepo/
├── packages/ # Contains all packages
│ ├── package1/ # Individual package
│ └── package2/ # Individual package
├── package.json # Root package.json
└── tsconfig.json # Base TypeScript configuration
```

## Available Scripts

- `npm run build`: Build all packages using Lerna
- `npm run test`: Run Jest tests across all packages
- `npm run lint`: Run ESLint on all TypeScript files
- `npm run format`: Format all files (TypeScript, JSON, Markdown) using Prettier
- `npm run start`: Run the project using ts-node
- `npm run dev`: Start development mode with hot-reload using ts-node-dev
- `npm run clean`: Remove all build artifacts and dist directories

## Creating New Packages

To create a new package in the monorepo:

1. Create a new directory in the `packages` folder:

   ```bash
   mkdir packages/my-new-package
   ```

2. Initialize the package:

   ```bash
   cd packages/my-new-package
   npm init -y
   ```

3. Update the `package.json` for your new package:

   ```json
   {
     "name": "@mylib/my-new-package",
     "version": "1.0.0",
     "main": "dist/index.js",
     "types": "dist/index.d.ts",
     "scripts": {
       "build": "tsc",
       "test": "jest"
     }
   }
   ```

4. Create a `src` directory and add your TypeScript files:
   ```bash
   mkdir src
   touch src/index.ts
   ```

## Development Workflow

1. **Code Quality**:

   - ESLint and Prettier are automatically run on staged files before commits
   - Manually run lint: `npm run lint`
   - Manually format code: `npm run format`

2. **Testing**:

   - Write tests in `__tests__` directories or with `.test.ts` suffix
   - Run tests: `npm run test`

3. **Building**:
   - Build all packages: `npm run build`
   - Clean build artifacts: `npm run clean`

## Git Hooks

This template uses Husky to manage Git hooks:

- Pre-commit: Runs lint-staged to check and format staged files
- Pre-push: Runs tests to ensure all tests pass before pushing
- Commit-msg: Ensures commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) specification

### Commit Message Format

This repository follows the Conventional Commits specification. Commit messages should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types include:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `build`: Changes to build system or dependencies
- `ci`: Changes to CI configuration
- `chore`: Other changes that don't modify src or test files

Examples:

```bash
feat: add new package validation feature
fix(auth): resolve token expiration issue
docs: update installation instructions
```

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
