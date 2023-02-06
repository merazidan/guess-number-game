let inputNum = document.getElementById ("input-num")
let success = document.getElementById("success")
let failed = document.getElementById("failed")
let button = document.getElementById("button")
 let tryAgain = document.getElementById("try")
  let playAgain =document.getElementById("playAgain")
 var i=0;
 button.addEventListener("click",function(){
  i++
 
})
playAgain.addEventListener("click",function(){
  window.location.reload();
})
button.addEventListener("click",function(){
    let randomNum = Math.random();
let y = Math.floor(randomNum*10 );

console.log(y);
  if(inputNum.value==y){
  tryAgain.style.display="none"
  success.style.display="block"
  failed.style.display="none" 
 playAgain.style.display="block" 

  console.log(4)
}
else {
if( i<3){

  success.style.display="none"
failed.style.display="none"
tryAgain.style.display="block"
playAgain.style.display="none" 
console.log("tttttt")
}
else {
  success.style.display="none"
failed.style.display="block"
tryAgain.style.display="none"
playAgain.style.display="block" 
console.log("fffff")
}  
}
  }
)          
           
          
              
            
        
    
 




// if (x === y) {
//     window.alert("You got it right!")
//   } else {
//     window.alert("Try again")
//     for (i = 4; i < 4; i--) {
//       message[0] += "You have " + i + "tries left"
//       message[1] += "You have " + i + "tries left"
//       message[2] += "You have " + i + "tries left"
//       message[3] += "You are out of tries"
//     }
//   }
// const x = window.prompt("Enter a password");
// const maxtries = 3;
// for (var i = 0; i < maxtries; i++) {
//   var y = window.prompt("Reenter your password")
//   if (x === y) {
//     window.alert("You got it right!")
//   } else {
//     if (i < maxtries-1) {
//       window.alert(`You have ${maxtries-1-i} tries left, try again`);
//     } else {
//       window.alert("You're out of tries");
//     }
//   }
// }