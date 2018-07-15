// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({},driver,{[key],value});
  
}

function destructivelyUpdateDriverWithKeyAndValue(Object,key,value){
  Object{key]=value;
}

function deleteFromDriverByKey(driver, key) {
  array=Object.assign{{},driver};
  delete array[key];
  return array;
}

function destructivelyDeleteFromDriverByKey(){
  
}

