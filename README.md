# SkinHealth Frontend

This is a [Nx](https://nx.dev/) based monorepo for SkinHealth Frontend.

### Apps

**Apps** are applications, that can be developed, built, deployed independently(or together)

- `pca-skin`: a [CRA](https://create-react-app.dev/) app to tracke orders, invoices, etc. for PCA SkinHealth
- `elta-md`: a [CRA](https://create-react-app.dev/) app to tracke orders, invoices, etc. for EltaMD

`pca-skin` and `elta-md` are characteristically similar, and share most of their logic using well-defined and popularly followed mono-repo conventions. Sharing logic, and most of the behavioral code helps us maintain a level of consistency in how these apps behave while promoting DRY, and re-usability principles. Any apps that'll be added in future, can remain light-weight, while still having theme-level consistency and control as long as they serve the same purpose as currently available `pca-skin` and `elta-md` apps.

`pca-skin` and `elta-md` are able to re-use controls(input, button, layout, etc.), API calling logic, etc. due to a smart code-wiring technique(faciliated by Yarn/NPM) called `workspaces`. When coupled with [Nx](https://nx.dev/), the current structure lets us

- put re-usable code in dedicated folders under `/packages/*`
- parallely run all the `/apps/*` and anything runnable inside `/packages/*`
- declare/refer code from `/packages/*` inside any apps `/apps/*` (live)

Let's understand what `/packages/*` are all about next!

### Packages

**Packages** contain(and are supposed to contain) anything that can be re-used across all the `/apps/*` which could be 70-80% of the code (as long as apps don't deviate much in what they offer). For example, controls like `Button`, `Input`, `Icons`, etc. serve the same purpose across all `/apps/*` and thus need to be inside `/packages/*`. Currently, we're maintaining the following packages

- `ui`: a React component library shared by all the _apps_(`/apps`) and can be used by other _apps_ you'll add in the future. Contains everything that serves a visual purpose, and is expected to behave similarly across all the `/apps/*`
- `utils`: Generic utilities(like a function that calls APIs in an endpoint/payload agnostic way) used across all the applications
- `tsconfig`: `tsconfig.json`s(Typescript configuration) used throughout the monorepo and across all apps. Helps in managing the configuration in a DRY way.
- `config`: Any other configuration that needs to be shared across all apps. Currently, this folder/package houses the TailwindCSS configuration, and helps decide the correct color palette to use for a given brand with some compile-time aid.

> Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Structure

```js
├── apps/
│   └── pca-skin
│   └── elta-md
│   └── app-x ... // your future, uniquely replicable apps like `pca-skin`, `elta-md`, etc.
├── packages/
│   ├── tsconfig // shareable Typescript configs
│   ├── config // Non-Typescript configs
│   ├── utils // Generic utilities
│   └── ui/
│       └── src/
│           └── components/
│               ├── Shell/
│               │   ├── Shell.tsx
│               │   ├── Shell.stories.mdx
│               │   ├── Shell.spec.tsx
│               │   ├── index.tsx
│               │   └── ... // more files related to component
│               ├── Button
│               ├── Input
│               └── ... // more components
├── package.json
├── nx.json
├── yarn.lock
└── ... // more config files for ESlint, Prettier, Editorconfig, etc.
```

> You can duplicate any of the apps to create more CRA based apps instead of creating new apps with CRA, to save some of the repeat work needed to wire common packages(as mentioned below)

## What's inside?

This Nx based repo has some additional tools already setup for you:

- [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager.
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for `ui` package testing
- [Storybook](https://storybook.js.org/) for fast, component `ui` development in isolation
- [Craco](https://www.npmjs.com/package/@craco/craco) to override the Webpack configuration(in all the `/apps/*`) and tweak it as per your project's preference.

## Installation & Development

### Installation

Like any Node.js project the very first command you should run(after cloning the project) is

```bash
cd skin-health-frontend
yarn
```

This will install all of the project's dependencies.

### Development

We have configured several commands for you to facilitate the different approaches you can take to develop the project

**Develop all apps and packages in parallel**

To build all apps and packages in parallel, run the following command:

```bash
yarn dev
```

This triggers the `dev` command in all the applications and packages, and gives you more complete sense of how everything works together. However, that's not something you might want all the time due to the following reasons

- You're interested in only developing `pca-skin`, or `elta-md` or any such apps in isolation
- You want quick feedback loop
- You're suddenly finding your system slow. As everything runs by default, when you do a `yarn dev` at the root, it consumes more system resources. With growing number of apps and packages this can be more resource hogging.

To serve focussed development, there are commands to run the applications separately/individually

**Develop single apps and all packages in parallel**

For PCA SkinHealth

```bash
yarn dev:ps
```

For EltaMD

```bash
yarn dev:emd
```

**Develop just the packages**

It's not that you'll always develop just an application like `pca-skin` or `elta-md`. Since we're in a mono-repo, and can easily find ourselves writing a re-usable piece of code like a common `Button`, `Input` or just a generic utility, this structure/convention doesn't restrict you in any ways to always work from the root.

<ins>If you're developing a re-usable component</ins>, the best way to go about it is to navigate into the `/packages/ui` directory, and do a

```
yarn dev
```

Since UI components may require a way to develop/see/validate components as they're going to be eventually used, you can kickstart a live UI playground using

```
yarn storybook
```

[Storybook](https://storybook.js.org/) lets you easily view/work with the components as well as document them in a easily understandable manner.

> you can find the Storybook UI at `localhost:6006` when running.

<ins>If you're developing a re-usable utitlity</ins>, the best way to go about it is to navigate into the `/packages/utils` directory, and do a

```
yarn dev
```

### While developing...

Since you're working with a mono-repo the standard commands you use to add, remove or update packages are needed to be tweaked a bit to allow for package updates as per the individual workspace(`app` or `package`) you're working on actively

**Install**

```sh
yarn workspace <workspace> add <package>
```

Example:

```
yarn workspace spa add axios
```

**Uninstall**

```sh
yarn workspace <workspace> remove <package>
```

Example:

```
yarn workspace spa remove axios
```

**Update**

```sh
yarn workspace <workspace> update <package>
```

Example:

```
yarn workspace spa update axios
```

## Build

When you need to ship any new change, or just want to see/preview how everything looks/works when built, you do a

```
yarn build
```

that compiles everything in a distributable format.

Post running the above command, you can find the built app code inside `/apps/**/build` like `/apps/pca-skin/build` or `/apps/elta-md/build`. The dist(distributable) folder, in all its entirety needs to deployed to static asset cloud folders(like AWS S3, or AppEngine) to be served.

## Code Quality/Consistency

Custom git hooks are leveraged to make sure that all the contributors are able to push code in a consistent format(syntax, standard, indentation checks, etc.) Everytime a developer pushes his/her code, `lint` and `format` related commands are invoked to standardize the staged files. If you want to run `lint` or `format` your code separately, commands like `yarn lint` and `yarn format` can be invoked anytime from the root or the child apps/packages.

The consistency stretches beyond code to commit messages too. [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) is the currently agreed upon standard to follow when writing commit messages. Not following the conventional commits, may lead to rejection of PRs so it's good to always follow the standard or use another command we've made available `yarn commit`, that'll throw you a prompt and help you provide a CC adhering commit message easily.
