function pregunta(){
    var edad= prompt ('Pon tu edad');
    var resultado;
    //Caso0
    if(edad>=18){
        resultado='Ya es mayor de edad';
        //Caso A
        if(edad>23){
            //Caso B
            if(edad>26){
                //Caso C
                if(edad>30){
                    //Caso D
                    if(edad>45){
                        //Caso E
                        if(edad>60){
                            resultado='Abuelito';
                        }else{
                            resultado='Adulto';
                        }
                    }else{
                        resultado='Señor';
                    }
                }else{
                    resultado='PhD';
                }

            }else{
                resultado='Maestría';
            }

        }else{
            resultado='Uni';
        }
    } else{
        resultado='No entras papá';
        //Caso1
        if(edad<15){
            //Caso 2
            if(edad<12){
                //Caso 3
                if(edad<6){
                    resultado='Esta en el kinder';
                }else {
                    resultado='Esta en la primaria';
                }
            }else{
                resultado='Esta en la secundaria';
            }
        }else{
            resultado='Está en la prepa';
        }
    }
    var encabezado= document.createElement('h1'); //Ya tengo un h1 en memoria
    encabezado.textContent =edad +' - '+ resultado; // <h1>uni</h1>
    var body = document.getElementsByTagName('body')[0];//Obtener el BODY
    body.appendChild(encabezado); //agregar el nuevo elemento como hijo
}