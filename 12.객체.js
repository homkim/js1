// 객체의 생성
console.log('\n## 객체의 생성');
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
console.log(grades);

// 객체생성 두번째
console.log('\n## 객체생성 두번째');
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;
console.log(grades);

// 객체생성 세번째
console.log('\n## 객체생성 세번째');
var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;
console.log(grades);

// 객체속성에 접근
console.log('\n## 객체속성에 접근');
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
console.log(grades['sorialgi']);

// 객체에서 반복문
console.log('\n## 객체에서 반복문');
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(key in grades) {
    console.log("key : "+key+"\t value : "+grades[key]);
}

// 객체에서 반복문 두번째
console.log('\n## 객체에서 반복문 두번째');
var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            console.log(name+':\t'+this.list[name]);
        }
    }
};
grades.show();