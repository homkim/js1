console.log('\n## 변수할당');
var name = 'egoing';
console.log(name);

console.log('\n## 배열');
var member = ['egoing', 'k8805', 'sorialgi']
console.log(member[0]);
console.log(member[1]);
console.log(member[2]);

// 함수와 배열
console.log('\n## 함수와 배열');
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
var members = get_members();
console.log(members[0]);
console.log(members[1]);
console.log(members[2]);

// 배열과 반복문
console.log('\n## 배열과 반복문');
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
members = get_members();
// members.length는 배열에 담긴 값의 숫자를 알려준다. 
for(i = 0; i < members.length; i++){
    // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
    console.log(members[i].toUpperCase());   
}

// 배열의 길이
console.log('\n## 배열의 길이');
var arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// 원소의 추가 push
console.log('\n## 원소의 추가 push');
var li = ['a', 'b', 'c', 'd', 'e'];
li.push('g');
console.log(li);

// 원소의 추가 concat
console.log('\n## 원소의 추가 concat');
var li = ['a', 'b', 'c', 'd', 'e'];
li = li.concat(['f', 'g']);
console.log(li);

// 원소의 추가 slice
console.log('\n## 원소의 추가 slice');
// 두번째 인자로부터 0개를 잘라내고 두번째 인자 뒤에 B를 넣어라
var li = ['a', 'b', 'c', 'd', 'e'];
li.splice(2, 0, 'B');
console.log(li);

var li = ['a', 'b', 'c', 'd', 'e'];
li.splice(2, 1, 'B');
console.log(li);

// 잘라내기 shift
console.log('\n## 잘라내기 shift 왼쪽으로 밀기');
var li = ['a', 'b', 'c', 'd', 'e'];
li.shift();
console.log(li);

// 잘라내기 pop
console.log('\n## 잘라내기 pop 오른쪽으로 밀기');

var li = ['a', 'b', 'c', 'd', 'e'];
li.pop();
console.log(li);

// 정렬 오름차순
console.log('\n## 정렬 오름차순');
var li = ['c', 'e', 'a', 'b', 'd'];
li.sort();
console.log(li);


// 배열 원소 뒤집기
console.log('\n## 배열 원소 뒤집기');
var li = ['c', 'e', 'a', 'b', 'd'];
console.log(li);
li.reverse();
console.log(li);



// 정렬 내림차순
console.log('\n## 정렬 내림차순');
var li = ['c', 'e', 'a', 'b', 'd'];
li.sort()
li.reverse();
console.log(li);