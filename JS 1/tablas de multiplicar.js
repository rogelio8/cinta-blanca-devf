var colores=['red','blue','orange','green','yellow'];

function generaTablas(){
    var numero= document.getElementById('numero').value;
    if (numero > 0){
    
        var resultados= document.getElementById('resultados').value;
        resultados.innerHTML='';

         for (var tabla=1; tabla<=numero; tabla ++){ 
            //Genero Tarjeta
            var tarjeta= document.createElement('div');
            tarjeta.classList.add('tarjeta');
            tarjeta.classList.add(getRandomColor());

            for ( var index=1; index<=10; index++){

                var linea = document.createElement('h4');
                linea.textContent =tabla+'x'+index+'='+tabla*index
                tarjeta.appendChild (linea);

                // Genero el contenido
            }

            var body = document.getElementsByTagName('body')[0];
            body.appendChild(tarjeta);
        } 
        numero.textContent='';

    }
}
