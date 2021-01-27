/* 1º Sabemos que un número de teléfono en España está formado por, un número de tres o
 dos cifras, que indican el prefijo de la comunidad autónoma, además consta de 3 pares
 de números que pueden estar separados por espacios o no. Valida si es válido un número
 del tipo 952 35 42 77 o 952354277.*/

// const pattern = /^\d{3}(\s?\d{2}){3}$/;
// const values = ['952 35 42 77', '952354277'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


/* 2º También sabemos que los números de teléfono en España pueden empezar por 9 si se
 trata de números fijos, o con 6 si son números móviles. Utiliza la expresión regular
 del ejercício anterior para que ahora pueda validar números que empiecen por 9 o 6.
 Ejemplo 952 35 42 77 , 652 35 42 77 , 952354277 o 652354277.*/

// const pattern = /^(9|6)\d{2}(\s?\d{2}){3}$/;
// const values = ['952 35 42 77', '652 35 42 77', '952354277', '652354277'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


/* 3º Es normal ver números con el siguiente formato +34 952 63 19 80 . El 34 es el
 código del país (en nuestro caso España). Mejora la expresión regular de nuestro
 validador de números de teléfono para que pueda aceptar el código del país.*/

// const pattern = /^((\+34)\s)?(9|6)\d{2}(\s?\d{2}){3}$/;
// const values = ['952 35 42 77', '+34 652 35 42 77', '+34 952354277', '652354277'];
 
// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


/* 4º También es tipico ver números de teléfonos con el siguiente formato
 (+34) 952 63 19 80 . Mejora la expresión regular anterior para que pueda aceptar los
 paréntesis del código del país.*/

// const pattern = /^((\+34|\(\+34\))\s)?(9|6)\d{2}(\s?\d{2}){3}$/;
// const values = ['952 35 42 77', '+34 652 35 42 77', '(+34) 952354277', '652354277'];
  
// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


/* 5º En España el NIE (número de indentificación de extranjero) comienza por las
 letras X, Y o Z seguido de 7 números y una letra. Dado un NIE del formato X 1234567P ,
 X1234567P o X 1234567 P , indica si es un NIE válido o no.*/

// const pattern = /^(X|Y|Z)\s?\d{7}\s?[A-Z]$/;
// const values = ['X 1234567P', 'X1234567P', 'X 1234567 P'];
  
// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


/* 6º Otra manera de representar el NIE es separando los 7 dígitos y la letra por un
 guión. Ejemplo X 1234567-P . Mejora la expresión regular anterior sobre el NIE para
 que ahora pueda aceptar el guión o no.*/

// const pattern = /^(X|Y|Z)\s?\d{7}(\s|-)?[A-Z]$/;
// const values = ['X 1234567P', 'X1234567P', 'X 1234567 P', 'X 1234567-P'];
   
// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


/* 7º Un código postal es un número de 4 dígitos, los dos primeros indican la provincia
 a la que pertenece. Valida si el siguiente código postal 29015 está bien formado para
 la provincia de Málaga. Sabemos que el CP de Málaga empieza por 29.*/

// const pattern = /^(29)\d{3}$/;
// const value = '29015';
   
// console.log(`Regex "${value}"? ->`, pattern.test(value));


/* 8º Valida ahora que además un CP sea de Málaga y de Madrid. Sabemos que el CP de
Madrid empieza por 28. Ejemplo: 28024*/

// const pattern = /^(29|28)\d{3}$/;
// const values = ['29015', '28024'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


/* 9º Valida ahora que además un CP sea de Málaga, Madrid y Barcelona. Sabemos que el
CP de Barcelona empieza por 08. Ejemplo: 08024*/

// const pattern = /^(29|28|08)\d{3}$/;
// const values = ['29015', '28024', '08024'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });


/* 10º En html podemos determinar un color según la propiedad RGB. RGB consta de 3
números separados por comas y puede tener un espacio o no. Cada uno de esos números
pueden ser de 1, 2 o 3 dígitos. Crea una expresión regular que valide si es un color
RGB válido o no. Ejemplo: RGB(128, 128, 0) o rgb(128, 128, 0) .*/

// const pattern = /^(\d{1,3},\s){2}\d{1,3}$/;
// const values = ['128, 128, 0', '12, 812, 80', '12, 81, 280'];

// values.forEach(value => {
//     console.log(`Regex "${value}"? ->`, pattern.test(value));
// });