import fs from 'fs';
import { mkdirp } from 'mkdirp';
import {
  DEFAULT_COMPONENT,
  DEFAULT_STORY,
  DEFAULT_STYLING
} from './constants.js';

const args = process.argv.slice(2);

const createStory = (args) => {
  fs.writeFileSync(
    `./src/components/${args}/${args}.stories.tsx`,
    DEFAULT_STORY
  );
};

const createComponent = (args) => {
  fs.writeFileSync(`./src/components/${args}/${args}.tsx`, DEFAULT_COMPONENT);
};

const createIndex = (args) => {
  const INDEX = `
  export * from './${args}';
  `;
  fs.writeFileSync(`./src/components/${args}/index.ts`, INDEX);
};

const createStyling = (args) => {
  fs.writeFileSync(`./src/components/${args}/${args}.css`, DEFAULT_STYLING);
};

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
