# Reto Tecnico Fullstack Pokedex
## * Proyecto Backend


## Pasos para intalacion y funcionamiento de proyecto backend

Este projecto requiere [Node.js](https://nodejs.org/) para funcionar.
A continuacion debe de seguir los siguientes pasos para poder utilizar este proyecto backend.
## 1. Clonar el respositorio:
Para realizar este paso, es necesario abrir una terminal cualquiera de su preferencia, Bash, Power Shell, queda a su discrecion.
Una vez abierta la terminal, hay que hacer un cd a la carpeta en la que queremos almacenar el proyecto, una vez estando en la carpeta en la que se almacenara el proyecto, hay que ejecutar el siguiente comando:
```sh
git clone https://github.com/MemoSan27/reto-tecnico-3-backend <project_local_name>
```
> Nota: el apartado `<project_local_name>` es opcional, este sirve para poner un nombre personalizado al repositorio, si no necesita cambiar el nombre, solamente hay que copiar el comando de clonacion de la siguiente manera:
```sh
git clone https://github.com/MemoSan27/reto-tecnico-3-backend 
```

## 2. Abrir visual studio code
Una vez clonado el respositorio, debemos abrir la carpeta clonada en nuestro visual studio code para comenzar las instalaciones previas

## 3. Instalacion de modulos de node  
Una vez abierto visual studio code, debemos abrir una terminal ya sea en el proyecto o afuera del proyecto, es importante mencionar que debemos estar en la carpeta del proyecto para poder ejecutar el siguiente comando:
```sh
npm install
```
## 4. Configurar variable de entorno (Opcional)
Este paso es opcional debido a que si no se asigna un valor a la variable de entorno que en este caso sirve para seleccionar el puerto "PORT" en el que queremos trabajar, si no se asigna automaticamente trabajara en el puerto 3001.
En este proyecto solo se utiliza una variable de entorno llamada "PORT". la cual encontraremos en el archivo que esta en la raiz del proyecto, este archivo tiene el nombre de ".env.template", el cual debemos seleccionar y copiar, y en la misma raiz del proyecto pegarlo.
Al pegar en la raiz del proyecto la copia de el archivo ".env.template", hay que cambiar el nombre y su nombre debe quedar solamente de la siguiente manera:
```sh
.env
```
Una vez creado este nuevo archivo ".env" debemos asignar a la variable "PORT" el numero de puerto en el que vamos a querer trabajar.

## 5. Inicializar el servidor
Este es el ultimo paso en el cual vamos a correr nuestro servidor para poder utilizar en proyecto en el frontend ya sea en el que le brindamos o en su propio proyecto personal frontend simplemente usando nuestros endpoints.
Para lograr la inicializacion del servidor debemos ejecutar el siguiente comando:
```sh
node src/index.js
```


> Con estos sencillos pasos hemos llegado al final del manual de instalacion del proyecto, cualquier duda o problema favor de notificar al desarrollador del proyecto.