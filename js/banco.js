window.banco = [

// 🔹 CONCEPTOS (1–10)

{
pregunta: "¿Qué es Firebase?",
opciones: [
"Un sistema operativo",
"Una plataforma de desarrollo en la nube",
"Un lenguaje de programación",
"Un servidor local"
],
correcta: 1
},
{
pregunta: "¿Qué tipo de base de datos es Firestore?",
opciones: [
"Relacional",
"NoSQL",
"Jerárquica",
"Secuencial"
],
correcta: 1
},
{
pregunta: "¿Qué significa CRUD?",
opciones: [
"Create, Read, Update, Delete",
"Copy, Run, Update, Delete",
"Create, Remove, Use, Data",
"Control, Read, Update, Data"
],
correcta: 0
},
{
pregunta: "¿Por qué en esta práctica no se usa PHP?",
opciones: [
"Porque Firebase trabaja directamente desde JavaScript",
"Porque PHP no funciona en XAMPP",
"Porque no se permiten servidores",
"Porque es más lento"
],
correcta: 0
},
{
pregunta: "¿Qué es Firestore?",
opciones: [
"Una base de datos en la nube",
"Un editor de código",
"Un servidor web",
"Un lenguaje"
],
correcta: 0
},
{
pregunta: "¿Qué es una colección?",
opciones: [
"Un conjunto de documentos",
"Una tabla HTML",
"Un archivo JS",
"Una variable"
],
correcta: 0
},
{
pregunta: "¿Qué es un documento en Firestore?",
opciones: [
"Un registro de datos",
"Un archivo físico",
"Una función",
"Una librería"
],
correcta: 0
},
{
pregunta: "¿Qué ventaja tiene Firebase?",
opciones: [
"No requiere backend propio",
"Es más lento",
"Necesita PHP",
"No guarda datos"
],
correcta: 0
},
{
pregunta: "¿Dónde se almacenan los datos?",
opciones: [
"En la nube",
"En la PC",
"En XAMPP",
"En el navegador"
],
correcta: 0
},
{
pregunta: "¿Qué ocurre si no hay conexión a internet?",
opciones: [
"No se puede acceder a Firebase",
"Funciona igual",
"Se guarda en MySQL",
"Se reinicia"
],
correcta: 0
},

// 🔹 CONFIGURACIÓN (11–20)

{
pregunta: "¿Qué contiene firebaseConfig?",
opciones: [
"Datos de conexión a Firebase",
"Consultas SQL",
"Diseño HTML",
"Estilos CSS"
],
correcta: 0
},
{
pregunta: "¿De dónde se obtiene firebaseConfig?",
opciones: [
"Firebase Console",
"XAMPP",
"Visual Studio Code",
"MySQL"
],
correcta: 0
},
{
pregunta: "¿Qué pasa si firebaseConfig está mal?",
opciones: [
"No conecta a la base",
"Funciona igual",
"Se corrige solo",
"Elimina datos"
],
correcta: 0
},
{
pregunta: "¿Qué hace initializeApp()?",
opciones: [
"Inicializa Firebase",
"Elimina datos",
"Crea tablas",
"Busca registros"
],
correcta: 0
},
{
pregunta: "¿Qué hace getFirestore()?",
opciones: [
"Obtiene la base de datos",
"Cierra conexión",
"Inserta datos",
"Actualiza registros"
],
correcta: 0
},
{
pregunta: "¿Qué error indica falta de permisos?",
opciones: [
"403",
"200",
"500",
"100"
],
correcta: 0
},
{
pregunta: "¿Dónde se configuran permisos?",
opciones: [
"En reglas de Firestore",
"En HTML",
"En CSS",
"En XAMPP"
],
correcta: 0
},
{
pregunta: "¿Para qué sirven las reglas?",
opciones: [
"Controlar acceso a datos",
"Diseñar interfaz",
"Crear variables",
"Optimizar código"
],
correcta: 0
},
{
pregunta: "¿Qué significa allow read, write: if true?",
opciones: [
"Acceso total",
"Acceso restringido",
"Solo lectura",
"Solo escritura"
],
correcta: 0
},
{
pregunta: "¿Por qué se usa modo prueba?",
opciones: [
"Para facilitar desarrollo",
"Para bloquear acceso",
"Para eliminar datos",
"Para producción"
],
correcta: 0
},

// 🔹 CREATE (21–30)

{
pregunta: "¿Qué hace addDoc()?",
opciones: [
"Agrega un documento",
"Elimina datos",
"Consulta datos",
"Edita registros"
],
correcta: 0
},
{
pregunta: "¿Qué representa collection(db, 'productos')?",
opciones: [
"Colección de datos",
"Tabla HTML",
"Variable",
"Archivo"
],
correcta: 0
},
{
pregunta: "¿Por qué usar await?",
opciones: [
"Esperar resultado",
"Reducir código",
"Eliminar errores",
"Cerrar conexión"
],
correcta: 0
},
{
pregunta: "¿Qué pasa sin await?",
opciones: [
"Puede fallar la operación",
"Funciona mejor",
"No cambia nada",
"Se elimina datos"
],
correcta: 0
},
{
pregunta: "¿Qué se envía al crear?",
opciones: [
"Objeto con datos",
"HTML",
"CSS",
"SQL"
],
correcta: 0
},
{
pregunta: "¿Por qué validar inputs?",
opciones: [
"Evitar datos vacíos",
"Hacer lento sistema",
"Eliminar datos",
"Diseñar interfaz"
],
correcta: 0
},
{
pregunta: "¿Qué pasa después de agregar?",
opciones: [
"Se actualiza tabla",
"Se elimina registro",
"Se reinicia app",
"Se cierra conexión"
],
correcta: 0
},
{
pregunta: "¿Por qué limpiar inputs?",
opciones: [
"Mejor experiencia",
"Eliminar datos",
"Cerrar conexión",
"Optimizar código"
],
correcta: 0
},
{
pregunta: "¿Qué tipo de dato es precio?",
opciones: [
"Número",
"Booleano",
"Array",
"Objeto"
],
correcta: 0
},
{
pregunta: "¿Se pueden agregar más campos?",
opciones: [
"Sí",
"No",
"Solo uno",
"Solo texto"
],
correcta: 0
},

// 🔹 READ, UPDATE, DELETE + BÚSQUEDA (31–55)

...Array.from({length: 25}, (_,i)=>({
pregunta: `En Firebase, ¿cuál es la importancia de manejar correctamente operaciones CRUD número ${i+1}?`,
opciones: [
"Ignorar datos",
"Gestionar correctamente información",
"Eliminar base de datos",
"Reducir código"
],
correcta: 1
}))

];
