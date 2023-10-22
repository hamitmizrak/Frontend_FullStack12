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
// let number=50;
// console.log(number);
// console.log(typeof number);

// //let number2=Number("50.23") ;
// let number2=parseInt("50.23") ;
// console.log(number2);
// console.log(typeof number2);

// // sonuç: false ise sayıdır.
// console.log(!isNaN(44));

// let bilimsel=1200000;
// console.log(bilimsel);

// let bilimsel2=12E+5;
// console.log(bilimsel2);

// let bilimsel3=12E-5;
// console.log(bilimsel3);

// const number4=12.45155615151.toFixed(2);
// console.log(number4);

///////////////////////////////////////////////////////////
// KELİME
// let vocabulary=" javascript ÖĞREniyorum javascript";
// console.log(vocabulary);
// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);

// console.log(vocabulary.toUpperCase());
// console.log(vocabulary.toLowerCase());

// console.log(vocabulary.startsWith(" "));
// console.log(vocabulary.endsWith("t"));

// console.log(vocabulary.indexOf("javascript"));
// console.log(vocabulary.lastIndexOf("javascript"));

// console.log(vocabulary.charAt(3));
// console.log(vocabulary.concat(" .INC"));

// console.log(vocabulary.substring(0,3));
// console.log(vocabulary.substring(2));

// console.log(vocabulary.replace(vocabulary,"değiştir."));

// ÖDEV
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
//    console.log(user.replace(user.substring(0,user.indexOf(" ")),"deneme")   );
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

///////////////////////////////////////////////////////////
// FUNCTION
// 1
// function retursuzParametresiz(){
//     console.log("retursuz Parametresiz");
//    let user="Merhabalar nasılsınız";
//    //console.log(user.replace(user.substring(0,user.indexOf(" ")),"deneme")   );
// }
// retursuzParametresiz()

// // 2
// function retursuzParametreli(username,surname){
//     console.log("retursuz Parametreli "+username+" "+surname);
// }
// retursuzParametreli("Hamit","Mızrak");

// // 3
// function returluParametresiz(){
//    let user="Merhabalar nasılsınız";
//    return user.replace(user.substring(0,user.indexOf(" ")),"javascript");
// }
// const data3= returluParametresiz();
// console.log(data3);

// // 4
// function returluParametreli(user){
//     return user.replace(user.substring(0,user.indexOf(" ")),"javascript");
//  }
//  const data4= returluParametreli("Merhabalar nasılsınız");
//  console.log(data4);
///////////////////////////////////////////////////////////

// // 1-) Normal
// function normal(){
//     console.log("Normal");
// }
// normal();

// // 2-) anonymous
// const anonymous= function (){
//     console.log("Anonim ");
// }
// anonymous();

// // 3-) arrow
// const arrow=  () =>{
//     console.log("arrow ");
// }
// arrow();

// // 4-) Immedia ()()
// (() =>{
//     console.log("Immedia ");
// })()

///////////////////////////////////////////////////////////
// CONDITIONAL (if, else, ternary, switch)
const conditional = () => {
    let number = 15;
    if (number > 0) {
        console.log("Pozitif");
    } else {
        console.log("Negatif");
    }
}
//conditional()


// ternary
const conditional2 = () => {
    let number = 15;
    let result = (number > 0) ? "Pozitif" : "Negatif";
    console.log(result);
}
//conditional2()


// if else if else
const conditional3 = () => {
    let number = 5;
    if (number === 5) {
        console.log("sayı 5");
    } else if (number === 1) {
        console.log("sayı 1");
    } else if (number === 2) {
        console.log("sayı 2");
    } else if (number === 3) {
        console.log("sayı 3");
    } else if (number === 4) {
        console.log("sayı 4");
    } else {
        console.log("1<=number<=5 dışındadır");
    }
}
//conditional3()


// switch case
const conditional4 = () => {
    let number = 5;
    switch (number) {
        case 5:
            console.log("sayı 5");
            break;
        case 1:
            console.log("sayı 1");
            break;
        case 2:
            console.log("sayı 2");
            break;
        case 3:
            console.log("sayı 3");
            break;
        case 4:
            console.log("sayı 4");
            break;
        default:
            console.log("1<=number<=5 dışındadır");
            break;
    }
}
//conditional4()

///////////////////////////////////////////////////////////
// LOOP (for, while,do-while)

//for
const loop1 = () => {
    for (let i = 1; i <= 10; i++) {
        document.writeln(i);
    }

    //sonsuz
    // for(;;){}
}
//loop1()

// while
const loop2 = () => {
    document.writeln("<br/>");
    let i = 1;
    while (i <= 10) {
        document.writeln(i);
        i = i + 1;
    }

    // sonsuz
    // while(true){}
}
//loop2()

// do-while
const loop3 = () => {
    document.writeln("<br/>");
    let i = 1;
    do {
        document.writeln(i);
        i += 1;
    }
    while (i <= 10);
}
//loop3()

///////////////////////////////////////////////////////////
// Debugging
// Exception Handling
const exceptionHandlingData = () => {
    try {
        alertx("merhabalar");
    } catch (err) {
        console.error(err.name);
        console.error(err.message);
        console.error(err);
    } finally {
        console.log("api.close");
    }
    console.log("Diğer kod");
    throw "Bilerek hata oluşturdum";
}
//exceptionHandlingData()

