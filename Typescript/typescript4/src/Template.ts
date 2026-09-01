function value<T>(a: T): T {
  return a;
}

// here we can pass any thing

console.log(value(10));
console.log(value("Vinay"));
console.log(value([10, 20, 30]));
console.log(value(true));

// rather define like this use template like above

function value1(
  b: string | number | boolean | number[],
): string | number[] | number | boolean {
  return b;
}

console.log(value1(10));
console.log(value1("Vinay"));
console.log(value1([10, 20, 30]));
console.log(value1(true));