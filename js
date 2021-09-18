//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        num--;

        document.frmCalc.txtNumber.value = num;

    }

}

//The following function increases the value of displayed number by 1.

//isNaN method checks whether the value passed to the method is a number or not.

function increment() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        num++;

        document.frmCalc.txtNumber.value = num;

    }

}

//The following function is called when “sqrt” button is clicked.

//Note that it also changes the values of the global variables.

function sqrt() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        var sqrtvalue = Math.sqrt(num);

        document.frmCalc.txtNumber.value = sqrtvalue;

    }

}

//The following function is called when “floor” button is clicked.

//Note that it also changes the values of the global variables.

function floor() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        var floorvalue = Math.floor(num);

        document.frmCalc.txtNumber.value = floorvalue;
    }
}

//The following function is called when “round” button is clicked.

//Note that it also changes the values of the global variables.

function round() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        var roundvalue = Math.round(num);

        document.frmCalc.txtNumber.value = roundvalue;

    }

}

//The following function is called when “square” button is clicked.

//Note that it also changes the values of the global variables.

function square() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        var powvalue = Math.pow(num, 2);

        document.frmCalc.txtNumber.value = powvalue;

    }

}

//The following function is called when “Add” button is clicked.

//Note that it also changes the values of the global variables.

function add() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        prevCalc = num;

        document.frmCalc.txtNumber.value = "";

        calc = "Add";
    }

}

//The following function is called when “Subtract” button is clicked.

//Note that it also changes the values of the global variables.

function subtract() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        prevCalc = num;

        document.frmCalc.txtNumber.value = "";

        calc = "Subtract";

    }

}

//The following function is called when “Multiply” button is clicked.

//Note that it also changes the values of the global variables.

function multiply() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        prevCalc = num;

        document.frmCalc.txtNumber.value = "";
        calc= "Multiply";

    }

}

//The following function is called when “Divide” button is clicked.

//Note that it also changes the values of the global variables.

function divide() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        prevCalc = num;

        document.frmCalc.txtNumber.value = "";
        calc = "Divide";

    }

}



//The following function is called when “Power” button is clicked.

//Note that it also changes the values of the global variables.

function power() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        prevCalc = num;

        document.frmCalc.txtNumber.value = "";
        calc = "Power";
    }

}




//The following function is called when “Calculate” button is clicked.

//Note that this function is dependent on the value of global variable.

function calculate() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {

        var total = 0;

        if (calc == "Add") {

            total = prevCalc + num;

            document.frmCalc.txtNumber.value = total;

        } else if (calc == "Subtract"){}

            total = prevCalc - num;

            document.frmCalc.txtNumber.value = total;

        } else if (calc == "Multiply"){

            total = prevCalc * num;

            document.frmCalc.txtNumber.value = total;

        } else if (calc == "Divide"){

            total = prevCalc / num;

            document.frmCalc.txtNumber.value = total;

        } else if (calc == "Power") {

            total = Math.pow(prevCalc, num);

            document.frmCalc.txtNumber.value = total;

        }

    }



function clear() {
    document.frmCalc.txtNumber.value = "";
    prevCalc = 0;
    calc ="";
}
