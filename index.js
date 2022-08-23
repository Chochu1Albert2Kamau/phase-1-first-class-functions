function receivesAFunction(callback){
  return callback();
}
function returnsANamedFunction(){
  return function fn(){
    console.log("Albert")
  }
}
function returnsAnAnonymousFunction(){
  return function(){
    console.log("returns an anonymous function")
  } 
}