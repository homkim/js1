
// 함수의 정의 및 사용
console.log('\n## 함수의 정의 및 사용');
function numbering(){
    i = 0;
    while(i < 10){
        console.log(i);
        i += 1;
    }   
}
numbering();

// 리턴값
console.log('\n## return');
function get_member1(){
    return 'egoing';
}
 
function get_member2(){
    return 'k8805';
}
 
console.log(get_member1());
console.log(get_member2());

// 리턴은 처음값 하나만
function get_member(){
    return 'egoing';
    return 'k8805';
    return 'sorialgi';
}
console.log(get_member());

// 인자
console.log('\n## 인자값');
function get_argument(arg){
    return arg;
}
 
console.log(get_argument(1));
console.log(get_argument(2));

// 복수의 인자값
function get_arguments(arg1, arg2){
    return arg1 + arg2
}
 
console.log(get_arguments(10, 20));
console.log(get_arguments(20, 30));

// 함수를 정의하는 다른 방법
var numbering = function (){
    i = 10;
    while(i < 20){
        console.log("%d", i);
        
        
        i += 1;
    }   
}
numbering();