let buttonWithdrawMony = document.getElementById("buttonWithdrawMony")
buttonWithdrawMony.addEventListener("click", (event) => {
    event.preventDefault();
    
    let withdrawMonyInput = document.getElementById("withdrawMonyInput").value;
    let pinNumbetForWithdrawMony = document.getElementById("pinNumbetForWithdrawMony").value;

    
    if(pinNumbetForWithdrawMony === "ba"){
        if(!isNaN(withdrawMonyInput)){
                
            let currentBalance = document.getElementById("currentBalance").innerText;
            
            let withdrawMonyNumber = parseInt(withdrawMonyInput);
            let currentBalanceNumbet = parseInt(currentBalance);

            let newCurrentBalance = currentBalanceNumbet - withdrawMonyNumber;
            document.getElementById("currentBalance").innerText = newCurrentBalance;
            document.getElementById("withdrawMonyInput").value = "";
            document.getElementById("pinNumbetForWithdrawMony").value = "";
        }else{
            alert("Not Valid Input")
        }
    }else{
        alert("Faild To Added Mony Please Try Again......")
    }
})