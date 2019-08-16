---
title: "Docker Catch"
date: 2019-08-15T22:33:44-07:00
draft: false
menu:
  docs:
    title: "Docker Catch"
    parent: "Dev Env"
    name: "Docker Catch"
---




## Common Commands 

#### Version and Info
```bash

docker --version 
docker -v 
// returns current version of docker 

docker info
// more details about docker installation 
Containers: 0
 Running: 0
 Paused: 0
 Stopped: 0
Images: 0
Server Version: 17.12.0-ce
Storage Driver: overlay2
...
```

#### List Images and Containers

```bash 
docker image ls 
// list all image on host 

docker container ls 
docker container ls --all
docker container ls -aq
// list all containers 
```

### Simple Hello World 

```bash 

docker run hello-world 
```

### Simple Ubuntu Container 
```bash 
docker run -ti --rm ubuntu bash
// generates a ubuntu image
// -ti flag : terminal interactive 
^D or exist 
// escapes the container 
```

## Docker Flow 

imgae --> ```docker run <image/container>``` --> running container --> stopped container --> ```docker commit <container Id>```--> New Image

##  Running things in Docker 

Containers have one main process 

```
docker run --rm -ti ubuntu sleep 5
// run process --> remove container 
```

```bash
docker run -d -ti <some-container-name>
// -d detached container 

docker attach <some-container-name>
```


##### Docker Log
```bash
docker logs <container-name>
```

##### Kill
```bash
docker kill <some-container-name>
```

##### RM 
```bash
docker rm <some-container-name>
```

## Lessons from the Field
- Don't let your containers fetch dependencies when they start 
- Don't leave important things in unnamed stopped containers 

## Container Networking 
