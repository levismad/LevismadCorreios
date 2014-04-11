function formatarCEP(){
    var campo = document.getElementById("billing:postcode").value;
                var s = campo.replace(/(\.|\(|\)|\/|\-| )+/g, '');
                document.getElementById("billing:postcode").value = s.substr(0,5)+'-'+ s.substr(5,3);
}

function CEP(cep) {
    var campo = document.getElementById(cep.id).value;
    var s = campo.replace(/(\.|\(|\)|\/|\-| )+/gi, '');
    document.getElementById(cep.id).value = s.substr(0, 5) + '-' + s.substr(5, 3);

}

function Valida(taxvat) {

    var campo = document.getElementById(taxvat.id).value;
    var s = campo.replace(/(\.|\(|\)|\/|\-| )+/g, '');
    var tam = s.length;
    if (tam < 11 || tam > 14) {
        alert('CPF/CNPJ incorreto.');
    } else if (tam == 11) {
        document.getElementById(taxvat.id).value = s.substr(0, 3) + '.' + s.substr(3, 3) + '.' + s.substr(6, 3) + '-' + s.substr(9, 2);
    } else if (tam == 14) {
        document.getElementById(taxvat.id).value = s.substr(0, 2) + '.' + s.substr(2, 3) + '.' + s.substr(5, 3) + '/' + s.substr(8, 4) + '-' + s.substr(12, 2);
    } else {
        alert('CPF/CNPJ incorreto.');
    }
}

function TEL(tel) {
    var campo = document.getElementById(tel.id).value;
    var s = campo.replace(/(\.|\(|\)|\/|\-| )+/g, '');

    if (s.length >= 10 && s.length <= 11) {
        if (s.length == 11 && s.substr(2, 1) == 9) {
            document.getElementById(tel.id).value = '(' + s.substr(0, 2) + ') ' + s.substr(2, 5) + '-' + s.substr(7, 4);
        } else if (s.length == 10) {
            document.getElementById(tel.id).value = '(' + s.substr(0, 2) + ') ' + s.substr(2, 4) + '-' + s.substr(6, 4);
        } else {
            alert("Digite um numero de telefone valido.\nExemplo Telefones Fixos: (11) XXXX-XXXX\nExemplo Telefones Moveis: (11) XXXXX-XXXX \nPode-se inserir somente numeros, exemplo:\n 11XXXXXXXX ,ou\n 119XXXXXXXX.");
            document.getElementById(tel.id).value = "";
        }
    } else {
        alert("Digite um numero de telefone valido.\nExemplo Telefones Fixos: (11) XXXX-XXXX\nExemplo Telefones Moveis: (11) XXXXX-XXXX \nPode-se inserir somente numeros, exemplo:\n 11XXXXXXXX ,ou\n 119XXXXXXXX.");
        document.getElementById(tel.id).value = "";
    }
}
/*
function NUM(num) {
                
                var campo = document.getElementById(num.id).value;
                var s = campo.replace(new RegExp('[^0-9]','gi'),'');
                document.getElementById(num.id).value = s;
                }
function TXT(comp) {
                
                var campo = document.getElementById(comp.id).value;
                var s = campo.replace(new RegExp('[^A-Za-z]','gi'),'');
                document.getElementById(comp.id).value = s;
                
                }*/