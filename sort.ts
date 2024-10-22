function sort(width: number, height: number, length: number, mass: number): string {
  let result = '';
  let volume = width * height * length;

  if(!width || !height || !length || !mass) {
    result = 'INVALID';
    return result;
  }

  if(volume >= 1000000 && mass >= 20) {
    result = 'REJECTED';
    return result;
  } else if(volume >= 1000000 || mass >= 20) {
    result = 'SPECIAL';
    return result;
  } else {
    result = 'STANDARD';
    return result;
  }
}

console.log(sort(100, 100, 100, 20)); // SPECIAL
console.log(sort(1000, 1000, 1000, 10)); // REJECTED
console.log(sort(100, 100, 10, 10)); // STANDARD
