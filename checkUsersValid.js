module.exports = function(goodUsers) {
	return function(users) {
		return users.every(function(i){
           return goodUsers.some(function(item){
               return i.id === item.id 
           })
		})
	}
}