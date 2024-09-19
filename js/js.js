// step-1 :- set event handler
let buttonId = document.getElementById("buttonId")
buttonId.addEventListener("click", (even) => {
    // step-2 :- set preventDefault
    even.preventDefault()

    // step-3 :-get the phone number
    let phoneNumber = document.getElementById("phoneNumber").value;
    let pinNumber = document.getElementById("pinNumber").value;
   
    // if(phoneNumber == "01947910254" && pinNumber === "2255"){
    //     console.log("OK")
    //     window.location.replace("/home.html");
    // }else{
    //     alert("Phone or Pin number is incorrect")
    // }

    //////////////////////////////
    if(!isNaN(phoneNumber) && phoneNumber.length == 11 && phoneNumber === "01947910254" && pinNumber == "2255"){
        window.location.href = "/home.html";
        document.getElementById("phoneNumber").value = ""
    }else{
        alert("Please! Chake Your Phone Or PIN")
        document.getElementById("phoneNumber").value = ""
    }
})
