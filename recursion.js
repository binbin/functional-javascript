// function reduce(arr,fn,initial){
//   if ( arr.length == 0 ) {
//     return initial
//   }
//   var result = fn(initial,arr[0])
//   var items=arr.slice(1)
//   return reduce(items,fn,result)
// }

function reduce(arr,fn,initial){
	return (function reduceOne(index,value){
        if(index>arr.length-1) return value
        return reduceOne(index+1,fn(value,arr[index],index,arr))
	})(0,initial)
}
module.exports=reduce