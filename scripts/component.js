import fs from 'fs';
import { mkdirp } from 'mkdirp';
import {
  DEFAULT_COMPONENT,
  DEFAULT_STORY,
  DEFAULT_STYLING
} from './constants.js';

// Get the component name from the command line
const args = process.argv.slice(2);

// Create the story file for the component
const createStory = (args) => {
  const regex = new RegExp('MyComponent', 'g');
  const customStory = DEFAULT_STORY.replace(regex, args);

  fs.writeFileSync(`./src/components/${args}/${args}.stories.tsx`, customStory);
};

// Create the component file
const createComponent = (args) => {
  const regex = new RegExp('MyComponent', 'g');
  const customComponent = DEFAULT_COMPONENT.replace(regex, args);

  fs.writeFileSync(`./src/components/${args}/${args}.tsx`, customComponent);
};

// Create the index file for the component && update the src/index.ts file
const createIndex = (args) => {
  const INDEX = `
  export * from './${args}';
  `;
  fs.writeFileSync(`./src/components/${args}/index.ts`, INDEX);

  const indexRow = `export { ${args} } from './components/${args}';\n`;
  fs.appendFileSync('./src/index.ts', indexRow);
};

// Create the styling file for the component
const createStyling = (args) => {
  fs.writeFileSync(`./src/components/${args}/${args}.css`, DEFAULT_STYLING);
};

// Create the component directory and add the files
mkdirp(`./src/components/${args}`)
  .then((made) => console.log(`Created directory ${made}`))
  .then(() => {
    createStory(args);
  })
  .then(() => {
    createComponent(args);
  })
  .then(() => {
    createIndex(args);
  })
  .then(() => {
    createStyling(args);
  })
  .finally(() => {
    console.log('Created files for you component!');
  });
