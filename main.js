function doubleChar(str) {
//create a spot in memory to hold output
  var newStr = '';
  //loop the string by each character
  for (var i = 0; i < str.length; i++){
  //double the length of the string
    newStr += str[i] + str[i];
  }
  //return result
  return newStr;
};
