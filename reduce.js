module.exports=function(inputWords){
   return inputWords.reduce(function(initialValue,currentValue,currentIndex,array){
  	initialValue[currentValue] = ++initialValue[currentValue] || 1
  	return initialValue
  },{})
}