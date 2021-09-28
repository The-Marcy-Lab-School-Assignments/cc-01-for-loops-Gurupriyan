//1
function countToFifty(){
  for (let i = 1; i <= 50; i++){
      console.log (i);
  }
}

//2
function countFromOne( num ){
    for (let i = 1 ; i <= num; i++){
        console.log(i);
    }
}

//3
function threeAndFiveInFifty(){
  for (let i = 1; i <= 50; i++){
      if ( i % 3 === 0 || i % 5 ===0){
          console.log(i);
      }
  }
}

//4
function threeAndFive( num ){
  for (let i = 1; i <= num; i++){
      if ( i % 3 ===0 || i % 5 === 0){
          console.log(i);
      }
  }
}

//5
let newArray =[];
function triple(array){
  for (let i =0; i < array.length; i++){
    newArray.push(array[i]*3);
  }
  return newArray;
}

console.log('Count to 50:');
countToFifty();
console.log('Count to the given number:');
countFromOne(20);
console.log('Divisible by 3 or 5 in the first 50 numbers:');
threeAndFiveInFifty();
console.log('Divisible by 3 or 5 from 1 to the given number:');
threeAndFive(100);
console.log('Tripling function:');
console.log(triple([4, 8, 9]));