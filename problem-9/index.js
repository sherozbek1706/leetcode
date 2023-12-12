let isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") == x ? true : false;
};

console.log(isPalindrome(123321));
