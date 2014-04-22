
function getDependencies(tree){
     var result=[];
     (function operation(tree){
         // if(tree['dependencies']){
         	for(var id in tree['dependencies']){
         	  if(result.indexOf(id+'@'+tree['dependencies'][id]['version'])<0){
         	  	result.push(id+'@'+tree['dependencies'][id]['version'])
         	  }
              if(tree['dependencies'][id]['dependencies']){
              	operation(tree['dependencies'][id])
              }
         	}
         // }
     })(tree);
     return result.sort()
}

module.exports=getDependencies

/*
function getDependencies(mod, result) {
  result = result || []
  var dependencies = mod.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(mod.dependencies[dep], result)
  })
  return result.sort()
}

module.exports = getDependencies
*/