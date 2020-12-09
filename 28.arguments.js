//arguments는 선언하지 않아도 사용할 수 있다
console.log('\n## arguments는 선언하지 않아도 사용할 수 있다');

function sum(){
    var i, s = 0;
    for(i=0;i<arguments.length;i++){
        s += arguments[i];
    }
    return s;
}

console.log(sum(1,2,3,4));

//매개변수 추가
console.log('\n## 매개변수 추가');

function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
zero(); // zero.length 0 arguments 0 
one('val1', 'val2');  // one.length 1 arguments 2 
two('val1');  // two.length 2 arguments 1
