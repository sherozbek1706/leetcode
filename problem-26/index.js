var removeDuplicates = function (nums) {
  let uniqueNums = [...new Set(nums)];
  while (nums.length > uniqueNums.length) {
    uniqueNums.push("_");
  }
  return uniqueNums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
