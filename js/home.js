let buttonAddMony = document.getElementById("buttonAddMony")
buttonAddMony.addEventListener("click", (event) => {
    event.preventDefault();
    
    let addMonyInput = document.getElementById("addMonyInput").value;
    let pinNumbetForAddingMony = document.getElementById("pinNumbetForAddingMony").value;

    
    if(pinNumbetForAddingMony === "ba"){
        if(!isNaN(addMonyInput)){
                
            let currentBalance = document.getElementById("currentBalance").innerText;
            
            let addMonyNumber = parseInt(addMonyInput);
            let currentBalanceNumbet = parseInt(currentBalance);

            let newCurrentBalance = addMonyNumber + currentBalanceNumbet;
            document.getElementById("currentBalance").innerText = newCurrentBalance;
            document.getElementById("addMonyInput").value = "";
            document.getElementById("pinNumbetForAddingMony").value = "";
        }else{
            alert("Not Valid Input")
        }
    }else{
        alert("Faild To Added Mony Please Try Again......")
    }
})