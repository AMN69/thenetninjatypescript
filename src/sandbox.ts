// let greet: Function = () => {
//   console.log('hello, world');
// }

// greet = 'hello';

// greet = () => {
//   console.log('hello, again');
// }

// AMN - you can define types of elements to avoid repeting long types in 
// several funcions.

type numOrStr = number | string

const add = (a: number, b: number, c/*?*/: numOrStr = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, 'ninja');

const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10,7);
console.log(result);