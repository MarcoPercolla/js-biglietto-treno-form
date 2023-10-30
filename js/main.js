let distanceInput = document.querySelector("#distance");
let etaInput = document.querySelector("#eta");
let btn = document.querySelector("#mioBottone");
let btn2 = document.querySelector("#mioBottone2");
let nameInput= document.querySelector("#name");
let surnameInput= document.querySelector("#surname");
const ticket = document.querySelector("#ticket");
const error1 = document.querySelector("#priceError");
const error2 = document.querySelector("#scontoError");


btn.addEventListener("click", function(){
    let distanceValue = parseInt(distanceInput.value);
    let etaValue = parseInt(etaInput.value);
    let username = (nameInput.value + " " + surnameInput.value);
   
    
    if ( Number.isFinite(distanceValue) && Number.isFinite(etaValue) && (distanceValue >= 1) && (etaValue > 0) && (nameInput.value != "") && (surnameInput.value != "")){
        
        ticket.classList.remove("d-none");
        error1.classList.add("d-none");
        error2.classList.add("d-none");
        errorContainer.classList.add("d-none");

        let prezzo = (distanceValue * 0.21 );
        document.getElementById("nameTicket").innerHTML = `${username.toUpperCase()} `;
        document.getElementById("price").innerHTML = `${prezzo.toFixed(2)} $`;
    
        let discount20 = (prezzo - (prezzo/100*20));
        let discount40 = (prezzo - (prezzo/100*40));
        

        if (etaValue == 1 ) {
    
            document.getElementById("sconto").innerHTML = ` ${ discount20.toFixed(2) } $ `;
            document.getElementById("discount").innerHTML = `Tariffa Under 18`;
        
        }else if (etaValue == 3) {
            document.getElementById("sconto").innerHTML = `${ discount40.toFixed(2) } $`
            document.getElementById("discount").innerHTML = `Tariffa over 65`;
        }else if (etaValue == 2){
            document.getElementById("sconto").innerHTML = ` same `
            document.getElementById("discount").innerHTML = `Tariffa Standard`;
        }else if (etaValue == 0) {
            ticket.classList.add("d-none");
            error1.classList.remove("d-none");
            error2.classList.remove("d-none");
            errorContainer.classList.remove("d-none");
            document.getElementById("priceError").innerHTML = `seleziona una tariffa valida`;
            document.getElementById("scontoError").innerHTML = ` seleziona una tariffa `
        }else{
            ticket.classList.add("d-none");
            error1.classList.remove("d-none");
            error2.classList.remove("d-none");
            errorContainer.classList.remove("d-none");
            document.getElementById("scontoError").innerHTML = ` errore 404`
        }
    
    }else if (distanceValue < 1){
        ticket.classList.add("d-none");
        error1.classList.remove("d-none");
        error2.classList.remove("d-none");
        errorContainer.classList.remove("d-none");
        console.log=("errore");
        document.getElementById("priceError").innerHTML = `Seleziona una distanza valida`;
        document.getElementById("scontoError").innerHTML = `Errore distanza inferiore a 1 `

    } else {
        ticket.classList.add("d-none");
        error1.classList.remove("d-none");
        error2.classList.remove("d-none");
        errorContainer.classList.remove("d-none");
        console.log=("errore");
        document.getElementById("priceError").innerHTML = `Accertati di aver selezionato tutto, grazie`;
        document.getElementById("scontoError").innerHTML = `Error 404 `
    }




})

btn2.addEventListener("click", function(){
    ticket.classList.add("d-none");
    error1.classList.add("d-none");
    error2.classList.add("d-none");
    errorContainer.classList.add("d-none");
    distanceInput.value = "";
    nameInput.value = "";
    surnameInput.value = "";
    etaInput.value= "0";
    

})