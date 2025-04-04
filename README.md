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