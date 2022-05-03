## Getting Started

This document is intended to get you started quickly in building a fullstack Node.js app complete with frontend, backend and PostgreSQL database.

We will use Docker Compose to connect and network each container together so that they are easy to share among project contributors, and deploy to a hosting service when ready.

### Advantages
We want to make it easy to build and test an application with a copy of the database on the developers' local machine, without being required  to install the database software (in our case PostgreSQL) directly into the machine.

If you follow this document, you will have a basic, working application running on your machine and querying a Postgres DB without the need to have either Node.js or Postgres installed directly into your machine. They will be installed into Docker containers and networked together. This should provide a "sandbox" to work inside of, thus adding a security separation between the application and your local machine during development. The only tool you will need to get started is Docker.

## Prerequisites

The only prerequisite software required to have installed at this point is a code editor - we will use VS Code (VSC) - and Docker.

### Docker

How you install Docker will depend on the operating system you are running. Follow the installation instructions for your operating system:

To use this project you must have [Docker](https://www.docker.com/get-started) and Docker Desktop installed. Follow the directions for your operating system to install both tools:

- Windows: [https://docs.docker.com/desktop/windows/install/]. Windows users typically will be using WSL2. Check out [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-2---check-requirements-for-running-wsl-2) to make sure your machine will do so.
- Mac & Linux: [https://docs.docker.com/desktop/mac/install/]

When installing Docker, Docker Desktop should also be installed. It provides a nice GUI for working with Docker. We will use Docker primarily through the command line, but we will also use Docker Desktop to confirm things visually.

### Test

Check that the install worked by opening a terminal and run this command:

```bash
docker --version
```
You should see something similar to this (your version may be different):
  `Docker version 20.10.13, build a224086`

In addition, ensure that the Docker Desktop tool is installed and running by:
  - Windows:
    - find and open the system tray,
    - click the Docker whale
    - select Dashboard
    - the Dashboard window should open
  - Mac:
    - find the Docker whale (top-right of screen),
    - click the Docker whale
    - select Dashboard
    - the Dashboard window should open

## Build the Project Image and Containers:

1. Open the downloaded project folder (where this file is located) in VS Code (VSC).
2. Open the VSC terminal: Terminal > New Window.
3. Run the following command in the terminal:

  ```bash
  docker-compose up --build
  ```
4. The first time it may take a few minutes, depending on the speed of your computer and the speed of your Internet connection. If everything works, then:
  - In the terminal window you should see two lines that say:
    `[nodemon] starting 'node index.js'`
    `Example app listening at http://localhost:5500`
5. Return to or find and open the Docker dashboard:
  - Click "Containers / Apps"
    - an image containing the same name as the folder should exist
    - it should be green and say "Running"

## Test in a browser

Go to [http://localhost:5500]()

You should see a welcome page for the application

### What is Docker?

[Docker](https://docs.docker.com/get-started/overview/) is a tool that allows you to package the environment for running your application along with the application itself.  You can accomplish this as simply as including a single file called `Dockerfile` with your project.

It uses a concept it calls _containers_ which are lighter weight (require less resources) than virtual machines to create the environment for your application.  These containers are designed to be extremely _portable_ which means that you can quickly deploy them anywhere, and also scale up your app quickly by simply deploying more copies of your container.  

All you need to do is define the requirements for your environment in the `Dockerfile` (for example Ubuntu 18, Node.js, etc) and every time your container is started on any machine, it will recreate exactly that environment. So you already know in advance that you will not have any issue with missing dependencies or incorrect versions.

That said, it can be challenging to really demonstrate the need for Docker to those new to the development world who haven't yet experienced a lot of the problems that it solves.  


## Useful Docker Commands

List all running or active containers:

```bash
docker ps
```
Start a container in the background (the id can be the entire id or any part - typically the first 3 characters):

```bash
docker run -d IMAGE_ID
```

Stop a container or image (the id can be the entire id or any part - typically the first 3 characters):
```bash
docker stop {container}/{image} {CONTAINER_ID} / {IMAGE_ID}
```

Remove a container, image, volume or network where ID is the id of the container/image/volume or network.

```bash
docker {container}/{image}/{volume}/{network} rm ID
```

View logs of a container:

```bash
docker container logs CONTAINER_ID
```

View information about a container:

```bash
docker container inspect CONTAINER_ID
```

Open a shell inside an active container so you can run terminal commands inside of it.  

```bash
docker exec -it CONTAINER_ID /bin/sh
```

Stop a container:

```bash
docker container stop CONTAINER_ID
```

Remove all dangling/unused Docker data (cached layers, volumes no longer used, etc):

```bash
docker system prune
```

You can also use the above command with a specific type, like `docker container prune`.  

## Wrapping Up

I hope you learned a lot about why Docker is a fantastic tool in your toolbelt and how you can use it to reduce the amount of friction related to setting up development environments.  The days of fighting with WAMP and MAMP and XAMPP are thankfully long behind us (no slight against those apps, I know they're fantastic tools when configured properly).

Remember that Docker can be used both to create a baseline standard development environment on the machines of many different developers.  But it's not just a development tool, Docker can be used in production as well to simplify the process fo scaling your app up with increased traffic by simply deploying more containers.  

And there's plenty more to learn well beyond what's covered here, the [Docker docs](https://docs.docker.com/) are the best place to start.  All the best in your Docker journey.  

Please check some of my other learning tutorials.  Feel free to leave a comment or question and share with others if you find any of them helpful:

- [Introduction to Docker for Javascript Developers](https://dev.to/alexeagleson/docker-for-javascript-developers-41me)

- [Learnings from React Conf 2021](https://dev.to/alexeagleson/learnings-from-react-conf-2021-17lg)

- [How to Create a Dark Mode Component in React](https://dev.to/alexeagleson/how-to-create-a-dark-mode-component-in-react-3ibg)

- [How to Analyze and Improve your 'Create React App' Production Build ](https://dev.to/alexeagleson/how-to-analyze-and-improve-your-create-react-app-production-build-4f34)

- [How to Create and Publish a React Component Library](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)

- [How to use IndexedDB to Store Local Data for your Web App ](https://dev.to/alexeagleson/how-to-use-indexeddb-to-store-data-for-your-web-application-in-the-browser-1o90)

- [Running a Local Web Server](https://dev.to/alexeagleson/understanding-the-modern-web-stack-running-a-local-web-server-4d8g)

- [ESLint](https://dev.to/alexeagleson/understanding-the-modern-web-stack-linters-eslint-59pm)

- [Prettier](https://dev.to/alexeagleson/understanding-the-modern-web-stack-prettier-214j)

- [Babel](https://dev.to/alexeagleson/building-a-modern-web-stack-babel-3hfp)

- [React & JSX](https://dev.to/alexeagleson/understanding-the-modern-web-stack-react-with-and-without-jsx-31c7)

- [Webpack: The Basics](https://dev.to/alexeagleson/understanding-the-modern-web-stack-webpack-part-1-2mn1)

- [Webpack: Loaders, Optimizations & Bundle Analysis](https://dev.to/alexeagleson/understanding-the-modern-web-stack-webpack-part-2-49bj)

## Table of Contents

1. [Introduction](#introduction)
1. [What is Docker?](#what-is-docker)
1. [Prerequisites](#prerequisites)
1. [Installing Docker](#installing-docker)
1. [Creating a Container](#creating-a-container)
1. [Creating a Node App](#creating-a-node-app)
1. [Deprecating the Node App](#deprecating-the-node-app)
1. [Creating a Dockerfile](#creating-a-dockerfile)
1. [Docker Layers and Cache](#docker-layers-and-cache)
1. [Adding a Docker Volume](#add-a-docker-volume)
1. [What is Docker-Compose?](#what-is-docker-compose)
1. [Adding a Database](#add-a-database)
1. [Connecting the App to the Database](#connecting-the-app-to-the-database)
1. [Adding a Frontend](#add-a-frontend)
1. [Creating a Docker Compose YML File](#creating-a-docker-compose-yml-file)
1. [Adding a pgAdmin Panel (Bonus)](#add-a-pgadmin-panel-bonus)
1. [Useful Docker Commands](#useful-docker-commands)
1. [Wrapping Up](#wrapping-up)
