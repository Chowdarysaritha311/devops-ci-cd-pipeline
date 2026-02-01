# DevOps CI/CD Pipeline Project

This project demonstrates a complete CI/CD pipeline using **GitHub Actions**, **Docker**, and **Node.js**.

## Workflow
Code Push → Build → Test → Docker Image → Push to DockerHub

## Run Locally
```bash
npm install
npm start
```

## Build Docker Image
```bash
docker build -t devops-ci-cd-app .
docker run -p 3000:3000 devops-ci-cd-app
```

## GitHub Actions Pipeline
Every push to the `main` branch triggers automated testing, Docker build, and pushes image to DockerHub.

## Secrets Required
- DOCKER_USERNAME
- DOCKER_PASSWORD
