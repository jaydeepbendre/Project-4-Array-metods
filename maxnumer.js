function max(){
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let num3 = parseFloat(document.getElementById("input3").value);

    if (num1==num2, num2==num3) 
    {
        document.getElementById("maxnum").innerHTML = "All numbers are equal";
    }

    else {
    if (num1 > num2) {
        if (num1 > num3) {
          document.getElementById("maxnum").innerHTML = "Maximum number is " + num1;
        } else {
          document.getElementById("maxnum").innerHTML = "Maximum number is " + num3;
        }
        } else {
        if (num2 > num3) {
          document.getElementById("maxnum").innerHTML = "Maximum number is " + num2;
        } else {
          document.getElementById("maxnum").innerHTML = "Maximum number is " + num3;
        }
      }
    }
      document.getElementById("maxnum").style.display="block";
    }

