
function validaAnagrama(){
    debugger;
    //Primer Paso Validar la entrada del usuario
    var palabra1 = document.getElementById('palabra1').value;
    var palabra2 = document.getElementById('palabra2').value;

    if(validaInputs(palabra1,palabra2)){
        //Paso 0 en Anagrama
        var palabraOrdenada1=palabra1.toLocaleLowerCase().split("").sort().join("");
        var palabraOrdenada2=palabra2.toLocaleLowerCase().split("").sort().join("");

        if (palabraOrdenada1===palabraOrdenada2){
            creaTarjeta(palabra1+" - "+palabra2,false);
            
        } else {
            creaTarjeta(palabra1+" - "+palabra2,true);
        }
    }else{
        //Mostramos error imputs
        alert('no se puede, no es un anagrama');
    }
}

/**
 * This function will validate if te imput are not empty
 * @argument {string} texto1
 * @argument {string} texto2
 * @returns {boolean}
 * @author Roger
 */
function validaInputs(texto1,texto2){
    return texto1.length>0 && texto2.length>0;

}

function creaTarjeta (texto,erroneo){
    var tarjeta=document.createElement ('div');
    var h3= document.createElement('h3');

    h3.textContent=texto;
    tarjeta.appendChild(h3);
    tarjeta.classList.add('tarjeta');

    if (erroneo)
        tarjeta.classList.add('erroneo'); 
    else
        tarjeta.classList.add('correcto');
    var resultado = document.getElementsByClassName('resultados')[0];
    resultado.appendChild(tarjeta);
       
}