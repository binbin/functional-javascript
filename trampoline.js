/*function repeat(operation,num){
  var _repeat = trampoline(function fn(operation,num){
  	if(num<=0) return
  	return function(){
  		operation()
        return fn(operation,--num)
  	}
  })
  return _repeat(operation,num)
}
function trampoline(fn){
  return function(){
     var repeat = fn.apply(fn,arguments)
     while(repeat instanceof Function){
     	repeat = repeat()
     }
     return repeat
  }
}
module.exports=function(operation,num){
   return repeat(operation,num)
}*/

function repeat(operation,num){
	if(num<=0) return
	return function(){
		operation()
		return repeat(operation,--num)
	}
}
function trampoline(fn){
  while(fn && typeof fn ==='function'){
  	fn = fn()
  }
}
module.exports=function(operation,num){
	trampoline(function(){
		return repeat(operation,num)
	})
}