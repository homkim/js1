// 정규표현식의 정의
console.log("\n## 정규표현식의 정의");

var pattern  = /a/
console.log(pattern);
var pattern2 = new RegExp('a.');
console.log(pattern2);

// 패턴이 있는지 체크
console.log("\n## 패턴이 있는지 체크 RegExp.exec() ");

console.log(pattern.exec('abcdef'));
console.log(pattern.exec('bcdefg'));

// RegExp.test()
console.log("\n## RegExp.test()");
console.log(pattern.test('abcdef')); // true
console.log(pattern.test('bcdefg')); // false

// .이 들어가면 그 자리에 뭐든 있어야 한다는 의미임
console.log("\n## .이 들어가면 그 자리에 뭐든 있어야 한다는 의미임");
console.log(pattern2.exec('abcdef'));
console.log(/a./.exec('bbbba'));

// exec는 추출하는 기능, test는 있는지 여부를 체크

// String.match()
console.log("\n## String.match()");
console.log('abcdef'.match(pattern));
console.log('bcdef'.match(pattern));

// String.replace()
console.log("\n## String.replace()");
console.log('abcdef'.replace(pattern, 'A'));

// 옵션 i : 대소문자 구분하지마
console.log("\n## 옵션 i : 대소문자 구분안함");
var pattern3 = /a/;
console.log("Abcd".match(pattern3));
var pattern3 = /a/i;
console.log("Abcd".match(pattern3));

// g: global 전부다 찾아줘
console.log("\n## g: global 전부다 찾아줘");
var xg = /a/;
console.log("abcdea".match(xg));
var og = /a/g;
console.log("abcdea".match(og));

// 캡처
console.log("\n## 캡처");
// (괄호)는 그룹을 의미
// \w 는 문자가 있다
// + 1개 이상이 있다
// \s 스페이스가 있다
var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");
console.log(result);

// 치환
console.log("\n## 치환");
// $1는 첫번째 그룹에 해당, $2는 두번째 그룹 의미
var pattern = /(\w+)\s(\w+)/;
var str = 'coding everybody';
var result = str.replace(pattern, '$2, $1');
console.log(result);


// 치환2
console.log("\n## 치환2");
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(content);
console.log(result);