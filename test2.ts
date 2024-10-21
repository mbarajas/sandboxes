//Typescript examples
//
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(2, 3);
console.log(sum);

interface Person {
  name: string;
  age: number;
  getDetails: function(): string;
}

function greet(person: Person): string {
  return `Hello ${person.name}`;
}

const person = {
  name: 'John',
  age: 30
  getDetails() {
    return `${this.name} is ${this.age} years old`;
  }
};

class Engineer implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const engineer = new Engineer('John', 30);

class Dude {};

class ThisType<T> {
  constructor(public value: T) {}
}

const thisType = new ThisType<string>('Hello000');
console.log(thisType.value);


const dude = new Dude();

const greeting = greet(person);
console.log(greeting);

let myMap = new Map<string, number>();
myMap.set('one', 1);
myMap.set('two', 2);
console.log(myMap);
console.log(myMap.get('one'));

let myObject = {};
myObject['one'] = 1;
myObject['two'] = 2;
console.log(myObject);

type Name = string;

let myName: Name = 'John';
console.log(myName);

let myVariable: any = 'Hello';
let myOtherVar: string | number = 1;
myOtherVar = 'Hello';

if(myMap instanceof Map) {
  console.log('String');
}

//reverse a string
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

//reverse a number
function reverseNumber(num: number): number {
  return parseInt(num.toString().split('').reverse().join(''));
}

//palindrome number
function isPalindrome(num: number): boolean {
  return num === reverseNumber(num);
}

console.log(isPalindrome(1211));

//convert roman numeral to integer
function romanToInt(s: string): number {
  let roman: {[key: string]: number} = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;
  for(let i = 0; i < s.length; i++) {
    if(roman[s[i]] < roman[s[i + 1]]) {
      result += roman[s[i + 1]] - roman[s[i]];
      i++;
    }
    else {
      result += roman[s[i]];
    }
  }
  return result;
}

console.log(romanToInt('IV'));

//valid parentheses
function isValid(s: string): boolean {
  let stack: string[] = [];
  let map: {[key: string]: string} = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for(let i = 0; i < s.length; i++) {
    if(map[s[i]]) {
      stack.push(s[i]);
    }
    else {
      let last = stack.pop();
      if(s[i] !== map[last]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid('()'));

const theString = 'Hello World';
console.log(theString[0]);

class Node {
  value: number;
  next: Node | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;
  constructor() {
    this.head = null;
  }

  add(value: number): void {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
    }
    else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print(): void {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print();

//Two Sum
function twoSum(nums: number[], target: number): number[] {
  let map: {[key: number]: number} = {};
  for(let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if(map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

//call api
async function callApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
}

callApi();

async function postData() {
  const response = await fetch('https://jsonpplaceholder.typicode.com/posts', {
    //method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
  });
  const data = await response.json();
  console.log(data);
}

let myvar = new Map<string, number>();
console.log(typeof(myvar));
