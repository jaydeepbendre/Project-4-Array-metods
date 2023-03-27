//Sort Words in Alphabetical Order

function alpha() {
    const inputField = document.getElementById("input4");
    const line = inputField.value;
    const words = line.split(' ').sort();
    const sortedLine = words.join(' ');

    document.getElementById("outputline").textContent = sortedLine;
    document.getElementById("outputline").style.display="block";
  }


//  Reverse a String using for loop

function reversestring(){

  let string = document.getElementById("input5").value;
  let stringLength = string.length;

  let reverse = "";
  let final = "";

  for (let i = 1; i <= stringLength; i++) {
    reverse = reverse + string[stringLength - i];
    final = final + reverse;
  }

  document.getElementById("reverse").textContent = reverse;

  document.getElementById("reverse").style.display="block";
}

//  Check if a Number is Odd or Even

function oddeven(){
  let number = parseFloat(document.getElementById("input6").value);

  if (number % 2 == 0) {
    document.getElementById("oddevenot").innerHTML = number +" is Even number";
   } else {
    document.getElementById("oddevenot").innerHTML = number +" is Odd number";

   }

   document.getElementById("oddevenot").style.display="block"; 
  }

//  Check if a word is palidrome or not

function checkpalindrome() {
  const word = document.getElementById("input7").value;
  const length = word.length;
  let result = `${word}  is a Palindrome`;

  for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      result = `${word}  is not a Palindrome`;
    }
  }
    document.getElementById("result").textContent = result;
  
  document.getElementById("result").style.display="block"; 
}


//Printing star pattern

  function starpattern(){
  let stars = '';
  let b= document.getElementById("input8").value;

  for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    stars += "<br>";
  }
  document.getElementById("star").innerHTML = stars;
  document.getElementById("star").style.display="block"; 

  }
  
// Convert the First Letter of a String in to Uppercase

function firstletter() {
  let inputt = document.getElementById("input9").value;
  let output = inputt.charAt(0).toUpperCase() + inputt.slice(1);
  document.getElementById("firstlet").innerHTML = output;

  document.getElementById("firstlet").style.display="block"; 
}