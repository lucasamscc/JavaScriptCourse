// true -> disponivel
// false -> indisponivel

var poltronas = [false, true, false, true, true, true, false, true, false];

function carregarPoltronas(){
    var imagens = document.getElementsByTagName("img");
    for(var i = 0; i < imagens.length; i++){
        if(poltronas[i]){
            imagens[i].src = "https://img.icons8.com/emoji/256/yellow-circle-emoji.png" // caso true, retornar disponivel
        }else{
            imagens[i].src = "https://img.icons8.com/emoji/256/red-circle-emoji.png" // caso false, retornar indisponivel
        }    
    }
}

function selecionarPoltrona(){
    var imagens = document.getElementsByTagName("img");
    for(var i = 0; i < poltronas.length; i++){
        if(poltronas[i]){
         

            var quer = confirm("você quer esta Poltrona?");
            if(quer){
                imagens[i].src = "https://ouch-cdn2.icons8.com/ABfpc-0b9Lrn2fBxY9r-wCC1jowKni_sG-hLe4_CKeA/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTgz/LzViNWFiZDY4LTg2/OWEtNDg3NS1iZjQw/LTlkYmVkNzFmMGMz/Ni5wbmc.png"; // poltrona selecionada
                break; // deixa a poltrona selecionada
            }else{
                imagens[i].src = "https://img.icons8.com/emoji/256/yellow-circle-emoji.png"; //altera novamente para disponivel
            }
        }
    }
}