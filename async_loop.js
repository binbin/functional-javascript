function loadUsers(userIds,load,done){
  var users=[],completed=0
  userIds.forEach(function(value,index,array){
      load(value,function(user){
        users[index]=user
        if(++completed === userIds.length){
        	done(users)
        }
      })
  })
}
module.exports = loadUsers