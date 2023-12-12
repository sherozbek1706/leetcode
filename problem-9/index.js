let isPalindrome = function (x) {
  let a = x.toString().split("").reverse().join("");

  if (a == x) {
    return true;
  }

  return false;
};

console.log(isPalindrome(123321));
