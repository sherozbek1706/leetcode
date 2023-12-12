let longestCommonPrefix = function (strs) {
  let prefix = "";
  let str = "";
  for (let i = 0; i < strs[0].length; i++) {
    str += strs[0][i];

    let here = 0;

    strs.forEach((elem) => {
      let cut = elem.substring(0, i + 1);
      // console.log(cut);
      if (cut == str) {
        here++;
      }
    });

    if (here == strs.length) {
      prefix = str;
      continue;
    }

    break;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
