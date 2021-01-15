var inputs = [];
function GetParagraph(parainput,concatpara)
{
    for (var i = 1 ; i <=6 ; i++)
    {
    inputs.push(document.getElementById(parainput+"_" + i).value);
    }
    inputs.join(". ");
    console.log (inputs.toString());
    document.getElementById("concatpara").value = inputs.toString();
    console.log ( document.getElementById (concatpara).value);
   
}
