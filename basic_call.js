function duckCount(){
	return Array.prototype.filter.call(arguments,function(item){
        return Object.hasOwnProperty.call(item,'quack')
        // return item.hasOwnProperty('quack')//item可能没有hasOwnProperty方法,所以不行
	}).length
}
module.exports=duckCount