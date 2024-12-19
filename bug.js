function foo(a, b) {
  if (a === b) {
    return true; // This will only return true if a and b are strictly equal
  } else {
    return false;
  }
}

console.log(foo(1, '1')); //false. Should be true if we consider loose equality
console.log(foo(0, false)); //false. Should be true if we consider loose equality
console.log(foo(null, undefined)); //false. Should be true if we consider loose equality