// interface
interface Developer {
  name: string,
  skill: string;
}

// interface Person {
//   name: string;
//   // skill: string;
// }

// 구조적 타이핑

class Person {
  name: string;
  skill: string;
}

let developer: Developer;
let person: Person;
developer = new Person();

//타입 호환은 오른쪽이 더 많은 객체를 갖고잇어야지 호환이 된다
// person = developer;

// 함수
let add = function(a: number) {
  //...
}

let sum = function (a: number, b: number){
  //...return a+b;
}

add = sum;

sum = add;
// add = sum;

// 제너릭
interface Empty<T>{
  //...
}
let empty1:Empty<string>;
let empty2:Empty<string>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
  data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;


