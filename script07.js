const squareList = arr => {
    // Only change code below this line
    const squareList = arr => {
        // Only change code below this line
      let newArr = []
        return arr.map(function(item) {
         if(Number.isInteger(item) && item > 0) {
           return item  *= item
         }
       }).filter(function(item) {
          return item !== undefined
       })
        // Only change code above this line
      };
      
      const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
      console.log(squaredIntegers);
          // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);