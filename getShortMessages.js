module.exports=function(messages){
    var shorts=messages.map(function(i){
		if(i.message.length<50){
			return  i.message
		}
	}).filter(function(i){
		return i
	})
	return shorts
}