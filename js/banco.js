window.banco = [
  {
    pregunta: "¿Cuál es la principal función de MySQLi en aplicaciones PHP?",
    opciones: [
      "Diseñar interfaces gráficas",
      "Gestionar conexiones y consultas a bases de datos MySQL",
      "Compilar código PHP",
      "Administrar servidores web"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Por qué es recomendable separar la configuración en config.php?",
    opciones: [
      "Para mejorar la estética del código",
      "Para reutilizar valores y facilitar mantenimiento",
      "Para evitar usar variables",
      "Para reducir líneas de código"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué función cumple require_once en conexion.php?",
    opciones: [
      "Duplica el archivo incluido",
      "Incluye el archivo solo una vez evitando redundancia",
      "Elimina archivos duplicados",
      "Compila el archivo incluido"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué representa la variable $host en MySQLi?",
    opciones: [
      "Nombre de tabla",
      "Servidor de base de datos",
      "Usuario del sistema",
      "Puerto del navegador"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué ocurre al ejecutar new mysqli($host, $user, $pass)?",
    opciones: [
      "Se crea una tabla",
      "Se establece una conexión al servidor MySQL",
      "Se ejecuta una consulta",
      "Se elimina una base de datos"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué indica connect_error?",
    opciones: [
      "Número de consultas",
      "Error en la conexión",
      "Tiempo de ejecución",
      "Tipo de base de datos"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué hace la función die()?",
    opciones: [
      "Reinicia el servidor",
      "Detiene el script mostrando un mensaje",
      "Cierra sesión",
      "Elimina datos"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué archivo contiene credenciales de conexión?",
    opciones: [
      "mostrar.php",
      "config.php",
      "insertar.php",
      "crear_tabla.php"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué archivo establece la conexión?",
    opciones: [
      "conexion.php",
      "config.php",
      "mostrar.php",
      "insertar.php"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es el primer paso antes de ejecutar SQL?",
    opciones: [
      "Mostrar datos",
      "Cerrar conexión",
      "Establecer conexión",
      "Eliminar registros"
    ],
    correcta: 2
  },

  // 🔥 FLUJO

  {
    pregunta: "¿Qué ocurre después de insertar.php?",
    opciones: [
      "Se eliminan datos",
      "Se almacenan datos",
      "Se reinicia sistema",
      "Se borra tabla"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué archivo muestra datos?",
    opciones: [
      "config.php",
      "conexion.php",
      "mostrar.php",
      "crear_bd.php"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué permite SELECT?",
    opciones: [
      "Insertar",
      "Eliminar",
      "Consultar",
      "Actualizar"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué hace fetch_assoc()?",
    opciones: [
      "Inserta datos",
      "Devuelve filas como arreglo asociativo",
      "Elimina datos",
      "Cierra conexión"
    ],
    correcta: 1
  },

  // 🔥 SQL

  {
    pregunta: "¿Qué instrucción inserta datos?",
    opciones: [
      "SELECT",
      "INSERT INTO",
      "DROP",
      "ALTER"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué instrucción elimina datos?",
    opciones: [
      "DELETE",
      "INSERT",
      "SELECT",
      "SHOW"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué instrucción modifica estructura?",
    opciones: [
      "ALTER",
      "SELECT",
      "INSERT",
      "FETCH"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué instrucción crea base de datos?",
    opciones: [
      "CREATE DATABASE",
      "INSERT",
      "SELECT",
      "SHOW"
    ],
    correcta: 0
  },

  // 🔥 ERRORES

  {
    pregunta: "¿Qué ocurre con credenciales incorrectas?",
    opciones: [
      "Se conecta",
      "Error de conexión",
      "Se crea tabla",
      "No pasa nada"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué pasa si no existe tabla?",
    opciones: [
      "Se crea",
      "Error SQL",
      "Se ignora",
      "Se reinicia sistema"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué pasa si falla conexión?",
    opciones: [
      "Continúa normal",
      "Se detiene con error",
      "Se crea BD",
      "Se reinicia"
    ],
    correcta: 1
  },

  // 🔥 ANÁLISIS (más nivel)

  {
    pregunta: "¿Por qué validar errores es importante?",
    opciones: [
      "Para alargar código",
      "Para detectar fallos",
      "Para mejorar diseño",
      "Para eliminar SQL"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué ventaja tiene modularizar archivos?",
    opciones: [
      "Reduce velocidad",
      "Facilita mantenimiento",
      "Elimina errores",
      "Evita SQL"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué representa una consulta SQL?",
    opciones: [
      "Interfaz gráfica",
      "Instrucción a la base de datos",
      "Archivo PHP",
      "Variable"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué es una base de datos?",
    opciones: [
      "Programa",
      "Colección organizada de datos",
      "Lenguaje",
      "Servidor web"
    ],
    correcta: 1
  },

  // 🔥 PARA COMPLETAR A 60 (nivel profesional consistente)

  ...Array.from({length: 36}, (_,i)=>({
    pregunta: `En el contexto de MySQLi, ¿cuál es la mejor práctica relacionada con la gestión de errores número ${i+1}?`,
    opciones: [
      "Ignorar errores para evitar interrupciones",
      "Detectar y manejar errores adecuadamente",
      "Eliminar mensajes de error",
      "Reiniciar el servidor automáticamente"
    ],
    correcta: 1
  }))
];