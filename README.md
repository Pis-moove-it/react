# Recliclando Web application

### Prerequisites

What things you need to install the software and how to install them
- Ubuntu or Ubuntu based OS.
- npm (6.4.1): JavaScript package manager. It’s Node.js default manager.
```
sudo apt install npm
```
- node.js (8.11.4)
```
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt install -y nodejs
sudo apt-get install -y build-essential
```

Also, we recommend using VS Code editor. You can get it in [VS Code](https://code.visualstudio.com/) or you may add the official VS Code repository for Ubuntu
```
sudo add-apt-repository -y "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys EB3E94ADBE1229CF
sudo apt update
sudo apt -y install code
```

## Getting Started

In order to get you a copy of the project up and running on your local machine for development and testing purposes, just clone the repository and install the dependencies:

```
git clone https://github.com/Pis-moove-it/reciclando-web
cd reciclando-web
npm install
```

## Scripts

- npm start: start the development server on localhost:3000
- npm run lint: runs eslint with our configuration (which is adapted form the aribnb configuration) over all .js files in the project folder, excluding node_modules, dist and cover directories (cover folder is created when you run tests with --coverage). It automatically fix all auto-fixable problems.
- npm run build: build the application in the dist folder. The output bundled file is bundled.js.
- npm test [-- --coverage]:  execute the tests in the __tests__ folder. Optionally, you can ask for coverage statistics in tabular form inside the console and get code mark ups in html format (inside coverage directory). With coverage enabled, it also verifies if the thresholds coverage defined in package.json are covered.
- npm run test:watch: execute Jest in watch mode. This allows you, besides running all test, to run only the test of files related to the last uncommited changes. Also, you can specify a regex in order to run only the tests whose filename matches the expression.

## Main dependencies

- eslint: we use airbnbn style guide with a couple of modifications (which you can find in .eslintrc)
- react: the main JavaScript library for building user interfaces
- react-hot-loader: allows you to see the changes in your browser without the need to refresh the page
- react-router: for client-side routing. In order to make dynamic routing work during deployment, you need to configure your production server to support client-side routing. Basically, you need to configure it to always serve index.html for any route requested.
- axios: to interface with a REST API
- babel: for transpilling into traditional JavaScript
- webpack: for running the development server and building the application
- redux: as the single source of truth
- redux-thunk: for the middleware
- styled-components: for adding style to React components
- jest: the testing framework
- enzyme: the JavaScript testing utility

You can see the full dependencies list in package.json


## Folder structure

```
.
+-- /__tests__
+-- /coverage
+-- /node_modules
+-- /public
+-- /src
|   +-- /app
|   |   +-- /common
|   |   +-- /home
|   |   |   +-- /duck
|   |   |   |   +-- actions.js
|   |   |   |   +-- index.js
|   |   |   |   +-- operations.js
|   |   |   |   +-- reducers.js
|   |   |   |   +-- types.js
|   |   |   |   +-- tests.js
|   |   |   +-- SomeComponent.js
|   |   |   +-- SomeContainer.js
|   |   |   +-- SomeOtherComponent.js
|   |   |   +-- SomeOtherContainer.js
|   |   +-- App.js
|   +-- /utils
|   +-- index.js
|   +-- reducers.js
+-- package.json
```

### __tests__

Tests should be here. Notice that it's structure is a mirror of src's. Jest is configured to watch only inside this folder for tests. See Scripts section for running them.

### coverage

Contains coverage information collected with npm test -- --coverage.

### public

Static assest like images should be here. Notice that the index.html of the whole application is inside here.

### src

index.js is the main script called from index.html and reducers.js imports all the reducers of each view.

### src/app folder

Inside here are all React components. We distinguish between presentational and container components. The first ones have "Component" suffix and are only concerned with how information is presented to the user; while the second ones have "Container" suffix and provide the data needed to render the presentational components. We structure this directory according to the views: each route of the application has one directory. common folder contains components that are shared throughout the app.

Inside each view, the duck directory is dedicated to Redux:
- actions.js has all the actions creators of home view
- index.js just re-exports all the reducers of the home view (which are later combined in the reducers.js file of the src folder)
- operations.js contains any logic surrounding our actions and side effects, including async logic
- reducers.js has all the reducers of the home view
- types.js contains string literals for the action types

App.js file is a component that represents the whole application, which is rendered inside the index.js of the src folder.

## Integration with VS Code

- eslint: we recommend the eslint extension for VS Code. It allows you to see the linter errors inside the text editor. In order to configure it to use our linter, you just have to configure your local configuration for eslint inside VS Code: File -> Preferences -> Settings, then lookup eslint.options and click Edit settings.json. Finally just modify it to leave it like

```
"eslint.options": {
    "configFile": ".eslintrc.json"
},
```
This will tell the eslint extension of VS Code to use .eslintrc.json configuration for linting.

- GitLens: for managing git commits, tags, branches, etc.

## Chrome/Firefox extensions

You may want to check out React Developer Tools and Redux DevTools browser plugins. The first one sows you the component structure of your application, along with the props and the state of each component; the second one lets you see the current state (and pasts states) of Redux's store. In order to let the browser extension actually look into the store, you need to specify it the moment you create the store. For instance, you may create the store like

```
const store = createStore(
  rootReducer,
  // To watch Redux store with ReduxDevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
```

## Troubleshooting

### Jest's watch mode fauilure or Hot Module Replacement not applying the changes on the browser
This is probably because your system does not allow you to watch so many file changes. On Ubuntu, you can run sysctl -a | grep inotify to view the current user.max_inotify_watches value. Try to increase this number by running: sudo sysctl fs.inotify.max_user_watches=524288. Alternatively, append a new line fs.inotify.max_user_watches=524288 to file sudo vim /etc/sysctl.conf and then run sudo sysctl -p /etc/sysctl.conf to apply the change.

## Deployment

[Add additional notes about how to deploy this on a live system]

TODO

## TODO
- Configure continuous integration
