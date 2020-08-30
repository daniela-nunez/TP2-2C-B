let nroSilla= 2;
console.log(saveThePrisioner(prisionero,golosinas,nroSilla));

function saveThePrisioner(prisionero,golosinas,nroSilla){
 let victima = "";
 let fin = false;
    while (!fin) {
        if(nroSilla == prisionero && golosinas > 1) {
            nroSilla = 1 
        } else if(golosinas == 1){
            victima = nroSilla;
            fin = true;
        } else {
            nroSilla++;
        }
        golosinas--;  
    }
    return victima;
}