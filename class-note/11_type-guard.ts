interface Developer{
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name:'Tony', age: 33, skill:'Iron Making' }
}
let tony = introduce();
console.log(tony.name)

if ((tony as Developer).skill){
  
  let skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age){
  let age = (tony as Person).age;
  console.log(age);
}

// 공통된 속성에만 교집합인 속성에만 접근 가능 skill은 안됨
// 타입단언을 이용해 skill접근 가능

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)){
  tony.skill
  console.log(tony.skill)
}
else{
  tony.age
  console.log(tony.age)
}