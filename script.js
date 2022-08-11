/*to compute the interests*/

function compute()
{
    var principal =document.getElementById("principal").value;
    /* Validation for "Principal" input box*/
    if(parseInt(principal) <= 0){
      alert("Enter a positive number");
      document.getElementById("principal").focus();
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var total_amount=parseInt(principal)+parseInt(interest);

        /*return the result in inner html*/
        document.getElementById("result").innerText="if you deposit " +principal +" at an interest rate of "+rate +"%"+
        " you will receive an amount of "+ " " + interest+" in the year" +" "+year;
      }

}

/*update the result*/
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
