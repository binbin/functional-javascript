function Spy(target,method){
   var spy={
   	count:0
   }
   var old_method=target[method]
   target[method]=function(){
   	spy.count++
   	return old_method.apply(this,Array.prototype.slice.call(arguments))
   }
   return spy
}
module.exports = Spy