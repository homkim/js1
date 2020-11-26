// 자바스크립트는 for 문의 {} 안에 있는 변수도 사용할 수 있다.
// 자바에서는 허용되지 않는다.
for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
console.log(name);

// 정적유효범위
console.log("\n## 정적유효범위");
var i = 5;
 
function a(){
    var i = 10;
    b();
}
 
function b(){
    console.log(i);
}
 
a();