

const middle = function(arr) {
  const outputArr = []
  const midIndex = Math.floor(arr.length/2); 
    
  if (arr.length <= 2) { 
  }
  else if (arr.length % 2 !== 0) {
    outputArr.push(arr[midIndex])
  }
  else if (arr.length % 2 === 0) {
    outputArr.push(arr[midIndex-1])
    outputArr.push(arr[midIndex])
  }

  return outputArr
}

module.exports = middle;

