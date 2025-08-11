declare const keywordControl: Map<string, string>;
declare const constantLanguage: Map<string, string>;
declare const variableLanguage: Map<string, string>;
declare const storageType: Map<string, string>;
declare const metaVariable: Map<string, string>;
declare const supportFunction: Map<string, string>;
declare const promiseMethods: Map<string, string>;
declare const dateMethods: Map<string, string>;
declare const arrayMethods: Map<string, string>;
declare const mathMethods: Map<string, string>;
declare const numberMethods: Map<string, string>;
declare const consoleMethods: Map<string, string>;
declare const stringMethods: Map<string, string>;
declare const keywords: Map<string, string>;
declare function getDictionary(reverse?: boolean): Map<string, string>;

export { arrayMethods, consoleMethods, constantLanguage, dateMethods, getDictionary, keywordControl, keywords, mathMethods, metaVariable, numberMethods, promiseMethods, storageType, stringMethods, supportFunction, variableLanguage };
