This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## References

- [storybook and create react app set-up](https://fathomtech.io/blog/create-a-react-component-library-using-create-react-app/)
- [storybook configuration](https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/)

### Instructions

- run `yarn` to install dependencies
- run `yarn run compile` to compile your library to the dist folder

#### Test your components:

- Test in storybook (where the components reside presently): run `yarn storybook` (opens in port 9009)
- Test in react application: run `yarn start` (opens in port 3000)

#### Publish your library:

- In package.json file, change "name" field to a unique npm library name
- Create a npm account if you haven't already
- run `npm publish` to publish your library (from the dist folder) to npm
  - May prompt you to log in
