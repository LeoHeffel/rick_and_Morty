
# Rick and Morty App

Aplicación creada para integrar los  conocimientos adquirdos en el
bootcamp de Henry.

## Consta de las siguientes secciones:

 - [Front End](")
 - [Back End](")
 - [Databases * (proximamente)](")


## Features Frontend

- Login simulado para  proteccion de rutas
- Control de duplicacion de personajes 
- Alerta de personaje inexistente
- Control de busqueda por  id valido
- Control de render de elementos vacios. 
- Manejo de favoritos a traves de Redux 
- CRUD favoritos a traves de API
- Al eliminar la card de un personaje tambien se elimina de los favoritos

## Features Backend
- Sin Persistencia de datos. (array en memoria)
- Modularizado en Rutas/Controladores/App
- Control de errores con try/catch -> envio del mensaje de error al front
- Envio error de request ruta inexistente
## API Reference

#### Get Character

```http
  GET /rickandmorty/character/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Your character id |

returns object whith character info or error if not found

#### Get Character Detail

```http
  GET /rickandmorty/detail/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Your character id |

returns object whith character details or error if not found
#### Get Favorite

```http
  GET /rickandmorty/fav
```

Returns array whith Favorites

#### Post Favorite

```http
  POST /rickandmorty/fav/
```

Adds a Favorite recived by body,

Returns array whith updated favorites or error if favorite already exists

#### Delete Favorite

```http
  DELETE /rickandmorty/fav/${id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Your character id |

Remove a Favorite recived by params,

Returns array whith updated favorites or error if favorite don't exists
## Installation

Install my-project with pnpm

to start Backend
```bash
  cd back
  pnpm start (open with nodemon)
  port: 3001
```
to start FrontEnd
```bash
  cd front
  pnpm start (open with react-scripts)
  port:3000
```