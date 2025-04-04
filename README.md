# API REST para la administración de campañas publicitarias

## Requisitos
- Node.js >= 20.15.0
- Sequelize CLI
- Un SMBD compatible con MariaDB/MySQL configurado

## Instalación
1. Clonar el repositorio utilizando git.
2. Asegurarse que la rama main esté actualizada con el repositorio.
3. Instalar dependencias con 
    ```
    npm i
    ```
4. Crear un archivo **.env** que contenga los siguientes valores y establecerlos de acuerdo al entorno local
    ```
    PORT={puerto disponible para el proceso}
    NODE_ENV=develop
    DB_USERNAME={nombre del usuario de la bd}
    DB_HOST={host de la bd}
    DB_PASSWORD={password de la bd}
    JWT_SECRET={cadena de texto usada para la firma del JWT}
    CORS_ORIGIN={host donde se ejecuta el frontend} // ejemplo http://localhost:5173 para react
    ```
5. Configurar la base de datos usando Sequelize
    ```
    npm run create-db
    npm run migrate
    ```

6. Ejecutar con:
    ```
    npm run dev
    ```

## Endpoints

Los endpoint que reciben un payload debe estar en formato JSON como se explica a continuación, así mismo, si es necesario incluir parámetros deberán incluirse dentro de la url del endpoint.

El uso del JWT es manejado por medio de cookies, por lo tanto, se debe configurar el servicio utilizado para que envíe las cookies junto con la solicitud. En el caso de Postman se hace de manera automática.

- User
    - GET
        1. /users/all
            
            Devuelve la lista completa de todos los usuarios registrados.
        
        2. /users/check/auth

            Verifica si el usuario contiene un token válido actualmente.
    - POST
        1. /users/

            Crea un usuario de tipo administrador sin solicitar un token, útil para crear un primer usuario en la BD. El valor isSuperAdmin se utiliza para indicar si el usuario tiene privilegios elevados y debe ser asignado a true o false según sea el caso.

            Payload con ejemplo de valores
            ```
            {
                "name": "Robert",
                "last_name": "Smith",
                "email": "rob.smith@gmail.com",
                "password": "robsmith",
                "isSuperAdmin": false
            }
            ```

        2. /users/admin

            Crea un usuario de tipo administrador solicitando un token válido. El valor isSuperAdmin se utiliza para indicar si el usuario tiene privilegios elevados y debe ser asignado a true o false según sea el caso.

            Payload con ejemplo de valores
            ```
            {
                "name": "Robert",
                "last_name": "Smith",
                "email": "rob.smith@gmail.com",
                "password": "robsmith",
                "isSuperAdmin": false
            }
            ```
        3. /users/logout

            Cierra la sesión del usuario eliminando su token actual.

        4. /users/login

            Inicia sesión si los datos recibidos son válidos.
            
            Payload con ejemplo de valores
            ```
            {
                "email": "rob.smith@gmail.com",
                "password": "robsmith",
            }
            ```
- Campaign
    - GET
        1. /campaigns/:campaign_id

            Devuelve los datos de la campaña con el id asignado en el parámetro :campaign_id.
        2. /campaigns/all

            Devuelve la lista de todas las campañas registradas.

        3. /campaigns/status/:status

            Devuelve la lista de todas las campañas registradas que tengo el estado asignado en el parámetro :status. Status puede ser active, paused o completed.

    - POST
        1. /campaigns/

            Crea una nueva campaña ,

            Payload con ejemplo de valores
            ```
            {
                "title": "Book selling 4",
                "description": "This campaign was started to show Facebook's ads",
                "status": "completed",
                "budget": 1000,
                "start": "2025-04-03T15:00:00.000Z",
                "end": "2025-04-23T15:00:00.000Z"
            }
            ```
    - DELETE
        1. /campaigns/:campaign_id
            
            Elimina la campaña con el id asignado en el parámtero :campaign_id. El usuario debe proveer un token que avale que tiene privilegios elevados.
    - PATCH
        1. /campaigns/:campaign_id

            Actualliza la campaña con el id asignado en el parámetro :campaign_id. Se debe establecer los valores que se requieren actualizar en el payload.

            Payload con ejemplo de valores
            ```
            {
                "title": "Title updated",
                "budget": 8000
            }
            ``` 
- Dashboard
    - GET
        1. /dashboard/

            Devuelve un pequeño análisis de estadísticas sobre las campañas registradas brindando los siguientes datos
            - Total de campañas
            - Total de presupuesto invertido
            - Campañas agrupadas por estado

## Colección de Postman
Dentro del repositorio se encuentra un archivo llamado **Ad-Campaign-API.postman_collection.json** que puede ser exportado para su uso con todos los endpoints descritos anteriormente.
            