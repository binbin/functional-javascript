function reduce(arr,fn,initial){
  var result = fn(initial,arr[0])
  var items=arr.slice(1)
  return reduce(items,fn,result)
}
module.exports=reduce