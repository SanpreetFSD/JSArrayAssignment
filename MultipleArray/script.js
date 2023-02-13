const arrayOfMultiples = (num , times) => {
    let arr = [];
    let x = 1;
    for (let i = 1; i <= times; i++) {
      arr.push(num * x);
      x++;
    }
    return arr;
  };
  console.log(arrayOfMultiples(12,10))