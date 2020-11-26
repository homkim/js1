// &&
console.log('\n## &&');
if(true && true){
    console.log(1);
}
if(true && false){
    console.log(2);
}
if(false && true){
    console.log(3);
}
if(false && false){
    console.log(4);
}

// ||
console.log('\n## ||');
if(true || true){
    console.log(1);
}
if(true || false){
    console.log(2);
}
if(false || true){
    console.log(3);
}
if(false || false){
    console.log(4);
}

// !
console.log('\n## !');
if(!true && !true){
    console.log(1);
}
if(!false && !true){
    console.log(2);
}
if(!true && !false){
    console.log(3);
}
if(!false && !false){
    console.log(4);
}

// Boolean 대체제
console.log('\n## 0은 false로 간주됨');
if(0){
    console.log(1)
}
if(1){
    console.log(2)
}

console.log('\n## false로 간주되는 데이터 형');
if(!''){
    console.log('빈 문자열')
}
if(!undefined){
    console.log('undefined');
}
var a;
if(!a){
    console.log('값이 할당되지 않은 변수'); 
}
if(!null){
    console.log('null');
}
if(!NaN){
    console.log('NaN');
}