    let name = prompt("Enter your name to visit my website");
    // let pass = prompt("Enter password");

    if(true)
    {
        alert("Welcome to my website");
        let output = document.getElementById('output_screen')

    function display(num){
        output.value += num;
    }
    function Calculate()
    {
        try{
            output.value = eval(output.value);
            
        }
        catch(err){
            output.value = "Invalid";
        }
    }
    
    function Clear()
    {
        output.value = "";
    }
    function del(){
        output.value = output.value.slice(0,-1);
        //this slice(remove frome begning,remove from end)
    }
    
    function dark(){
        document.getElementById('body').style.backgroundColor = "gray"
        
     }
    function light(){
        document.getElementById('body').style.backgroundColor = "blanchedalmond"
     }
    }
    
    else
    {
        document.body.innerHTML = "Error ";
        document.write("<br>")
        document.write("Sorry you can't visite my website")
    }