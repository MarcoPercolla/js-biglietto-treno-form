let distanceInput = document.querySelector("#distance");
let etaInput = document.querySelector("#eta");
let btn = document.querySelector("#mioBottone");
const ticket = document.querySelector("#ticket");

btn.addEventListener("click", function(){
    let distanceValue = parseInt(distanceInput.value);
    let etaValue = parseInt(etaInput.value);
   
    
    if ( Number.isFinite(distanceValue) && Number.isFinite(etaValue) && (distanceValue > 0) && (etaValue != 0)){
        
        ticket.classList.remove("d-none");

        let prezzo = (distanceValue * 0.21 );

        document.getElementById("price").innerHTML = `${prezzo.toFixed(2)} $`;
    
        let discount20 = (prezzo - (prezzo/100*20));
        let discount40 = (prezzo - (prezzo/100*40));
        

        if (etaValue == 1 ) {
    
            document.getElementById("sconto").innerHTML = ` ${ discount20.toFixed(2) } $ `;
        
        }else if (etaValue == 3) {
            document.getElementById("sconto").innerHTML = `${ discount40.toFixed(2) } $`
        }else if (etaValue == 2){
            document.getElementById("sconto").innerHTML = `${ prezzo.toFixed(2) } $ `
        }else if (etaValue == 0) {
            document.getElementById("scontoError").innerHTML = ` seleziona una tariffa `
        }else{
            document.getElementById("scontoError").innerHTML = ` errore `
        }
    
    }else if (distanceValue == 0 || distanceValue == NaN){
        console.log=("errore");
        document.getElementById("priceError").innerHTML = `seleziona una distanza valida`;
        document.getElementById("scontoError").innerHTML = ` errore `

    } else {
        console.log=("errore");
        document.getElementById("priceError").innerHTML = `seleziona una distanza valida`;
        document.getElementById("scontoError").innerHTML = ` errore `
    }




})

