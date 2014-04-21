function logger(namespace){
   return function(){
   	  // var arr =Array.prototype.slice.call(arguments)  
   	  // arr.unshift(namespace)
   	  // console.log.apply(console,arr)
   	  console.log.apply(console,[namespace].concat(Array.prototype.slice.call(arguments)))
   }
}

module.exports=logger