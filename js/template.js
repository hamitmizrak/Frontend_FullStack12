 // <!-- HTML comment -->
 // /* css comment */
 // JS single comment
//  /* multiple comment */

//  window.console.log("console log");
//  window.console.info("console info");
//  window.console.warn("console warn");
//  window.console.error("console error");
// console.error("console error");

// //window.alert("deneme")

// window.document.write("Html sayfasına yazıldı <br/>")
// document.write("Html sayfasına yazıldı")

// " çift tırnak"
// ' tek tırnak '
// ` backtick `
////////////////////////////////////////////////////////////
// üğşçö
var personName="Merhabalar";
var personName=44;
console.log(personName);

let personName23="Elazığ";
personName23="Harput";
console.log(personName23);

const $personName23="Gazi Cad , Abdullah paşa";
console.log($personName23);

let cityName="İstanbul";
console.log( typeof cityName);
cityName=44.23;
console.log( typeof cityName);
cityName=true;
console.log( typeof cityName);

// Hoisting
vocabulary="Js Öğreniyorum";
var vocabulary;
console.log(vocabulary);

//////////////////////////////////////////////////////////////////////
// OPERATORS
// + - * / %
let number1=13,number2=2;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);

// &&=VE ||=VEYA
// =    ATAMA
// ==   EŞİT AMA TÜRÜNE BAKMADAN
// ===  EŞİT VE TÜRÜNEDE BAK
// !=   EŞİT DEĞİL
// x++
// ++x
// x--
// --x

//////////////////////////////////////////////////////////////////////
// Kullanıcıdan veri almak
// let userData=prompt("Lütfen adınızı ve soyadınız giriniz");
// console.log(userData);

// let num1=Number(prompt("Lütfen 1.sayıyı giriniz")) ;
// let num2= parseInt(prompt("Lütfen 2.sayıyı giriniz"));
// console.log(num1+num2);

//////////////////////////////////////////////////////////////////////
// undefined
let user1;
console.log(user1);

// NaN
console.log(4/"asd");

// Infinity
console.log(4/0);

// Escape Character
console.log("\"");
console.log("1.satır");
console.log("2.satır");
console.log("1.satır\n2.satır");

// new 
// this
// null

///////////////////////////////////////////////////////////////////////
// SORULAR
// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ? (prompt)
let number111,number222,sum=0;
number111=Number(prompt("Lütfen 1.sayıyı giriniz"));
number222=Number(prompt("Lütfen 2.sayıyı giriniz"));
console.log(number111+number222);

// Örnek-2
/* 
    Kullanıcıdan aldığımız sayıyı dereceden fahrenhayt'a çeviren JS kodu yazınız ?
    Formül: (derece*9/5)+32   
*/
let degree=0,fahranhayt=0;
degree=Number(prompt("Lütfen Dereceyi giriniz"));
fahranhayt=(degree*9/5)+32;
console.log(fahranhayt);

// Örnek-3
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem algoritma JS kodu yazınız ?
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
// x=2 k=3 y=? (y=18)
let x=0,y=0,k=0;
x=Number(prompt("Lütfen X giriniz"));
k=Number(prompt("Lütfen K giriniz"));
y=3*x+4*k;
console.log("Y sonucu:"+y);

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
console.log(4+3*2*(3/3-1*6+9/1+(3/3)));

/////////////////////////////////////////////////////////////////////////////////$personName23
// MATH