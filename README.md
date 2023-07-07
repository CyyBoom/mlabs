Documentation

## Table of Contents
1. Introduction
2. Installation
3. Usage
4. Folder Structure
5. Components
6. Styling
7. State Management
8. Routing
9. Testing
10. Deployment

## 1. Introduction
This documentation provides an overview of the React app and guides you through the installation, usage, folder structure, components, styling, state management, routing, testing, and deployment process.

## 2. Installation
To install and run the React app, follow these steps:
1. Clone the repository from [GitHub](https://github.com/your-repo).
2. Navigate to the project directory using the command line.
3. Run the command `npm install` to install the project dependencies.
4. After the installation is complete, run `npm start` to start the development server.
5. Open a web browser and visit `http://localhost:3000` to access the app.

## 3. Usage
Once the React app is running, you can use the following features:
- Feature 1: The user can choose an image, date, hour and label to scheduele your post to a social midia.
- Feature 2: Check all the posts that have been saved.

## 4. Folder Structure
The folder structure of the React app is as follows:
```
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Component1.js
│   │   └── ...
│   ├── styles
│   │   ├── main.css
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
```
- The `public` folder contains the `index.html` file and other public assets.
- The `src` folder contains the main source code of the app.
- The `components` folder holds reusable components used throughout the app.
- The `styles` folder contains CSS or Sass files for styling the app.
- The `App.js` file is the main entry point of the app.
- The `index.js` file renders the React app in the DOM.

## 5. Components
The React app utilizes various components to create its user interface. Here are some important components:
- **Controller**: Routes to redirect page.
- **Footer**: Cancel, draft and save buttons.
- **Header**: Logo from the company, avatar and username.
- **Home**: Mains page whichs redirect with a button to Scheduele Page.
- **PostList**: A responsive table with all the posts that were schuedueled and status.
- **Schedueler**: All base to choose an image, social midia, day, hour and subtitle from posts.


## 6. Styling
Styling in the React app is achieved using CSS or Sass. The `styles` folder contains the necessary stylesheets. To add or modify styles, locate the relevant component or create a new CSS/Sass file.

## 7. State Management
The React app uses a state management library such as Redux, MobX, or the React Context API to manage and share application state across components. Specify which library you have used and provide instructions on how to use it.

## 8. Routing
For client-side routing, the React app may utilize a routing library like React Router. If routing is implemented, provide instructions on how to define routes and navigate between them.

## 9. Testing
The React app may include unit tests or integration tests to ensure the reliability and correctness of the codebase. Explain how to run the tests and any relevant details about the testing framework and approach.

## 10. Deployment
To deploy the React app to a production environment, follow these steps:
1. Build the app using the command `npm run build`. This generates an optimized build in the `build` folder.
2. Upload the contents of the `build` folder to your hosting provider or server.
3. Configure any necessary server settings, such as URL rewriting or HTTPS setup.
4. Access the deployed app via the assigned URL.