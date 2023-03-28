# Desarrollo de Software

Repositorio personal creado para llevar adelante el cursado de la materia Desarrollo de Software de la UTN FRC

## Tecnologías utilizadas

<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
  <img src="images/react_logo.png" alt="React logo" style="max-width: 18%; margin-bottom: 10px;">
  <img src="images/express_logo.png" alt="Express logo" style="max-width: 18%; margin-bottom: 10px;">
  <img src="images/node_logo.png" alt="Node.js logo" style="max-width: 18%; margin-bottom: 10px;">
  <img src="images/sequelize_logo.png" alt="Sequelize logo" style="max-width: 18%; margin-bottom: 10px;">
  <img src="images/sqlite_logo.png" alt="SQLite logo" style="max-width: 18%; margin-bottom: 10px;">
</div>

<p align="center"> <em>Stack Utilizado</em></p>

* React
* Express
* Node js
* Sequelize
* SQLite

## Instalación

1. Instalar [node](https://nodejs.org/en)
2. Instalar [react](https://es.reactjs.org/)
3. Instalar [Sequelize-cli](https://sequelize.org/) 


2. Cambiar dirctorio de trabajo

```
cd 01-ejemplo
```

3. Usar el package manager [npm](https://www.npmjs.com/) para reconstruir las dependencias.

```
npm install
```

## Ejecución

1. Cambiar directorio de trabajo a la carpeta backend
```
cd ./backend
```

2. Ejecutar migraciones 

```
npx sequelize-cli db:migrate
```

3. Seeding Base de datos
```
npx sequelize-cli db:seed:all
```
4. Ejecutar Backend:
```
npm start
```

5. En otra terminal cambiar directorio de trabajo a la carpeta frontend y ejecutar

```
cd ./frontend
npm start
```