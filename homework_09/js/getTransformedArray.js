function getTransformedArray (array, func) {
  let transformedArray = [];
  forEach(array,function(element){
    transformedArray.push(func(element))
  });
  return transformedArray;
};