function arrayChange(inputArray) {
    console.log(inputArray);
    let counter = 0;
    let itemOne = inputArray[0];
    for (let i = 1; i < inputArray.length; i += 1) {
      const itemTwo = inputArray[i];
      if (itemOne === itemTwo) {
        itemOne = itemTwo + 1;
        counter += 1;
      } else if (itemTwo > itemOne) {
        itemOne = itemTwo;
      } else {
        const difference = (itemOne - itemTwo) + 1;
        itemOne = itemTwo + difference;
        counter += difference;
      }
    }
    return counter;
  }