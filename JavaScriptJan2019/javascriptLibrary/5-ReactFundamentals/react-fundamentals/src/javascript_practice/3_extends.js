
let multiply = () => {
  let num = [1, 2, 3, 4, 5];
  
  let num2 = [2, 3, 4, 6];
  
  let empty = [];

  
  for(let i = 0; i < num.length; i++) {
    for(let j = 0; j < num2.length; j++) {
      if(num[i] === num2[j]) {
        let res = num[i] * num2[j];
        empty.push(res);
        console.log(empty)
      }
    }
  }
}

multiply();