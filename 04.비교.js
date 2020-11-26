// 연산자: 대입연산자, 비교연산자

console.log('\n## 기본비교');

a=1; //대입연산자
console.log(a);
console.log(a==1); // 값비교
console.log(a==2); // 값비교
console.log(a===1); // 타입까지 비교
console.log(a==='1'); // 타입까지 비교

console.log('\n## 또 다른 비교');

console.log(null == undefined);       //true
console.log(null === undefined);      //false
console.log(true == 1);               //true
console.log(true === 1);              //false
console.log(true == '1');             //true
console.log(true === '1');            //false
 
console.log(0 === -0);                //true
console.log(NaN === NaN);             //false

// !=
console.log('\n## !=');
console.log(1!=2);            //true
console.log(1!=1);            //false
console.log("one"!="two");    //true
console.log("one"!="one");    //false

// >
console.log('\n## >');
console.log(10>20);   //false
console.log(10>1);    //true
console.log(10>10);   //false

// >=
console.log('\n## >=');
console.log(10>=20);      //false
console.log(10>=1);       //true
console.log(10>=10);      //true

