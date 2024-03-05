# TypeScript TODO List

[![Netlify Status](https://api.netlify.com/api/v1/badges/29d058c7-d1c0-447b-8f0e-7f5de0e61c28/deploy-status)](https://app.netlify.com/sites/sav-typescript-todo-list/deploys)  
![Hello](https://img.shields.io/static/v1?label=project&message=todo-list&color=orange) ![GitHub last commit](https://img.shields.io/github/last-commit/siljeangelvik/typescript-todo-list?&color=ff69b4)  
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/siljeangelvik/typescript-todo-list?&color=blue) ![JetBrains Plugins](https://img.shields.io/jetbrains/plugin/r/rating/R4Intellij?&color=blueviolet)

**Author:** [Silje Angelvik](https://github.com/siljeangelvik)    
**Host:** [Netlify](https://sav-typescript-todo-list.netlify.app/)  
**Repository:** [GitHub](https://github.com/siljeangelvik/typescript-todo-list)

## Description

This TypeScript project implements a simple TODO list application. It utilizes the UUID v4 library to generate unique identifiers for tasks and defines a type structure for the Task object. The application dynamically interacts with the DOM by selecting HTML elements and initializing an array to store tasks.

Upon loading the page, it retrieves saved tasks from the local storage and displays them on the TODO list. The application allows users to add new tasks through a form submission, creating a task object with a unique ID, a title based on user input, and default values for completion status and creation date.

## Built With
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [TypeScript](https://www.typescriptlang.org/)
- [Git](https://training.github.com/downloads/github-git-cheat-sheet/)
- [GitHub](https://github.com/about)
- [Netlify](https://www.netlify.com/)
- [PhpStorm](https://www.jetbrains.com/phpstorm/)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:siljeangelvik/typescript-todo-list.git
```

2. Install the dependencies:

```
npm i
```

### Running

To run and preview the app:

```bash
npm start
```

## Contact

Click on the badges below to go to my profiles or contact me via email.

<a href = "https://www.linkedin.com/in/siljeangelvik/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white" alt="LinkedIn Badge" />
</a>
<a href = "https://github.com/siljeangelvik">
    <img src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white" alt="GitHub Badge" />
</a>
<a href = "mailto: angelviksilje@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-EA4335.svg?style=for-the-badge&logo=Gmail&logoColor=white" alt="Gmail Badge" />
</a>

## Resources
- [TypeScript Tutorial](https://www.youtube.com/watch?v=jBmrduvKl5w) by **Web Dev Simplified**
- [CSS Grid & Flexbox](https://matthewjamestaylor.com/right-sidebar-layout) by **Matthew James Taylor**
- [Glassmorphism](https://codepen.io/siljeangelvik/pen/bGJdPBj) by **Flowbite**
#### ChatGPT
_Used **ChatGPT** out of curiosity and saw that the coding could be shortened and improved._

> Adding semicolon (`;`) at the end of **each** and **all** of the statements, for consistency purpose.

> Improved the formatting in `console.log`'s template literal to be more readable.

> Improved the **condition check** in the `form?.addEventListener`  
❌ `if (input?.value == "" || input?.value == null) return`  
✅ `if (!input?.value) return;`  
_"This is a more concise and idiomatic way of checking if the input value is either an empty string or null"_ - **ChatGPT**

---

# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.