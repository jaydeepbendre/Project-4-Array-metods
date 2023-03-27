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



