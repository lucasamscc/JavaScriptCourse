function calcularIMC(){
    var formulario = document.getElementById("formulario");

    var kilos = +formulario.tKilo.value;
    var metro = +formulario.tMetro.value;
    var centimetro = +formulario.tCent.value;

    var altura = (metro * 100 + centimetro)/100;

    var imc = kilos / (altura * altura);
    
    formulario.imc.value = imc.toFixed(2);
    
}