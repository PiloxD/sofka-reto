# sofka-reto
Reto técnico para sofkaU
Autor: Andrés Camilo Díaz Merlano
Tecnologías usadas: {
- NodeJS para el backend
- React para el frontend
- MongoDB Atlas para la base de datos
}

¿Cómo encender la aplicación?

- Descargar el repositorio de GitHub, está dividido en 2 carpetas "retosofka-backend" y "retosofka-frontend"
- Entrar en la carpeta de "retosofka-backend" y desde la consola ejecutar el comando npm install (Instalar dependencias ). Una vez instaladas ejecutar el comando npm run server (Esto para correr el servidor de NodeJS)
- Entrar en la carpeta de "retosofka-frontend" y desde la consola ejecutar el comando npm install (Instalar dependencias ). Una vez instaladas ejecutar el comando npm run start (Esto para correr la aplicación de react)

¿Cómo funciona la aplicación?
Una vez esté corriendo el programa:
- Encontraremos en el home un formulario para ingresar el usuario
- Luego de ingresar el usuario serás redirigido al nivel de preguntas #1
- Le das click en iniciar (botón superior) y tendrás una pregunta aleatoria de la categoría #1
- Selecciona la respuesta correcta y pulsa en adelante 
- Así funciona con todos los niveles
- Pulsa el botón de volver para retirarte del juego con el puntaje acumulado (Quedará guardado en la base de datos con tu usuario)

Sobre la aplicación:
- Tiene 5 preguntas por cada una de las 5 categorías
- En total  son  25 con la posibilidad de escalar a cualquier número de preguntas deseadas (API para registrar preguntas) 
- Todos los usuarios son guardados en la base de datos con su puntaje actual (según su desempeño en el concurso)

URL:

Home de la aplicación: http://localhost:3000/
APIs:
- http://localhost:8080/api/ask/addask (Agregar preguntas)
- http://localhost:8080/api/ask/ask/bycategory/:level (Requerir una pregunta aleotoria según su nivel)
- http://localhost:8080/api/player/addplayer (Agregar un concursante)
- http://localhost:8080/api/player/searchplayer/:usernamePlayer (Buscar un concursante)
- http://localhost:8080/api/player/updatescore/:filter/:update (Actualizar el puntaje del concursante)


Cualquier pregunta o duda escribir al siguiente email:
andresdm1997@gmail.com
andiazm@unal.edu.co
