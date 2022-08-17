function oneThroughTwenty() {
    
   let array = []

   for(let i = 1; i <= 20; i++){
    array.push(i)
   }
    return array
}

console.log(oneThroughTwenty())

////////////////////////////////////////////////////

function evensToTwenty() {
    
  let array = []

  for(let i = 2; i <= 20; i+= 2){
   array.push(i)
  }
    return array
}

console.log(evensToTwenty())

//////////////////////////////////////////////////////

function oddsToTwenty() {
    
  let array = []

  for(let i = 1; i <= 20; i+= 2){
   
    array.push(i)
  }
   return array
}

console.log(oddsToTwenty())

//////////////////////////////////////////////////////

function multiplesOfFive() {
    
  let array = []

   for(let i = 5; i <= 100; i+= 5){
    
    array.push(i)
   }
    return array
}

console.log(multiplesOfFive())

////////////////////////////////////////////////////////////////

function squareNumbers() {
    
  let array = []

  for(let i = 1; i <= 10; i++){
   
    array.push(i ** 2)
  }
    return array
}

console.log(squareNumbers())

///////////////////////////////////////////////////////////////////

function countingBackwards() {
    
  let array = []

   for(let i = 20; i >= 1; i--){
    
    array.push(i)
   }
     return array
}

console.log(countingBackwards())

////////////////////////////////////////////////////////////

function evenNumbersBackwards() {
    
  let array = []

   for(let i = 20; i >= 1; i-= 2){
    
    array.push(i)
   }
     return array
}

console.log(evenNumbersBackwards())

////////////////////////////////////////////////////

function oddNumbersBackwards() {
    
  let array = []

   for(let i = 19; i >= 1; i-= 2){
    
    array.push(i)
   }
     return array
}

console.log(oddNumbersBackwards())

/////////////////////////////////////////////

function multiplesOfFiveBackwards() {
    
  let array = []

   for(let i = 100; i >= 1; i-= 5){
    
    array.push(i)
   }
    return array
}

console.log(multiplesOfFiveBackwards())

//////////////////////////////////////////////////

function squareNumbersBackwards() {
    
   let array = []

   for(let i = 10; i >= 1; i--){
    
    array.push(i ** 2)
   }
    return array
}

console.log(squareNumbersBackwards())
