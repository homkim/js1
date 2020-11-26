// 지역변수의 사용
console.log("\n## 지역변수의 사용");
function a (){
    var i = 0;
}
for(var i = 0; i < 5; i++){
    a();
    console.log(i);
}

// 전역변수의 사용 :: 무한반복 발생됨
console.log("\n## 전역변수의 사용");
function a (){
    i = 0;
}
for(i = 0; i < 5; i++){
    a();
    console.log(i);
}