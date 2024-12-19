function foo(a, b) {
  if (a == b) {
    return true; // Using loose equality (==) handles type coercion
  } else {
    return false;
  }
}

console.log(foo(1, '1')); //true
console.log(foo(0, false)); //true
console.log(foo(null, undefined)); //true