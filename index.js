const express = require('express')
const app = express()
const port = 3000
var os = require("os");
var hostname = os.hostname();

app.get('/', (req, res) => res.send(`Hello World! My hostname is ${hostname}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// docker build -t rohitmlabs/docker-hello-world .
// sudo docker run -p 80:3000 rohitmlabs/docker-hello-world
// sudo docker run -p 8080:3000 rohitmlabs/docker-hello-world
// docker login
// docker push rohitmlabs/docker-hello-world
// https://kubernetes.io/docs/tasks/tools/install-minikube/
// sudo snap install kubectl --classic
// sudo snap install minikube
// brew install kubectl 
// brew install minikube
