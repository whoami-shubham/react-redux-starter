# react-redux-starter

This project was intended to help users get up and running quickly with basic react-redux app that contains navbar, footer,bootstrap and some css. 
## Table of Contents
1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Running the Project](#running-the-project)
1. [Project Structure](#project-structure)
1. [Live Demo](#live-demo)


## Requirements
* node `^10.0.0`
* yarn `^1.13.0` or npm `^6.8.0`

## Installation

After confirming that your environment meets the above [requirements](#requirements), you can create a new project based on `react-redux-starter` by doing the following:

```bash
$ git clone https://github.com/whoami-shubham/react-redux-starter.git <my-project-name>
$ cd <my-project-name>
```

When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

## Project Structure


```
.                    
├── public                   # Static public assets (not imported anywhere in source code)
|   ├── index.html           # Main HTML page container for app
├── src                      # Application source code
│   ├── App.js               # Bootstrap main application
│   ├── index.js             # Application bootstrap and rendering with store
│   ├── index.css            # Global Reusable Styles
│   ├── components           # Global Reusable Components
│   │   ├── Home             
│   │   │   ├── Home.js      
│   │   │   ├── Home.css     
│   │   ├── Navbar            
│   │   │   ├── Navbar.js     
│   │   │   ├── Navbar.css    
│   │   ├── Footer             
│   │   │   ├── Footer.js      
│   │   │   ├── Footer.css     
│   │   ├── Actions            
│   │   │   ├── ActionType.js     
│   │   │   ├── ActionCreator.js   
│   │   ├── Appreducer            
│   │   │   ├── Appreducer.js     
│   │      
│   │           
│   │       
│   ├── store.js                # Redux-specific pieces

```

## live-demo
[demo](https://whoami-shubham.github.io/react-redux-starter/)
