# Webbteamet Components

This is a library of styled and unstyled components we can import and use when we are building WebApps for our projects.

The goal is that we also easily can create new components for this library, to expand and improve it in the future.

## Installation

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

### Local installation

1. Clone this repository to your local enviroment
2. Navigate to the repository and run `npm install`

### Creating new components

If you want to create a new component to expand on this library, we got a script that adds some boilerplate for your convenience.

1. Run `npm run new-component MyComponent`. This will create a folder in `.src/components/MyComponent` containing the necessary files `MyComponent.tsx`, `MyComponent.stories.tsx`, `MyComponent.css`, `index.ts`
2. Work with the component, see detailed documentation further down in this README. If you want to export the component, make sure to add it to `./src/index.ts` before exporting it with Rollup
3. Run `npm run storybook` to start the local development server for Storybook
4. Run `npm run build-storybook` to build Storybook as a static web application
5. Run `npm run build-rollup` to compile the components and ready them for export. Make sure you added the component as explained in step 2 above
6. Increase the version in `package.json` and run `npm run publish` to publish the new version to npm

### MyComponent.tsx

This is a regular React Component. To read more about React component and the basics:
(Quick Start - React)[https://react.dev/learn]

### MyComponent.stories.tsx

To read more about what a story is, and how it works:
(What's a story? - Storybook docs)[https://storybook.js.org/docs/get-started/whats-a-story]

### MyComponent.css

This styling is automatically imported to the component. Currently, vanilla CSS is used. In the future, SASS will be supported.

### index.ts

This file exports the folder content, so it can be used when installing the npm package containing the components.

## Roadmap

Here is a roadmap for future improvement for Webbteamet Components:

- [ ] The script `npm run new-component` automatically adds the file to `./src/index.ts` for export
- [ ] The new component name is added to the boilerplate code
- [ ] Automatic deployment to github-pages
- [ ] SASS support for components
