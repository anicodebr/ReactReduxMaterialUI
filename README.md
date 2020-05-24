# ReactReduxMaterialUI Function Components Only
<img src="https://user-images.githubusercontent.com/21184478/82745012-f798f900-9d55-11ea-98d7-941e1ca8c43b.png">
<p align="center">React + Redux + Material Ui + Function Components = Perfect Template ❤</p>
A simple template for REACT development using Material Ui and Redux, with Axios for HTTP Client.

## Components in this template
- **Material UI** - General interface
- **Redux** - Predictable state container
- **React-Router-Dom** - Route Controller
- **Redux Logger** - Logger for Redux
- **Redux Thunk** - Middleware for Redux
- **Craco** - Create React App Configuration Override
- **Axios** - HTTP Client

## Folder Structure
    .
    ├── public                  # Public static files
    ├── src                     # Main project Folder
    │   ├── assets              # General assets
    │   ├── components          # App components
    │   |   └── UI              # UI Components
    │   ├── redux               # Redux Folder
    │   |   ├── _actions        # Redux Actions
    │   |   ├── _constants      # Redux Constants
    │   |   ├── _helpers        # Redux Folders
    │   |   └── _reducers       # Redux Reducers
    │   ├── utils               # General Utils
    │   |   ├── theme.js        # Material UI Themes
    │   |   └── routes.js       # App Routes
    │   ├── views               # App Views
    │   ├── App.js              # Main App Wrapper
    │   ├── index.css           # Index Styles
    │   └── index.js            # Index App
    └── ...
**Each folder has an index.js file which exports its files and folders by modules.**

## What is CRACO?
**C**reate **R**eact **A**pp **C**onfiguration **O**verride in this template is to alias the application folders globally through the craco.config.js file.

<p align="center">Made with ❤ by Gabriel Martinusso and Felipe Correa</p>
