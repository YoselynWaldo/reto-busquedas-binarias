var numArray=[1,4,3,2,6]


function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  console.log(getMaxOfArray(numArray));