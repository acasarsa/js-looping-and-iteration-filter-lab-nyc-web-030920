// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(arr, letters) {
  return arr.filter(function(elementChar) {
    if (elementChar.substring(0, 2) === letters){
      return elementChar
    }
  })
}

function matchName(arr, name) {
  return arr.filter(function(obj){
    return obj.name.toLowerCase() === name.toLowerCase()
  })
}