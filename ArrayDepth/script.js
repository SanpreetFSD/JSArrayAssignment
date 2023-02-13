function depth(arr) {
    let depth = Array.isArray(arr) ? 1 : 0;
    let des = [...arr];
    while (Array.isArray(des)) {
      for (let item of des) {
        if (Array.isArray(item)) {
          des = [...item];
          depth++;
          break;
        } else {
          des = item;
        }
      }
    }
    return depth;
  }
  console.log(depth(([1, [2, [3, 4]]]) ))
  console.log(depth([1,2,3,4]))