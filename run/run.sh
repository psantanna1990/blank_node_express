#!/bin/bash

# set -e

printf "\n"
printf '==================================================================================\n'
printf '========== INICIADO SCRIPT DE RUN CONFIGURADO PARA NODEMON ============\n'
printf '==================================================================================\n'
printf "\n"

printf "\n"
printf "NPM Install local \n"
printf "\n"

npm install 

printf "\n"
printf "Subindo o docker-compose \n"
printf "\n"

docker-compose -f $PWD/run/docker-compose.yaml up --build