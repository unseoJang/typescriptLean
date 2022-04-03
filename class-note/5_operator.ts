// function logMessage(value: any){
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);
// logMessage(false);

var seho: string | number | boolean;
function logMessage(value: string | number){
  if(typeof value === 'number'){
    value.toLocaleString();
  }
  if(typeof value === 'string'){
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 교집합
// function askSomeone(someone: Developer | Person){
//   // someone.name
// }
// askSomeone({name:'디벨로퍼', skill:'웹 게발'});
// askSomeone({name:'캡틴', age: 100});

// 합집합
function askSomeone(someone: Developer & Person){
  someone.name
  someone.skill
  someone.age
}
askSomeone({name:'디벨로퍼', skill:'웹 게발', age: 34});
// askSomeone({name:'캡틴', age: 100});

// var seho: string | number | boolean;
// var capt: string & number & boolean;
