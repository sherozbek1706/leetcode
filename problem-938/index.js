class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function rangeSumBST(root, low, high) {
  if (!root) {
    return 0;
  }

  let sumOfValues = 0;

  if (root.val >= low && root.val <= high) {
    sumOfValues += root.val;
  }

  sumOfValues += rangeSumBST(root.left, low, high);
  sumOfValues += rangeSumBST(root.right, low, high);

  return sumOfValues;
}
