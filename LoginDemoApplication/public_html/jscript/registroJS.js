$(document).ready(function (){
    $("#enviar").click(function (){
        var clave = $("#contraseña").val();
        var mes = $("#mes").val();
        var genero = $("#genero").val();
        var telefono = $("#telefono").val();
        
        if(clave.length<6){
            alert("La clave debe tener minimo 6 caracteres");
            return false;
        }
        
        if(mes == ''){
            alert("Seleccione mes válido");
            return false;
        }
        if(genero == ''){
            alert("Seleccione Genero");
            return false;
        }
        if(telefono.length < 8){
            alert("Ingrese celular numero valido");
            return false;
        }
        alert("Validaciones Ok");
        
    })
})