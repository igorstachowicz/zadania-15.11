function calculate(var1, var2, var3) {

    var1 = parseInt(document.getElementById("first").value);
    var2 = parseInt(document.getElementById("second").value);

    if (document.getElementById("add").checked) {
        var3 = var1 + var2;
    } else if (document.getElementById("subtract").checked) {
        var3 = var1 - var2;
    } else if (document.getElementById("multiply").checked) {
        var3 = var1 * var2;
    } else if (document.getElementById("divide").checked) {
        var3 = var1 / var2;
    } else if (var1 == 0 || var2 == 0) {
        document.getElementById("calcResult").innerHTML = ""
    }

    document.getElementById("calcResult").innerHTML = var3;
}

function palindrome(var1) {

    var1 = document.getElementById("inputbox2").value;

    let array = var1.split("");
    let xd = "";

    for (let i = array.length - 1; i >= 0; i--) {
        xd += array[i];
    }

    if (var1 == xd) {
        document.getElementById("palindromeResult").innerHTML = "True";
    } else {
        document.getElementById("palindromeResult").innerHTML = "False";
    }
}

