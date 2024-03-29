<!-- APPLICATION PREVIEW -->
<div align="center">
  
  ![Tic-Tac-Toe Header](./docs/application.png)
  
</div>

<!-- SHIELDS -->
<div align="center">
  
  ![Version](https://img.shields.io/badge/1.0.0-blue?label=Version&labelColor=555555)
  ![GitHub Repository Size](https://img.shields.io/github/repo-size/lszymanski7/tic-tac-toe?label=Size&labelColor=555555)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?label=License&labelColor=555555)](https://github.com/lszymanski7/tic-tac-toe/blob/main/LICENSE.md)
  ![GitHub Last Commit](https://img.shields.io/github/last-commit/lszymanski7/tic-tac-toe?label=Last%20Commit&labelColor=555555)
  ![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lszymanski7/tic-tac-toe?label=Pull%20Requests&labelColor=555555)
  ![GitHub Issues](https://img.shields.io/github/issues/lszymanski7/tic-tac-toe?label=Issues&labelColor=555555)
  
</div>

<br/>

<!-- TIC-TAC-TOE -->
# Tic-Tac-Toe
Tic-tac-toe is one of the most famous strategy games in the world. It's played by two players on a three-by-three board. Each of them aims to win by marking three squares in one line with the same symbol - X or O. This application is an implementation of this game and allows you to play with your friends without using paper and pencil.

🚀 **Live demo:** <a href="https://lszymanski7-tic-tac-toe.netlify.app">https://lszymanski7-tic-tac-toe.netlify.app</a>

<!-- TABLE OF CONTENTS -->
## Table of Contents
1. [Game Rules](#game-rules)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Application](#application)
5. [Contributing](#contributing)
6. [License](#license)

<!-- GAME RULES -->
## Game Rules
The game is played on a three-by-three board. Two players take turns marking empty squares with their symbol - X or O. In each game, the first move belongs to a different player to even the odds of winning. If one of the players marks three squares in a line with his symbol, that player wins. The game also ends when all the squares are marked and no one has a winning combination (Fig. 1.) - then it's a draw.

<div align="center">

  ![Winning Combinations](./docs/winning-combinations.png)

  **Fig. 1.** All winning combinations (horizontal, vertical and diagonal).

</div>

<!-- FEATURES -->
## Features
- Changing the starting player after each completed game.
- Highlighting a player's turn in red (X or O).
- Displaying an animation when someone wins or it's a draw.
- Counting the game score and resetting it after refreshing the page.
- Saving data to localStorage.
- Toggling between light and dark theme.

<!-- TECHNOLOGIES -->
## Technologies
![JavaScript](https://img.shields.io/badge/JavaScript-555555?style=flat&logo=javascript&logoColor=F7DF1E)
![HTML](https://img.shields.io/badge/HTML-555555?style=flat&logo=html5&logoColor=E34F26)
![CSS](https://img.shields.io/badge/CSS-555555?style=flat&logo=css3&logoColor=1572B6)
[![SASS](https://img.shields.io/badge/SASS%20|%20v1.66.1-555555?style=flat&logo=SASS&logoColor=CC6699)](https://sass-lang.com)
[![React](https://img.shields.io/badge/React%20|%20v18.2.0-555555?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Webpack](https://img.shields.io/badge/Webpack%20|%20v5.88.2-555555?style=flat&logo=webpack&logoColor=8DD6F9)](https://webpack.js.org)
[![Babel](https://img.shields.io/badge/Babel%20|%20v7.22.10-555555?style=flat&logo=babel&logoColor=F9DC3E)](https://babeljs.io)
[![Jest](https://img.shields.io/badge/Jest%20|%20v29.6.2-555555?style=flat&logo=jest&logoColor=C21325)](https://jestjs.io)
[![Testing Library](https://img.shields.io/badge/Testing%20Library%20|%20v9.3.1-555555?style=flat&logo=testinglibrary&logoColor=E33332)](https://testing-library.com)
[![Node.js](https://img.shields.io/badge/Node.js%20|%20v18.9.0-555555?style=flat&logo=node.js&logoColor=339933)](https://nodejs.org/en)
[![Npm](https://img.shields.io/badge/Npm%20|%20v8.19.1-555555?style=flat&logo=npm&logoColor=CB3837)](https://npmjs.com)
[![Express](https://img.shields.io/badge/Express%20%7C%20v4.18.2-555555?style=flat&logo=express&logoColor=FFFFFF)](https://expressjs.com)
[![ESLint](https://img.shields.io/badge/ESLint%20%7C%20v8.47.0-555555?style=flat&logo=eslint&logoColor=4B32C3)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier%20%7C%20v3.0.2-555555?style=flat&logo=prettier&logoColor=F7B93E)](https://prettier.io)

All technologies and tools were used in the latest version at the time of creating this project.

<!-- Getting Started -->
## Getting Started

<!-- Prerequisites -->
### Prerequisites
> **Note** Download [Node.js](https://nodejs.org/en/download) installer.

This project was created with the Node.js (v18.9.0) runtime environment and the NPM (v8.19.1) for package management. Use the Node.js installer to install both of them on your system.

<!-- Installation -->
### Installation
Follow all of the steps below to get a local copy of the project and install any dependencies required to run it.

1. Clone the repository.

```
$ git clone https://github.com/lszymanski7/tic-tac-toe.git
```

2. Navigate to the project directory.

```
$ cd tic-tac-toe
```

3. Install all dependencies.

```
$ npm install
```

<!-- APPLICATION -->
### Application
To run the application, you must first create a production build. Use the command below for this purpose.

```
$ npm run build
```

The next command starts the server built with Node.js and Express. All static files generated by webpack will be served from the `./build` folder. The application will be launched at the following url: [http://localhost:3000](http://localhost:3000)

```
$ npm run start
```

<!-- CONTRIBUTING -->
## Contributing
Any contributions are greatly appreciated. Use the [issue tracker](https://github.com/lszymanski7/tic-tac-toe/issues) if you want to report bugs, request a new feature or improve documentation. Please check for existing issues before you report them yourself.

You can contribute by following these steps:
1. Fork this repository on GitHub.
2. Clone the forked repository to your machine: `$ git clone https://github.com/username/tic-tac-toe.git`
3. Create a new branch: `$ git switch -c <branch-name>`
4. Make necessary changes and commit them.
5. Push changes to GitHub: `$ git push origin -u <branch-name>`
6. Submit a new Pull Request on GitHub.

<!-- LICENSE -->
## License
This project is licensed under the terms of the [MIT License](https://github.com/lszymanski7/tic-tac-toe/blob/main/LICENSE.md).

<br/>

<!-- LINKS -->
##
<div align="center">
  <p>If you have any questions or suggestions, please send me an <a href="mailto:lszymanski7.dev@gmail.com?subject=GitHub - Your subject here...">e-mail</a>. <br/> You can also find me on the following websites:</p>
  
  [![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-F58025?style=flat&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/18706083)
  [![GitLab](https://img.shields.io/badge/GitLab-555555?style=flat&logo=gitlab)](https://gitlab.com/lszymanski7)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/lszymanski7)
</div>
