// 전역변수
console.log("\n## 전역변수");
var vscope = 'global';
function fscope(){
    console.log(vscope);
}
fscope();


// 유효범위 2
console.log("\n## 유효범위 2");
var vscope2 = 'global';
function fscope2(){
    var vscope2 = 'local';
    console.log('함수안 '+vscope2);
}
fscope2();
console.log('함수밖 '+vscope2);


// 유효범위3
console.log("\n## 유효범위3");
var vscope3 = 'global';
function fscope3(){
    vscope3 = 'local';  //전역변수 값을 바꿔버림
    console.log('함수안'+vscope3);
}
fscope3();
console.log('함수밖'+vscope3);