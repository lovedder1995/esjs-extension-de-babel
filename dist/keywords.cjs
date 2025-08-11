'use strict';

const keywordControl = /* @__PURE__ */ new Map([
  ["exportamos", "export"],
  ["enlazamos", "import"],
  ["retornamos", "return"],
  ["Si", "if"],
  ["y", "if"],
  ["pero", "if"],
  ["tipo_de", "typeof"],
  ["capturar", "catch"],
  ["crear", "new"],
  ["desde", "from"],
  ["elegir", "switch"],
  ["esperar", "await"],
  ["mientras", "while"],
  ["constructor", "constructor"],
  ["eliminar", "delete"],
  ["finalmente", "finally"],
  ["instanciaDe", "instanceof"],
  ["intentar", "try"],
  ["lanzar", "throw"],
  ["longitud", "length"],
  ["romper", "break"],
  ["simbolo", "symbol"],
  ["subcad", "substr"],
  ["producir", "yield"]
]);
const constantLanguage = /* @__PURE__ */ new Map([
  ["falso", "false"],
  ["nulo", "null"],
  ["verdadero", "true"],
  ["indefinido", "undefined"],
  ["Infinito", "Infinity"],
  ["NuN", "NaN"],
  ["ambienteGlobal", "globalThis"]
]);
const variableLanguage = /* @__PURE__ */ new Map([
  ["ambiente", "this"],
  ["super", "super"]
]);
const storageType = /* @__PURE__ */ new Map([
  ["procedimiento", "function"],
  ["asincrono", "async"],
  ["clase", "class"],
  ["const", "const"],
  // ['global', 'var'],
  ["var", "var"],
  ["mut", "let"],
  ["porDefecto", "default"],
  // ['obtener', 'get'],
  // ['establecer', 'set'],
  ["funcion", "function"]
]);
const metaVariable = /* @__PURE__ */ new Map([
  ["de", "of"],
  ["en", "in"]
]);
const supportFunction = /* @__PURE__ */ new Map([
  ["consola", "console"],
  ["depurador", "debugger"],
  ["establecerTemporizador", "setTimeout"],
  ["establecerIntervalo", "setInterval"],
  ["Fecha", "Date"],
  ["Numero", "Number"],
  ["Mate", "Math"],
  ["Arreglo", "Array"],
  ["Matriz", "Array"],
  ["Booleano", "Boolean"],
  ["Cadena", "String"],
  ["Funcion", "Function"],
  ["Promesa", "Promise"]
]);
const promiseMethods = /* @__PURE__ */ new Map([
  ["todos", "all"],
  ["todosTerminados", "allSettled"],
  ["cualquiera", "any"],
  ["capturar", "catch"],
  ["finalmente", "finally"],
  ["carrera", "race"],
  ["rechaza", "reject"],
  ["resuelve", "resolve"],
  ["luego", "then"]
]);
const dateMethods = /* @__PURE__ */ new Map([
  ["obtenerDia", "getDate"],
  ["obtenerDiaSemana", "getDay"],
  ["obtenerAnio", "getFullYear"],
  ["obtenerA\xF1o", "getFullYear"],
  ["obtenerHoras", "getHours"],
  ["obtenerMilisegundos", "getMilliseconds"],
  ["obtenerMinutos", "getMinutes"],
  ["obtenerMes", "getMonth"],
  ["obtenerSegundos", "getSeconds"],
  ["obtenerTiempo", "getTime"],
  ["obtenerDesfaseDeZonaHoraria", "getTimezoneOffset"],
  ["obtenerDiaUTC", "getUTCDate"],
  ["obtenerDiaSemanaUTC", "getUTCDay"],
  ["obtenerAnioUTC", "getUTCFullYear"],
  ["obtenerA\xF1oUTC", "getUTCFullYear"],
  ["obtenerHorasUTC", "getUTCHours"],
  ["obtenerMilisegundosUTC", "getUTCMilliseconds"],
  ["obtenerMinutosUTC", "getUTCMinutes"],
  ["obtenerMesUTC", "getUTCMonth"],
  ["obtenerSegundosUTC", "getUTCSeconds"],
  ["ahora", "now"],
  ["analizar", "parse"],
  ["establecerFecha", "setDate"],
  ["establecerAnio", "setFullYear"],
  ["establecerA\xF1o", "setFullYear"],
  ["establecerHoras", "setHours"],
  ["establecerMilisegundos", "setMilliseconds"],
  ["establecerMinutos", "setMinutes"],
  ["establecerMes", "setMonth"],
  ["establecerSegundos", "setSeconds"],
  ["establecerTiempo", "setTime"],
  ["establecerFechaUTC", "setUTCDate"],
  ["establecerAnioUTC", "setUTCFullYear"],
  ["establecerA\xF1oUTC", "setUTCFullYear"],
  ["establecerHorasUTC", "setUTCHours"],
  ["establecerMilisegundosUTC", "setUTCMilliseconds"],
  ["establecerMinutosUTC", "setUTCMinutes"],
  ["establecerMesUTC", "setUTCMonth"],
  ["establecerSegundosUTC", "setUTCSeconds"],
  ["aCadenaFecha", "toDateString"],
  ["aCadenaISO", "toISOString"],
  ["aJSON", "toJSON"],
  ["aCadenaFechaLocale", "toLocaleDateString"],
  ["aCadenaLocale", "toLocaleString"],
  ["aCadenaTiempoLocale", "toLocaleTimeString"],
  ["aCadena", "toString"],
  ["aCadenaTiempo", "toTimeString"],
  ["aCadenaUTC", "toUTCString"],
  ["UTC", "UTC"],
  ["valorDe", "valueOf"]
]);
const arrayMethods = /* @__PURE__ */ new Map([
  ["posicion", "at"],
  ["concatenar", "concat"],
  ["copiarDentro", "copyWithin"],
  ["entradas", "entries"],
  ["cada", "every"],
  ["llenar", "fill"],
  ["filtrar", "filter"],
  ["buscar", "find"],
  ["buscarIndice", "findIndex"],
  ["buscarUltimo", "findLast"],
  ["buscarUltimoIndice", "findLastIndex"],
  ["plano", "flat"],
  ["planoMapear", "flatMap"],
  ["paraCada", "forEach"],
  ["grupo", "group"],
  ["grupoAMapear", "groupToMap"],
  ["incluye", "includes"],
  ["indiceDe", "indexOf"],
  ["juntar", "join"],
  ["claves", "keys"],
  ["ultimoIndiceDe", "lastIndexOf"],
  ["mapear", "map"],
  ["sacar", "pop"],
  ["agregar", "push"],
  ["reducir", "reduce"],
  ["reducirDerecha", "reduceRight"],
  ["reverso", "reverse"],
  ["sacarPrimero", "shift"],
  ["rodaja", "slice"],
  ["algun", "some"],
  ["ordenar", "sort"],
  ["empalmar", "splice"],
  ["aCadenaLocalizada", "toLocaleString"],
  ["aCadena", "toString"],
  ["agregarInicio", "unshift"],
  ["valores", "values"]
]);
const mathMethods = /* @__PURE__ */ new Map([
  ["absoluto", "abs"],
  ["arcocoseno", "acos"],
  ["arcocosenoHiperbolico", "acosh"],
  ["arcoseno", "asin"],
  ["arcosenoHiperbolico", "asinh"],
  ["arcotangente", "atan"],
  ["arcotangente2", "atan2"],
  ["arcotangenteHiperbolica", "atanh"],
  ["raizCubica", "cbrt"],
  ["redondearHaciaArriba", "ceil"],
  ["cerosALaIzquierdaEn32Bits", "clz32"],
  ["coseno", "cos"],
  ["cosenoHiperbolico", "cosh"],
  ["exponencial", "exp"],
  ["exponencialMenos1", "expm1"],
  ["redondearHaciaAbajo", "floor"],
  ["redondearAComaFlotante", "fround"],
  ["hipotenusa", "hypot"],
  ["multiplicacionEntera", "imul"],
  ["logaritmo", "log"],
  ["logaritmoBase10", "log10"],
  ["logaritmoDe1Mas", "log1p"],
  ["logaritmoBase2", "log2"],
  ["maximo", "max"],
  ["minimo", "min"],
  ["potencia", "pow"],
  ["aleatorio", "random"],
  ["redondear", "round"],
  ["signo", "sign"],
  ["seno", "sin"],
  ["senoHiperbolico", "sinh"],
  ["raizCuadrada", "sqrt"],
  ["tangente", "tan"],
  ["tangenteHiperbolica", "tanh"],
  ["truncar", "trunc"]
]);
const numberMethods = /* @__PURE__ */ new Map([
  ["esNuN", "isNaN"],
  ["esFinito", "isFinite"],
  ["esEntero", "isInteger"],
  ["esEnteroSeguro", "isSafeInteger"],
  ["interpretarDecimal", "parseFloat"],
  ["interpretarEntero", "parseInt"],
  ["aExponencial", "toExponential"],
  ["fijarDecimales", "toFixed"],
  ["aCadenaLocalizada", "toLocaleString"],
  ["aPrecision", "toPrecision"],
  ["aCadena", "toString"],
  ["valorDe", "valueOf"]
]);
const consoleMethods = /* @__PURE__ */ new Map([
  ["afirmar", "assert"],
  ["limpiar", "clear"],
  ["contar", "count"],
  ["reiniciarContador", "countReset"],
  ["depurar", "debug"],
  ["listar", "dir"],
  ["listarXml", "dirxml"],
  ["error", "error"],
  ["agrupar", "group"],
  ["agruparColapsado", "groupCollapsed"],
  ["finalizarAgrupacion", "groupEnd"],
  ["info", "info"],
  ["escribir", "log"],
  ["perfil", "profile"],
  ["finalizarPerfil", "profileEnd"],
  ["tabla", "table"],
  ["tiempo", "time"],
  ["finalizarTiempo", "timeEnd"],
  ["registrarTiempo", "timeLog"],
  ["marcaDeTiempo", "timeStamp"],
  ["rastrear", "trace"],
  ["advertencia", "warn"]
]);
const stringMethods = /* @__PURE__ */ new Map([
  ["enPosicion", "at"],
  ["caracterEn", "charAt"],
  ["codigoDeCaracterEn", "charCodeAt"],
  ["puntoDeCodigoEn", "codePointAt"],
  ["concatenar", "concat"],
  ["terminaCon", "endsWith"],
  ["desdeCodigoDeCaracter", "fromCharCode"],
  ["desdePuntoDeCodigo", "fromCodePoint"],
  ["incluye", "includes"],
  ["indiceDe", "indexOf"],
  ["ultimoIndiceDe", "lastIndexOf"],
  ["compararLocalizada", "localeCompare"],
  ["coincidir", "match"],
  ["coincidirTodo", "matchAll"],
  ["normalizar", "normalize"],
  ["rellenarAlFinal", "padEnd"],
  ["rellenarAlComienzo", "padStart"],
  ["crudo", "raw"],
  ["repetir", "repeat"],
  ["reemplazar", "replace"],
  ["reemplazarTodo", "replaceAll"],
  ["buscarRegex", "search"],
  ["recortar", "slice"],
  ["dividir", "split"],
  ["comienzaCon", "startsWith"],
  ["subcadena", "substring"],
  ["aMinusculasLocalizada", "toLocaleLowerCase"],
  ["aMayusculasLocalizada", "toLocaleUpperCase"],
  ["aMinusculas", "toLowerCase"],
  ["aMayusculas", "toUpperCase"],
  ["aCadena", "toString"],
  ["recortarEspacios", "trim"],
  ["recortarEspaciosAlFinal", "trimEnd"],
  ["recortarEspaciosAlComienzo", "trimStart"],
  ["valorDe", "valueOf"]
]);
const keywords = new Map([
  ...keywordControl,
  ...constantLanguage,
  ...variableLanguage,
  ...storageType,
  ...metaVariable,
  ...supportFunction,
  ...promiseMethods,
  ...dateMethods,
  ...arrayMethods,
  ...mathMethods,
  ...numberMethods,
  ...consoleMethods,
  ...stringMethods
]);
function invertMap(map) {
  const invertedMap = /* @__PURE__ */ new Map();
  for (const [key, value] of map.entries()) {
    invertedMap.set(value, key);
  }
  return invertedMap;
}
function getDictionary(reverse = false) {
  if (reverse) {
    return invertMap(keywords);
  }
  return keywords;
}

exports.arrayMethods = arrayMethods;
exports.consoleMethods = consoleMethods;
exports.constantLanguage = constantLanguage;
exports.dateMethods = dateMethods;
exports.getDictionary = getDictionary;
exports.keywordControl = keywordControl;
exports.keywords = keywords;
exports.mathMethods = mathMethods;
exports.metaVariable = metaVariable;
exports.numberMethods = numberMethods;
exports.promiseMethods = promiseMethods;
exports.storageType = storageType;
exports.stringMethods = stringMethods;
exports.supportFunction = supportFunction;
exports.variableLanguage = variableLanguage;
