const input = Bun.file("./inputs/03-mull-it-over.txt");
const text = await input.text();

// part 1
const expressions = text.match(/mul\(\d{1,3},\d{1,3}\)/gi);
expressions.reduce((acc, expr) => {
  const [, num1, num2] = expr.split(/mul\((\d+),(\d+)\)/);
  return num1 * num2 + acc;
}, 0);

// part 2
const instructions = text.match(/(mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\))/gi);
let isEnabled = true;
let result = 0;

instructions.forEach((instruction) => {
  if (instruction === "do()") {
    isEnabled = true;
  } else if (instruction === "don't()") {
    isEnabled = false;
  } else if (instruction.startsWith("mul(") && isEnabled) {
    const [, num1, num2] = instruction.match(/mul\((\d+),(\d+)\)/);
    result += num1 * num2;
  }
});

console.log(result);
