// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({},driver,{[key],value});
  
}

function destructivelyUpdateDriverWithKeyAndValue(Object,key,value){
  Object{key]:value
}

function deleteFromDriverByKey() {
  
}

function destructivelyDeleteFromDriverByKey(){
  
}


function destructivelyUpdateObject (obj, key, value) {
  obj[key] = value;
 
  return obj;
}