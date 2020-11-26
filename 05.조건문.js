console.log('\n## 조건 1');
if(true){
    console.log('result : true');
}


console.log('\n## 조건 2');
if(true){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}
console.log(5);

console.log('\n## 조건 3');
if(false){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}
console.log(5);

console.log('\n## else');
if(true){
    console.log(1);
} else {
    console.log(2);
}

console.log('\n## else 2');
if(false){
    console.log(1);
} else {
    console.log(2);
}


console.log('\n## else if');
if(false){
    console.log(1);
} else if(true){
    console.log(2);
} else if(true){
    console.log(3);
} else {
    console.log(4);
}

console.log('\n## else if 2');
if(false){
    console.log(1);
} else if(false){
    console.log(2);
} else if(false){
    console.log(3);
} else {
    console.log(4);
}

