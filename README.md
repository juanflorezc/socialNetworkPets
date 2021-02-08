# Red social de mascotas

# Desarrollado:
login y registro funcional, además de un API Http REST que consulta las ventas de grandes proveedores, por 4 criterios.

# Ejecución:
la ejecución parte de dos unidades, el api y el frontend, el api se encuentra en: socialNetworkPets\SocialNetworkPets.API\SocialNetworkPets.sln
se debe ajustar la cadena de conexión a la base de datos en el appSettings.json (SocialNetworkPetsDatabase)
La base de datos es una azure sql server, por lo que podría ser un sql server express, la estructura se encuentra en la carpeta raíz, archivo “socialnetwork.sql”
Una vez ajustada la cadena de conexión simplemente se da build y se puede consultar el servicio que retorna las ventas:
https://loginsocialnetworkpets.azurewebsites.net/api/sales/getSales
que permite 4 parametros:
prmNit(string), prmProducto(string), prmProveedor(string), prmFecha(date)
ejemplo:
https://loginsocialnetworkpets.azurewebsites.net/api/sales/getSales?prmNit=201232152
por otro lado esta el frontend en la ruta:
\SocialNetworkPets.Web\SocialNetworkPets
Podemos ingresar a esa ruta por la línea de comandos, solo se requiere tener instalado node.
Una vez en la ruta ejecutamos
Npm install
Ng serve
