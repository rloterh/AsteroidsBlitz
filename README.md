# AsteroidsBlitz - A 2D shooter game (A Microverse JavaScript capstone)

![Microverse](https://img.shields.io/badge/-Microverse-007bff?style=for-the-badge)

## Description
AsteroidsBlitz is a mini shooter game whereby asteroids supposedly attack a spaceship, and the spaceship defends itself by firing missiles at the asteroids. It's 'Game Over' when an asteroid (enemy) shoots or crashes the spaceship (controlled by the player). A player then enters his/ her alias player name and the scores are stored in a Leaderboard api. The player's current score, together with all other previously played games are subsequently displayed on the Leaderboard scene.

## Game Design
The Asteroids Blitz game has 5 main scenes: Preload, TitleScene, Game, GameOver and LeaderBoard. There's also a main configuration file which contains the game configuration and links to the html which a browser window renders the visuals via either a  webGL or HTML canvas element. The Preload file loads the initial assets required for the game before the game starts. The Game file controls the game play, from physics to game mouse inputs as well as the main game logic. Kindly click [here](https://github.com/rloterh/AsteroidsBlitz/blob/build/docs/AsteroidsBlitz.md) for more details on the game documentation.

## Live Demo
[Asteroid Blitz live demo](https://modest-clarke-ab794f.netlify.app/)


## App Screenshots
| |
|:-------------------------:|
| <img width="800" alt="Sign up/ Login page" src="https://user-images.githubusercontent.com/12745474/131269193-4a9f22b5-11d9-4730-945f-752bdf3d9506.png"> <p align="center"><b>Title Scene</b><p>|
| <img width="800" alt="Homepage" src="https://user-images.githubusercontent.com/12745474/131269233-b9cbde0d-ca91-4bb8-86bb-08e3c2e6c132.png"> <p align="center"><b>Game Scene</b></p>|
| <img width="800" alt="User profile" src="https://user-images.githubusercontent.com/12745474/131355035-610882fd-3ea8-4cea-aa19-8782f5738353.png"> <p align="center"> <b>Leader Board Scene</b></p>|


## Instructions 🎮

### Start Game

- `Start` - `Space bar`

### Direct Character

- `Rotate` - `Move mouse over an angle` **on the game screen**

### Shoot

- `launch missile` - `Left-click` **on the game screen**

 <br>

## Getting Started

1. - Copy the git link `https://github.com/rloterh/AsteroidsBlitz.git` of this project
2. - In your terminal run the command `git clone https://github.com/rloterh/AsteroidsBlitz.git`
3. - Navigate to the cloned project directory
4. - Run the command `npm init` to setup webpack and other project dependencies
5. - Run the command `npm run start` to compile the project
6. - The application launches in the default web browser with url as: `http://localhost:9000/`


## Built With

- JavaScript
- HTML
- CSS
- LeaderBoard API
- Phaser 3.5

### Testing Project

1. - Run the command `npm -v` to ensure node package manager is installed
2. - Go to [npmjs.com](https://www.npmjs.com/get-npm) to install node package manager, if not installed
3. - Go to the terminal, and navigate to project directory
4. - Run the command `npm i`
5. - To run test cases (using jest), run the command `npm run test`
6. - All test cases passes, when no error message is shown in the terminal

### Validating JavaScript Syntax

1. - Run the command `npm -v` to ensure node package manager is installed
2. - Go to [npmjs.com](https://www.npmjs.com/get-npm) to install node package manager, if not installed
3. - Go to the terminal, and navigate to project directory
4. - Run the command `npm i`
5. - Validate the javascript syntax and code standard by running the command `npx eslint .`
6. - Validation check passes, when no error message is shown in the terminal

### Validating CSS Syntax

1. - Run the command `npm -v` to ensure node package manager is installed
2. - Go to [npmjs.com](https://www.npmjs.com/get-npm) to install node package manager, if not installed
3. - Go to the terminal, and navigate to project directory
4. - Run the command `npm install`
5. - Validate the css syntax and code standard by running the command `npx stylelint "**/*.{css,scss}"`
6. - All validation checks passes, when no error message is shown in the terminal


## Author

### 👨‍💻 Robert Loterh

[![GitHub](https://img.shields.io/badge/-GitHub-000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/rloterh) <br>
[![LINKEDIN](https://img.shields.io/badge/-LINKEDIN-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/robert-loterh/) <br>
[![EMAIL](https://img.shields.io/badge/-EMAIL-D14836?style=for-the-badge&logo=Mail.Ru&logoColor=white)](mailto:rloterh@gmail.com) <br>
[![TWITTER](https://img.shields.io/badge/-TWITTER-1DA1F2?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/RLoterh) <br>


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/rloterh/AsteroidsBlitz/issues).


## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
- [Phaser.io](https://phaser.io/)
- [Microverse](https://www.microverse.org/)


### License

![Cocoapods](https://img.shields.io/cocoapods/l/AFNetworking?color=red&style=for-the-badge)
