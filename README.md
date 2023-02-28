# Survey

Survey Tool created by TECHNIA to assess how mature the product life cycle management (PLM) process is for a company.

## Prerequisite

You must have Docker Installed in your System !!

- Download Docker for Windows (https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)
- Details : https://docs.docker.com/desktop/install/windows-install

## Installation

#### Development Environment :

- IDE : VS Code (https://code.visualstudio.com/download)
- Clone this repository locally
- Create admin user for the application : Add a file users.json under Survey/server/src/data/ and copy contents from example_users.json and change username,password,email accordingly.
- Copy the content of docker-compose-dev.yml to docker-compose.yml
- Create .env file under root (Survey) folder and copy .env.example to .env file
- Create .env file under Survey/server folder and copy .env.example to .env file
- Configure ports and database user settings in both the .env files
- Configure Email Settings in .env file under server folder (can use https://mailtrap.io/ for development purpose or any gmail account)
- Example : Gmail settings for .env file
  ```
  - EMAIL_HOST = smtp.gmail.com
  - EMAIL_PORT = 465
  - EMAIL_ACCOUNT = test@gmail.com
  - EMAIL_PASSWORD = myGmailPassword
  ```
- Navigate to root folder which contains docker-compose.yml file and run below in CMD
- Settings.json is property file for this application

```bash
  $ docker-compose up -d
```

#### Production Environment :

- Copy the content of docker-compose-prod.yml to docker-compose.yml
- Create .env file under root (Survey) folder and copy .env.example to .env file
- Create .env file under Survey/server folder and copy .env.example to .env file
- Configure ports and database user settings in both the .env files
- Configure Email Settings in .env file under server folder
- Navigate to root folder which contains docker-compose.yml file and run below in CMD

```bash
  $ docker-compose up -d
```

#### Open Portainer on http://localhost:9000/ and create user/Password and login to manage all the services(After login Portainer should look like below)

## Features

Following applications will be installed after above command

- Client (React) : http://localhost:3000/ 
 ![React](https://bitbucket.org/technia/technia-survey/src/develop/demo/Frontend.PNG)
- Server (Node) : http://localhost:5000/
 ![Server](https://bitbucket.org/technia/technia-survey/src/develop/demo/Backend.PNG)
- Database (MongoDb) : http://localhost:27019/
- Database GUI (Mongo-Express): http://localhost:8081/
 ![React](https://bitbucket.org/technia/technia-survey/src/develop/demo/Database_GUI.PNG)
- Portainer : http://localhost:9000/
 ![React](https://bitbucket.org/technia/technia-survey/src/develop/demo/Portainer.PNG)

Add username and passowrd after opening portainer UI and then Portainer will manager all the applications to view logs and open bash in UI for each container

## Tech Stack

**Client:** React, Redux, Material-UI

**Server:** Node, Express

**Database:** MongoDB

## Usage/Examples

- When running app in development mode, hot reloading in client and server is enabled by default.
- To stop or start a container use portainer UI
 ![N|Solid](https://bitbucket.org/technia/technia-survey/src/develop/demo/Container.PNG)

## Useful Mongo Commands

- Connect to MongoDB database (non-Authenticated) :

```bash
  $ mongo --port 27019
```

- Connect to MongoDB database (Authenticated):

```bash
  $ mongo -u user -p myPassword localhost --authenticationDatabase=admin -port 27019
```

## Useful Docker Commands

```bash
  $ docker --help
```

- Check All Running Container

```bash
  $ docker ps
```

- Stop Container

```bash
  $ docker stop CONTAINER_ID
```

- Delete Container

```bash
  $ docker rm CONTAINER_ID
```

- Check All Docker Images

```bash
  $ docker image ls
```

- Delete Docker Image

```bash
  $ docker rmi IMAGE_ID
```

- Create Image

```bash
$ docker build -t test-prod -f Dockerfile.prod .
$ docker run -d -p 8080:80 --name test-prod-app test-prod
$ docker exec -it CONTAINER_ID bash
```

- Start single container of a docker-compose file

```bash
  $ docker-compose up -d client
```

- Open Container in cmd

```bash
  $ docker exec -it CONTAINER_ID bash
```

- Build Application from docker-compose (root) file

```bash
  $ docker-compose up --build --remove-orphans or docker-compose up -d
```

- Remove Containers

```bash
  $ docker-compose down
```