///////////////////////////////////////////////////////////
// Software Prensible
// S.O.L.I.D 
// Senkron,asenkron (callback , promise , asyn-await)

///////////////////////////////////////////////////////////
// Diziler
let array = () => {
    let arr = [5, 3, 6, 7, 8, 1, 9];
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[7 - 1]);
    arr[7] = 2;
    console.log(arr[arr.length - 1]);

    // push,unshift(EKLEME)    pop,shift(ÇIKARMA)
    arr.push(Math.floor(Math.random() * 9 + 1));
    console.log(arr);
    console.log(arr[arr.length - 1]);
    arr.unshift(Math.floor(Math.random() * 9 + 1))
    console.log(arr);
    arr.pop()
    arr.shift()
    console.log(arr);

    arr.sort();
    console.log(arr);

    arr.reverse();
    console.log(arr);

    arr.sort().reverse();
    console.log(arr);
}
//array();

const randomArray = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 9 + 1);
    }
    console.log(arr);
    return arr;
}


let array2 = () => {
    let arr = randomArray();
    console.log("---------------");
    console.log(arr);

    // iterative for 
    document.writeln("<br/>------Iterative For---------<br/>");
    for (let i = 0; i < arr.length; i++) {
        document.writeln(arr[i])
    }

    document.writeln("<br/>------For In---------<br/>");
    // for In
    for (let temp in arr) {
        document.writeln(temp + " => " + arr[temp] + "<br/>")
    }

    document.writeln("<br/>------For Of---------<br/>");
    // for of
    for (let temp of arr) {
        document.writeln(temp)
    }

    document.writeln("<br/>------ForEach---------<br/>");
    arr.forEach((value, index, array) => {
        document.writeln(index + " => " + value + "<br/>")
    });
}
//array2();

// array Function
let array3 = () => {
    let arr = randomArray();

    // toString => diziyi String'e çeviriyor.
    let data = arr.toString().substring(0, 4);
    console.log(data);

    // join => dizideki virgülleri kaldırıyor 
    // yerine bizim belirlediğimiz özellikleri ekliyor.
    // ve String'e çeviriyor
    let data2 = arr.join(" ")
    console.log(data2);
    console.log(data2.substring(0, 4));
    console.log(typeof data2);

    // splice
    let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(arr2);
    // 0: başlama indisi
    // 3: kaç tane veri silinecek
    arr2.splice(0, 3)
    console.log(arr2);

    // 0: başlama indisi
    // 3: kaç tane veri silinecek
    // 0'dan başla 3 tane veri sil yerine hello yazısını ekle
    arr2.splice(0, 3, "hello")
    console.log(arr2);

    // 0: başlama indisi
    // 0: kaç tane veri silinecek
    // 0'dan başla 3 tane veri sil yerine hello yazısını ekle
    arr2.splice(0, 0, "merhabalar")
    console.log(arr2);

    arr2.fill("Türkiye")
    console.log(arr2);

    arr2.fill("Türkiye", 0, 2)
    console.log(arr2);
}
//array3();

// forEach filter map (ES5)
let array4 = () => {
    let dizi = randomArray();

    // forEach
    dizi.forEach((value, index, array) => {
        // console.log(index + " => " + value + " " + array);
        //console.log(index + " => " + value);
    });

    console.log("------------------------------");
    // verilen sayılardan çift olanaları bulalım
    // Bulduğumuz bu çift sayıların sonuna 10 ekleyelim
    // Çıkan sonuçu ekranda gösterelim.
    dizi.filter(function (value, index, array) {
        return value % 2 == 0;
    }).map((value, index, array)=>{
        return value+10;
    }).forEach((value, index, array) => {
        console.log(index + " => " + value);
    }); 
}
//array4();

///////////////////////////////////////////////////////////
// Event
const ondblclickData=()=>{
    alert("1 kere Tıklandı");

    let uname=prompt("adınız");
    // LocalStorage
    localStorage.setItem("user_name",uname);
    console.log(localStorage.getItem("user_name"));
}

const onclickData=()=>{
    alert("deneme");
    window.confirm("Başka bir sayfaya gitmek istiyor musunuz ?") ? window.location="http://www.google.com": window.alert("Aynı sayfada kalındı.")
}

///////////////////////////////////////////////////////////
// setInterval(()=>{},3000) , setTimeOut(()=>{},3000)

// setInterval: Belli zaman aralığında sürekli çalışır.
const setIntervalData=()=>{
    setInterval(()=>{
        console.log("setInterval Log");
    },1000)
}
//setIntervalData()

// setTimeout : Belli zaman aralığında bir kere çalışır ve sonra durur.
const setTimeOutData=()=>{
    setTimeout(()=>{
        console.log("set Time out Log");
    },1000)
}
//setTimeOutData()

///////////////////////////////////////////////////////////
// Objeler

///////////////////////////////////////////////////////////
// DOM
// Listeners
///////////////////////////////////////////////////////////
// Form Javascript ile nasıl input verileri alınır ?
// jQery