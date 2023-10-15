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
// // üğşçö
// var personName="Merhabalar";
// var personName=44;
// console.log(personName);

// let personName23="Elazığ";
// personName23="Harput";
// console.log(personName23);

// const $personName23="Gazi Cad , Abdullah paşa";
// console.log($personName23);

// let cityName="İstanbul";
// console.log( typeof cityName);
// cityName=44.23;
// console.log( typeof cityName);
// cityName=true;
// console.log( typeof cityName);

// // Hoisting
// vocabulary="Js Öğreniyorum";
// var vocabulary;
// console.log(vocabulary);

//////////////////////////////////////////////////////////////////////
// OPERATORS
// // + - * / %
// let number1=13,number2=2;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

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
// let user1;
// console.log(user1);

// // NaN
// console.log(4/"asd");

// // Infinity
// console.log(4/0);

// // Escape Character
// console.log("\"");
// console.log("1.satır");
// console.log("2.satır");
// console.log("1.satır\n2.satır");

// new 
// this
// null

///////////////////////////////////////////////////////////////////////
// SORULAR
// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ? (prompt)
// let number111,number222,sum=0;
// number111=Number(prompt("Lütfen 1.sayıyı giriniz"));
// number222=Number(prompt("Lütfen 2.sayıyı giriniz"));
// console.log(number111+number222);

// Örnek-2
/* 
    Kullanıcıdan aldığımız sayıyı dereceden fahrenhayt'a çeviren JS kodu yazınız ?
    Formül: (derece*9/5)+32   
*/
// let degree=0,fahranhayt=0;
// degree=Number(prompt("Lütfen Dereceyi giriniz"));
// fahranhayt=(degree*9/5)+32;
// console.log(fahranhayt);

// Örnek-3
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem algoritma JS kodu yazınız ?
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
// x=2 k=3 y=? (y=18)
// let x=0,y=0,k=0;
// x=Number(prompt("Lütfen X giriniz"));
// k=Number(prompt("Lütfen K giriniz"));
// y=3*x+4*k;
// console.log("Y sonucu:"+y);

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
// console.log(4+3*2*(3/3-1*6+9/1+(3/3)));

/////////////////////////////////////////////////////////////////////////////////$personName23
// MATH
// console.log(Math.min(3,5,6,9,500,-100));
// console.log(Math.max(3,5,6,9,500,-100));
// console.log(Math.sqrt(16));
// console.log(Math.pow(2,5));
// console.log(Math.floor(8.9));
// console.log(Math.ceil(8.1));
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));
// console.log(Math.floor(Math.random()*10+1));

// console.log(Math.sin(-1));
// console.log(Math.cos(-1));

//// MATH ÖDEVİ
// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// s1-) Bu sayılardan en küçüğü nedir ? (min)
// s2-) Bu sayılardan en büyüğü nedir ? (max)
// s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max))
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))


// Örnek: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9 (Math.abs)
// 2-yukarı yuvarlama yapsın  6.0 (Math.ceil)
// 3-karesini alsın 36.00 (Math.pow(sayı,2))
// 4-çıkan sayının karekökü alsın (Math.sqrt(sayı))
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 

///////////////////////////////////////////////////////////
// SAYI 
let number=50;
console.log(number);
console.log(typeof number);


let number2=Number("50.23") ;
console.log(number2);
console.log(typeof number2);

// sonuç: false ise sayıdır.
console.log(!isNaN(44));

let bilimsel=1200000;
console.log(bilimsel);

let bilimsel2=12E+5;
console.log(bilimsel2);

let bilimsel3=12E-5;
console.log(bilimsel3);

const number4=12.45155615151.toFixed(2);
console.log(number4);

///////////////////////////////////////////////////////////

// KELİME
///////////////////////////////////////////////////////////
// FUNCTION
// CONDITIONAL (if, else, ternary, switch)
// LOOP (for, while,do-while)
// Debugging
// Exception Handling
// Software Prensible
// Senkron,asenkron (callback,promise, asyn-await)
// Diziler
// Objeler
// DOM
// Event
// Listeners
// LocalStorage
// Interval , setTimeOut
// Form Javascript ile nasıl input verileri alınır ?
// jQery