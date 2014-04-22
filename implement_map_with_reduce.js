module.exports=function arrayMap(arr,fn){
	// var result = []
 //    arr.reduce(function(p,c,i,a){
 //         result[i]=fn(c)
 //    },0)
 //    return result
       return arr.reduce(function(initValue,currentValue,index,arr){
           return initValue.concat(fn(currentValue))
       },[])
}