// The ternary operator, also known as the conditional operator, is a shorthand way of writing an if-else statement in a single line. 
// It has the following syntax:
// -> condition ? expression_if_true : expression_if_false;
// Here, condition is evaluated first. If it is true, the expression before the colon (:) is executed; otherwise, the expression after the colon is executed.
const a = 4;
const result = (a%2==0) ? "Even" : "Odd";
console.log(result);
