Building docker image:
docker build -t rzgholizadeh/simpleweb .
Running docker container with port forwarding:
docker run -p 8080:8080 rzgholizadeh/simpleweb