// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(arr, letters) {
  return arr.filter(function(char) {
    if (char.substring(0, letters.length) === letters) {
      return char
    }
  })
}

function matchName(arr, name) {
  return arr.filter(function(obj) {
    return obj.name.toLowerCase() === name.toLowerCase()
  })
}

