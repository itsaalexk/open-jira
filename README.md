# NextJs OpenJira App
 Para poder ejecutar el proyecto localmente , hay que ejecutar la DB con la imagen de Docker
 ```
 docker-compose up -d
 ```

* El -d significa __detached__d


MongoDB local URL:

```
mongodb://localhost:27017/entriesDB
```
## Configurar las variables de entorno

Renombrar el archivo __.env.example__ a __.env__ y cambiar los valores con tus propias variables de entorno

## Llenar la base de datos con test info

Llamar a: 

```http://localhost:3000/api/seed ```
