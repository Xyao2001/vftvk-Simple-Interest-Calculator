/*to compute the interests*/

function compute()
{
    var principal =document.getElementById("principal").value;
    /* Validation for "Principal" input box*/
    if(parseInt(principal) <= 0 || principal==""){
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
        document.getElementById("interest").innerText= interest;
        document.getElementById("result").innerText="if you deposit " +principal;
        document.getElementById("result1").innerText=" at an interest rate of "+rate +"%";
        document.getElementById("result2").innerText="you will receive an amount of "+ "" + interest;
        document.getElementById("result3").innerText=" in the year" +" "+year;
      }

}

/*update the result*/
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
