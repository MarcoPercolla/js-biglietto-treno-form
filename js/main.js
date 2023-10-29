let distanceInput = document.querySelector("#distance");
let etaInput = document.querySelector("#eta");
let btn = document.querySelector("#mioBottone");

btn.addEventListener("click", function(){
    let distanceValue = parseInt(distanceInput.value);
   
    let etaValue = parseInt(etaInput.value);
   
    
    if ( Number.isFinite(distanceValue) && Number.isFinite(etaValue) && (distanceValue != 0)){
        console.log=("ok");
        let prezzo = (distanceValue * 0.21 );
        
        document.getElementById("price").innerHTML = `il viaggio costa:${prezzo.toFixed(2)} $`;
    
        let discount20 = (prezzo - (prezzo/100*20));
        
    
        let discount40 = (prezzo - (prezzo/100*40));
        

        if (etaValue == 1 ) {
    
            document.getElementById("sconto").innerHTML = ` per te uno sconto del 20%, il biglietto per te costa: ${ discount20.toFixed(2) } $ `;
        
        }else if (etaValue == 3) {
            document.getElementById("sconto").innerHTML = ` per te uno sconto del 40%, il biglietto per te costa: ${ discount40.toFixed(2) } $`
        }else if (etaValue == 2){
            document.getElementById("sconto").innerHTML = ` tu pagi intero, il biglietto per te costa: ${ prezzo.toFixed(2) } $ `
        }else if (etaValue == 0) {
            document.getElementById("sconto").innerHTML = ` seleziona una tariffa `
        }else{
            document.getElementById("sconto").innerHTML = ` errore `
        }
    
    }else if (distanceValue == 0 || distanceValue == NaN){
        console.log=("errore");
        document.getElementById("price").innerHTML = `seleziona una distanza`;
        document.getElementById("sconto").innerHTML = ` errore `

    } else {
        console.log=("errore");
        document.getElementById("price").innerHTML = `seleziona una distanza`;
        document.getElementById("sconto").innerHTML = ` errore `
    }




})

