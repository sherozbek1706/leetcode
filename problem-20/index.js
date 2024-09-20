/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let characters = "()[]{}"; // even, odd, even, odd, even, odd

  for (let i = 0; i < s.length; i++) {
    let index = characters.indexOf(s[i]);

    if (index % 2 === 0) {
      stack.push(s[i]);
    } else if (
      index % 2 !== 0 &&
      stack[stack.length - 1] === characters[index - 1]
    ) {
      stack.pop();
    } else {
      return false;
    }

    console.log(stack);
  }

  return !stack.length;
};

console.log(isValid("()))(("));
