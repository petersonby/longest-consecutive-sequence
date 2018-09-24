module.exports = function longestConsecutiveLength(array) {
  if (!array.length) return 0;
  if (array.length === 1) return 1;

  const sortedArray = array.sort((a, b) => a - b);
 
  let length = 1;
  let maxLength = 1;

  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i] === sortedArray[i+1]) continue;

    if ((sortedArray[i] + 1) === sortedArray[i + 1]) {
      length++;
    } else {
        if (length > maxLength) {
          maxLength = length;
        }
        
        length = 1;
      }
    
  }

  return maxLength;
}
