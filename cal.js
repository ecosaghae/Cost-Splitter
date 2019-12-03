/* This is a simple program I created to calculate and split any kind of expenses
// in  a group.
*/


// This function divids the total amount by the number of people the user enters
function calc()
{
    let a = parseInt(document.getElementById('total').value);
    let b = parseInt(document.getElementById('people').value);
    let oper = document.getElementById('operators').value;
    
    if(oper === '/')
    {
        document.getElementById('result').value = (a/b).toFixed(2);
    }
}

// This function clears the old information the user entered
 function newFunction() {
    var inputs = document.querySelectorAll('input');
    for (i=0; i < inputs.length; i++){
              inputs[i].value = "";
    }
} 
