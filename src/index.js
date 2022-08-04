
// You should implement your task here.

module.exports = function towelSort (matrix) {
  sorted = [];
  if (matrix == undefined)return []
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  for (let i = 0; i < matrix.length; i++){
    if(i == 0 || i%2 == 0){
      matrix[i] = matrix[i].sort(compareNumeric);
    }else if(i!=0 && i%2 != 0){
      matrix[i] = matrix[i].sort(compareNumeric);
      matrix[i] = matrix[i].reverse();
    }
  }
    for(char of matrix){
      for(item of char){
        sorted.push(item);
      }
    }
  return sorted;
  }
