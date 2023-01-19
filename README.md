# Mithya Vite TS, Tailwind, Easy-peasy, Sass boilerplate

This boilerplate sets up a basic project using Vite TS, Tailwind, Easy-peasy and Sass.

To use this, first clone the repo using degit like so: `npx degit mithya-team/vite-ts-template <my-awesome-project>`

Then open a terminal and cd into the folder.
Run `yarn && yarn dev` to install the dependencies and start the dev server.
🎊 That's it 🎊. Start building your project.

## Templates in this boilerplate

This project has templates for Component, Model and Store set up. You may add as many as you want.

To use these templates, run the corresponding command. You can either answer the prompts or pass in arguments using the `--` notation.

| Template  | Command        | Args                                          |
| --------- | -------------- | --------------------------------------------- |
| Component | `yarn g:comp`  | name                                          |
| Model     | `yarn g:model` | name, api, needsParser(y/n), needsUtils (y/n) |
| Store     | `yarn g:store` | name                                          |
