//일반함수의 호출
console.log('\n## 일반함수의 호출');
function func(){{

}}

func();

//Function.apply과 Function.call
console.log('\n## Function.apply과 Function.call');
function sum(arg1, arg2){
    return arg1 + arg2;
}
console.log(sum.apply(null, [1,2]));

//Function.apply 예제2
console.log('\n## Function.apply 예제2');
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum2(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
console.log(sum2.apply(o1)) // 6
console.log(sum2.apply(o2)) // 185

o1.sum = sum;
console.log(o1.sum());
delete o1.sum();