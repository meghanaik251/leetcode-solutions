var maximumCount = function(nums) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const negativeCount = left;

  left = 0;
  right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] <= 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const positiveCount = nums.length - left;

  return Math.max(negativeCount, positiveCount);
};