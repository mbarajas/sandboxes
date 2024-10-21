//script to test the functionality of the class
//
interface Person {
  name: string;
  age: number;
  title: string;
  isAdult: boolean;
  sayHello: () => void;

}

class Manuel implements Person {
  name: string;
  age: number;
  title: string;
  isAdult: boolean;

  constructor(name: string, age: number, title: string) {
    this.name = name;
    this.age = age;
    this.title = title;
    this.isAdult = this.age >= 18;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const manuel = new Manuel('Manuel', 32, 'Mr');
manuel.sayHello();

//sliding window example
function maxSubarraySum(arr: number[], num: number): number {
  if (num > arr.length) {
    return null;
  }
  let max = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }
  return max;
}

const arr = [1, 2, 5, 2, 8, 1, 5];
const num = 2;
console.log(maxSubarraySum(arr, num));
