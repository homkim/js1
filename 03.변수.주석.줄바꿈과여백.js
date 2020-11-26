console.log('## 변수');

// 변수의 선언
var a = 1;
console.log(a+1); //2

var b = 2;
console.log(b+2); //3

//var 생략이 가능하지만 유효범위라는 것에 영향이 있다고 함
//세미콜론을 사용하면 여러 문장을 한 라인에 적을 수 있다
//문장의 끝에 ; 생략 가능
c=1;console.log(c+3); 

var first = "coding";
console.log(first + " everybody");

// 두개의 변수를 한 라인에서 할당 가능
var a = 'coding', b = 'everybody';
console.log(a+' '+b);

console.log('\n## 변수가 없다면');
console.log(100+10);
console.log((100+10)/10);
console.log(((100+10)/10)-10);
console.log((((100+10)/10)-10)*10);

console.log('\n## 변수를 사용하면');
a = 100;
a = a + 10;
console.log(a);
a = a / 10;
console.log(a);
a = a - 10;
console.log(a);
a = a * 10;      
console.log(a);

console.log('\n## 주석');

// 한줄 주석
/*
   여러줄 주석
*/

console.log('\n## 세미콜론');

//세미콜론을 사용하면 여러 문장을 한 라인에 적을 수 있다
//문장의 끝에 ; 생략 가능
c=1;console.log(c+8); 

//탭키
   console.log("탭키를 쳤을 때 실제 문법은 아무 영향 없음");

//띄어쓰기 하는 경우 키워드 다음에는 반드시 띄어쓰기를 해야 하지만 할당을 할경우는 안쓰도 됨
var d=99;
console.log(d);