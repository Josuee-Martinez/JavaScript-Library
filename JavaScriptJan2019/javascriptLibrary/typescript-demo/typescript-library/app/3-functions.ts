function subNums(numOne: number, numTwo: number) : number {
  return numOne - numTwo;
}

function greet(name?: string) : string {

  if(name) {
  return 'hello,' + name
  } 

  return 'hi';
}

const newGreeting = (name?: string) => {
  
}

console.log(greet('ing'));
