//함수의 선언
console.log('## 함수의 선언');
function a(){}

//객체로서의 함수 선언
console.log('\n## 객체로서의 함수 선언');
a = {
    b:function(){

    }
}

//함수를 인자로 전달
console.log('\n## 함수를 인자로 전달');
function cal(func, name){
    return func(name);
}

function increase(num) {
    return num + 1;
}

function decrease(num){
    return num - 1;
}
console.log(cal(increase, 1));
console.log(cal(decrease, 1));

//함수는 함수의 리턴값으로도 사용가능
console.log('\n## 함수는 함수의 리턴값으로도 사용가능');
function cal2(mode) {
    var funcs = {
        'plus':function(p1,p2) {return p1 + p2},
        'minus':function(p1,p2) {return p1 - p2}
    }
    return funcs[mode];
}
console.log(cal2('plus')(2,1));
console.log(cal2('minus')(3,2));

//함수는 배열의 값으로도 사용가능 
console.log('\n## 함수는 배열의 값으로도 사용가능');  
var process = [
    function(input){return input + 10;},
    function(input){return input * input;},
    function(input){return input / 2; }
];

var input = 1;
for(var i = 0; i < process.length; i++){
    console.log('i = ' + i);
    console.log('input = ' + input);
    input = process[i](input);
    console.log(input);
}
console.log(input);

//처리의 위임 : 숫자 정렬
console.log('\n## 처리의 위임: 숫자 정렬');
function sortNumber(a,b){
    return a - b;
}
var numbers = [10,9,20,8,7,6,5,4,3,2,1];
console.log(numbers);
console.log(numbers.sort(sortNumber));
console.log(numbers.sort(function(a,b){return b-a}));


//처리의 위임: 문자열 정렬 - 빼기연산을 비교로직으로 바꿔야 함
console.log('\n## 처리의 위임: 문자열 정렬 - 빼기연산을 비교로 바꿔야함');

var arr = ['red', 'blue', 'green', 'white', 'black'];
function compareString(a,b){
    if(a > b) return 1;
    else if(a <b) return -1;
    else return 0;
}
console.log(arr.sort(compareString));