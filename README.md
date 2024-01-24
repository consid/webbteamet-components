# Webbteamet Components

This is a library of styled and unstyled components we can import and use when we are building WebApps for our projects.

The goal is that we also easily can create new components for this library, to expand and improve it in the future.

## Add component to your project

If you want to use one of the already created component in your project, here's how you install the package and add a component:

1. Add `webbteamet-components` to your dependencies:

```
npm install webbteamet-components
```

2. Import the component to your code:

```
import { DatePicker } from 'webbteamet-components'

const App = () => {
   return <DatePicker />
}
```

## Development

If you want to add a new component to the library, here's how you can clone the repository and create new components:

### Local installation

1. Clone this repository to your local enviroment

2. Navigate to the repository and run `npm install`

3. Run `npm run storybook` and the local development server should open on `http://localhost:6006` in your browser

---

### Creating new components

If you want to create a new component to expand on this library, we got a script that adds some boilerplate for your convenience.

1. Run `npm run new-component <MyComponent>`. This will create a folder in `.src/components/MyComponent` containing the necessary files:
   `MyComponent.tsx`,
   `MyComponent.stories.tsx`,
   `MyComponent.css`,
   `index.ts`,

2. Work with the component and the related story, see detailed documentation for each file further down in this README

3. Run `npm run build-storybook` to build Storybook as a static web application. The static web application of this library can be found in `/storybook-static`

4. Run `npm run build-rollup` to compile the components and ready them for export. The files will be compiled in the folder `/lib`

5. Increase the version in `package.json` and run `npm publish` to publish the new version to npm using the CLI. For further documentation on publishing with npm, read more at [npm-publish | npm Docs](https://docs.npmjs.com/cli/v10/commands/npm-publish)

---

### MyComponent.tsx

This is a regular React Component. To read more about React component and the basics:
[Quick Start - React](https://react.dev/learn)

### MyComponent.stories.tsx

To read more about what a story is, and how it works:
[What's a story? - Storybook docs](https://storybook.js.org/docs/get-started/whats-a-story)

### MyComponent.css

This styling is automatically imported to the component. Currently, vanilla CSS is used. In the future, SASS will be supported.

### index.ts

This file exports the folder content, so it can be used when installing the npm package containing the components.

---

## Roadmap

Here is a roadmap for future improvement for Webbteamet Components:

- [x] The script `npm run new-component` automatically adds the file to `./src/index.ts` for export
- [x] The new component name is added to the boilerplate code
- [ ] Automatic deployment to github-pages
- [ ] SASS support for components
