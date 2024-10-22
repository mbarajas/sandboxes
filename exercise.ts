//leet**cod*e
//lecoe
function exercise(input: string): string{
  let result = "";

  let inputArray = input.split('');

  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] == '*'){
      inputArray.splice(i - 1, 2);
      i = i-2;

    }
  }

  result = inputArray.join('');

  return result;
}

console.log(exercise("leet**cod*e"));
console.log(exercise("leetcode*******"));
