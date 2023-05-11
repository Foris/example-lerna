# Lerna Design System

This guide explains how to use a React design system starter powered by:

- 🏎 [lerna](https://lerna.js.org/) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild

As well as a few others tools preconfigured:
- [TypeScript](https://www.typescriptlang.org/) for static type checking

## System required

nodejs >= 19.0.1


### Documentation

- [benchmark this monorepo](https://forisai.atlassian.net/wiki/spaces/IN/pages/2447835145/Monorepos)


### Useful Commands

- `pnpm build` - Build all packages

## Packages

This `Lerna` includes the following packages and applications:

- `packages/@fori/core`: Core React components


### Compilation

To make the core library code work across all browsers, we need to compile the raw TypeScript and React code to plain JavaScript. We can accomplish this with `tsup`, which uses `esbuild` to greatly improve performance.

Running `pnpm build` from the root of the lerna will run the `build` command defined in each package's `package.json` file.

For `foris-core`, the `build` command is the following:

```bash
tsup src/index.tsx --format esm,cjs --dts --external react
```

`tsup` compiles `src/index.tsx`, which exports all of the components in the design system, into both ES Modules and CommonJS formats as well as their TypeScript types. The `package.json` for `foris-core` then instructs the consumer to select the correct format:

```json:foris-core/package.json
{
  "name": "@foris/core",
  "version": "0.0.0",
  "main": "./dist/index.js"
 }
```

Run `pnpm build` to confirm compilation is working correctly. You should see a folder `foris-core/dist` which contains the compiled output.

```bash
foris-core
└── dist
    ├── index.js    <-- CommonJS version
```

### Authors

- [@markozxuu](https://www.github.com/markozxuu)

