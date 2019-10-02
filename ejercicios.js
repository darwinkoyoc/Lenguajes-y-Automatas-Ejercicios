
// 1°Toda las palabras que tengan una longitud de 7 o  mas letras.

let mensaje1 = "léxico (scanner): Lee la secuencia de caracteres del programa fuente, carácter a carácter, y los agrupa para formar unidades con significado propio, los componentes léxicos (tokens en inglés).  ";
let newMensaje1 = mensaje1.replace(/[a-z]{7,}/g, "");
console.log(newMensaje1);

// 2°Expresiones que NO finalicen con una vocal.
/*
let mensaje2 = "lexico, arbol";
let newMensaje2 = mensaje2.replace(/[^aeiou]$/g, "");
console.log(newMensaje2);
*/
// 3°Las palabras que inicien con "M" donde la segunda letra no sea vocal.
/*
let mensaje3 = "vivo en la montaña con Mcflay y de martina";
let newMensaje3 = mensaje3.replace(/M(?=[^aeiou])\S+/g, "*");
console.log(newMensaje3);
*/
// 4°Expresiones encerradas entre comillas.
/*
let mensaje4 = "hola \"mundo\" salte a caminar \"estoy aqui\"*";
let newMensaje4 = mensaje4.replace(/"\w+"/g, "");
console.log(newMensaje4);
*/
// 5°Ip´s
/*
let mensaje5 = "La ip de esta maquina es 198.162.1.1 y la ip de esta maquina es 198.162.1.9 y esta no es una ip 1233576767";
let newMensaje5 = mensaje5.replace(/\d{1,3}[.]+\d{1,3}/g, "*");
console.log(newMensaje5);
*/
// 6°Horas
/*
let mensaje6 = "La hora en mexico es 9:04pm, en EU la hora es 8:08am y la de china son las 12:01am ";
let newMensaje6 = mensaje6.replace(/([0-9]+:[0-9]+[am|pm]+)/g, "*");
console.log(newMensaje6);
*/
// 7°Telefono
/*
let mensaje7 = "Es numero es 984-139-03-13 y no 9841390313 ";
let newMensaje7 = mensaje7.replace(/\d{3}+-\d{3}+-\d{2}+-\d{2}/g, "*");
console.log(newMensaje7);
*/
// 8°Correo electronico
/*
let mensaje8 = "el correo es darwin.koyoctun@gmail.com y este no es darwin.koyoctun@gmail-com";
let newMensaje8 = mensaje8.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,6})/g, "*");
console.log(newMensaje8);
*/
//Url
/*
let mensaje9 = "esta es una URL https://es.wikipedia.org igual esta https://www.google.com";
let newMensaje9 = mensaje9.replace(/https:..[a-zA-Z0-9]+\.[a-zA-Z0-9]+\.[a-z]+/g, "*");
console.log(newMensaje9);
 */
// 10°Codigo postal
/*
let mensaje = "esta es un codigo postal 77-300 y este es un codigo postal de argentina 98174964";
let newMensaje = mensaje.replace(/\d{2}+-\d{3}/g, "*");
console.log(newMensaje);
*/

