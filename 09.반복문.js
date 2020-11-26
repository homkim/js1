console.log('\n## while');
var i = 0;
// 종료조건으로 i의 값이 10보다 작다면 true, 같거나 크다면 false가 된다.
while(i < 10){
    // 반복이 실행될 때마다 coding everybody <br />이 출력된다. <br /> 줄바꿈을 의미하는 HTML 태그
    console.log('coding everybody');
    // i의 값이 1씩 증가한다.
    i++
}

console.log('\n## for');
for(var i = 0; i < 10; i++){
    console.log('coding everybody'+i);
}

console.log('\n## 반복문이 없다면');
console.log('coding everybody');
console.log('coding everybody');
console.log('coding everybody');
console.log('coding everybody');
console.log('coding everybody');
console.log('coding everybody');
console.log('coding everybody');
console.log('coding everybody');
console.log('coding everybody');
console.log('coding everybody');
console.log('coding everybody');

//반복문의 제어
console.log('\n## break');
for(var i = 0; i < 10; i++){
    if(i === 5) {
        break;
    }
    console.log('coding everybody'+i+'<br />');
}

console.log('\n## continue');
for(var i = 0; i < 10; i++){
    if(i === 5) {
        continue;
    }
    console.log('coding everybody'+i+'<br />');
}


// 반복문의 중첩
console.log('\n## 반복문 중첩');
// 0부터 9까지 변수 i에 순차적으로 값을 할당        
for(var i = 0; i < 10; i++){
    // 0부터 9까지의 변수를 j의 값에 순차적으로 할당
    for(var j = 0; j < 10; j++){    
        // i와 j의 값을 더한 후에 출력
        // String은 숫자인 i와 j의 데이터 타입을 문자로 형태를 변환하는 명령이다. 
        // String()을 제거하고 실행해보면 의미가 좀 더 분명하게 드러날 것이다.
        console.log(String(i)+String(j)+'<br />');
    }
}