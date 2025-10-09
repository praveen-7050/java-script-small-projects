const display=document.getElementById("display")
function displayoutput(input){
 display.value+=input
}

function calculate(){
    try{
        display.value=eval(display.value)
    }catch(Error){
        display.value="Error"
    }
}
function cleardisplay(){
 display.value=""
}