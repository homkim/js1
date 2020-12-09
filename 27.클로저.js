//내부함수
console.log('\n## 내부함수');
function outter() {
    function inner() {
        var title = 'coding everybody';
        console.log(title);
    }
    inner();
}
outter();

//내부함수 2
console.log('\n## 내부함수 2');
function outter2() {
    var title = 'coding everybody 2';
    function inner2() {
        console.log(title);
    }
    inner2();
}
outter2();

//클로저: 외부함수가 소멸되어도 내부함수가 할당되어 있으면 여전히 외부함수의 변수에 접근이 가능하다
console.log('\n## 클로저');
function outter3(){
    var title = 'coding everybody 3';
    return function(){
        console.log(title);
    }
}
inner3 = outter3();
inner3();

//클로저 심화
console.log('\n## 클로저 심화');

function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
console.log(ghost.get_title());
console.log(matrix.get_title());
 
ghost.set_title('공각기동대');
 
console.log(ghost.get_title());
console.log(matrix.get_title());


//클로저 심화2
console.log('\n## 클로저 심화2');
var arr = []
for(var i = 0; i < 5; i++){ 
    arr[i] = function(){
        return i;  //i는 외부에서 지정한 값이 아님 따라서 최종 값인 5가 출력됨
    }
}
for(var index in arr) {
    console.log(arr[index]());
}


//클로저 심화 3
console.log('\n## 클로저 심화 3');
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}