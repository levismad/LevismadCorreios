var spinner = {

    initialize: function () {
        this._createHTML();
        this._createEvents();
        $("#bg_fade_cep").hide();
        $("#containerCepDiv").hide();
    },
    _createHTML: function () {
        var fade = $("<div id='bg_fade_cep'></div>");
        $(fade).css({
            'background-color': '#000',
                'left': '0px',
                'margin': '0px',
                'padding': '0px',
                'position': 'fixed',
                'top': '0px',
                'width': '100%',
                'z-index': '998',
                'height': '1000px',
                'opacity': '0.5'
        });
        var divC = $("<div id='containerCepDiv'></div>");
        $(divC).css({
            'width': '400px',
                'z-index': '999',
                'left': '35%',
                'top': '40%',
                'position': 'fixed',
                'display': 'block'
        });
        var div = $("<div id='message' class='messageDiv'></div>");
        $(div).css({
            'position': 'relative',
                'padding': '20px',
                'text-align': 'center',
                'border': '10px solid #EAE9E6',
                'background-color': 'white',
                'z-index': '99999',
                'overflow': 'hidden'
        });
        var spin = $("<div id='spinJs'></div>");
        $(spin).css({
            'position': 'relative',
                'width': '20px',
                'min-height': '20px',
                'height': '20px',
                'margin-left': '30%',
                'padding-top': '5%',
                'text-align': 'right',
                'float': 'left'
        });
        var texto = $("<div class='message'>Aguarde um instante...</div>");
        $(texto).css({
            'padding-top': '5px',
                'float': 'left'
        });
        $(div).append(spin);
        $(div).append(texto);
        $(divC).append(div);
        $("body").append(fade);
        $("body").append(divC);

    },
    _createEvents: function () {
        $(document).on('click', '#bg_fade_cep', function (e) {
            $(".buscaCep").trigger('click');
        });

        //create spinner
        $(document).on('click', '.buscaCep', function (e) {
            var opts = {
                lines: 9, // The number of lines to draw
                length: 5, // The length of each line
                width: 2, // The line thickness
                radius: 4, // The radius of the inner circle
                corners: 1, // Corner roundness (0..1)
                rotate: 0, // The rotation offset
                direction: 1, // 1: clockwise, -1: counterclockwise
                color: '#AAA', // #rgb or #rrggbb or array of colors
                speed: 1.6, // Rounds per second
                trail: 100, // Afterglow percentage
                shadow: false, // Whether to render a shadow
                hwaccel: false, // Whether to use hardware acceleration
                className: 'spinner', // The CSS class to assign to the spinner
                zIndex: 2e9, // The z-index (defaults to 2000000000)
                top: 'auto', // Top position relative to parent in px
                left: 'auto' // Left position relative to parent in px
            };
            var target = document.getElementById('spinJs');
            var spinner = new Spinner(opts).spin(target);

            //show modal
            $("#bg_fade_cep").toggle();
            $("#containerCepDiv").toggle();

        });
    }
}
    spinner.initialize();

var url = "http://localhost/magento-1.8.1.0/magento/Correios";

function populateEstados(sigla, campo) {
    switch (sigla) {
        case "AC":
            estado = "Acre";
            code = 485;
            break;
        case "AL":
            estado = "Alagoas";
            code = 486;
            break;
        case "AP":
            estado = "Amap\341";
            code = 487;
            break;
        case "AM":
            estado = "Amazonas";
            code = 488;
            break;
        case "BA":
            estado = "Bahia";
            code = 489;
            break;
        case "CE":
            estado = "Cear\341";
            code = 490;
            break;
        case "ES":
            estado = "Esp\355rito Santo";
            code = 491;
            break;
        case "GO":
            estado = "Goi\341s";
            code = 492;
            break;
        case "MA":
            estado = "Maranh\343o";
            code = 493;
            break;
        case "MT":
            estado = "Mato Grosso";
            code = 494;
            break;
        case "MS":
            estado = "Mato Grosso do Sul";
            code = 495;
            break;
        case "MG":
            estado = "Minas Gerais";
            code = 496;
            break;
        case "PA":
            estado = "Par\341";
            code = 497;
            break;
        case "PB":
            estado = "Para\355ba";
            code = 498;
            break;
        case "PR":
            estado = "Paran\341";
            code = 499;
            break;
        case "PE":
            estado = "Pernambuco";
            code = 500;
            break;
        case "PI":
            estado = "Piau\355;";
            code = 501;
            break;
        case "RJ":
            estado = "Rio de Janeiro";
            code = 502;
            break;
        case "RN":
            estado = "Rio Grande do Norte";
            code = 503;
            break;
        case "RS":
            estado = "Rio Grande do Sul";
            code = 504;
            break;
        case "RO":
            estado = "Rond\364nia";
            code = 505;
            break;
        case "RR":
            estado = "Roraima";
            code = 506;
            break;
        case "SC":
            estado = "Santa Catarina";
            code = 507;
            break;
        case "SP":
            estado = "S\343o Paulo";
            code = 508;
            break;
        case "TO":
            estado = "Tocantins";
            code = 510;
            break;
        case "SE":
            estado = "Sergipe";
            code = 509;
            break;
        case "DF":
            estado = "Distrito Federal";
            code = 511;
            break;
    }



    var x = document.getElementById(campo);
    var i = x.options.length - 1;

    for (; i >= 0; i--) {

        if (x.options[i].text == estado) {

            x.selectedIndex = i;


        }



    }
}

function buscar_end() {

    document.getElementById('billing:street1').setAttribute('readonly', true);
    document.getElementById('billing:street4').setAttribute('readonly', true);
    document.getElementById('billing:city').setAttribute('readonly', true);

    var campo = "billing:region_id";
    new Ajax.Request(url, {
        method: 'post',
        parameters: 'cep=' + $('billing:postcode').value,
        onComplete: function (transport) {
            var res = transport.responseText.evalJSON();

            if (res.resultado == '1') {
                $('billing:street1').value = res.tipo_logradouro + ' ' + res.logradouro;
                $('billing:street4').value = res.bairro;
                $('billing:city').value = res.cidade;

                var sigla = res.uf;
                var code;

                populateEstados(sigla, campo);


            } else {
                alert("CEP invalido.");
                document.getElementById("billing:postcode").value = "";
            }

        }
    });
    setTimeout(function () {

        document.getElementById('billing:street1').readOnly = false;
        document.getElementById('billing:street4').readOnly = false;
        document.getElementById('billing:city').readOnly = false;
    }, 3000);
}

function buscar_end_zip() {
    var campo = "region_id";
    new Ajax.Request(url, {
        method: 'post',
        parameters: 'cep=' + $('zip').value,
        onComplete: function (transport) {
            var res = transport.responseText.evalJSON();

            if (res.resultado == '1') {
                $('street_1').value = res.tipo_logradouro + ' ' + res.logradouro;
                $('street_4').value = res.bairro;
                $('city').value = res.cidade;

                var sigla = res.uf;
                var code;
                populateEstados(sigla, campo);

            } else {
                alert("CEP invalido.");
                document.getElementById("zip").value = "";
            }
        }
    });
}

function buscar_end_shipping() {
    var campo = "shipping:region_id";
    new Ajax.Request(url, {
        method: 'post',
        parameters: 'cep=' + $('shipping:postcode').value,
        onComplete: function (transport) {
            var res = transport.responseText.evalJSON();

            if (res.resultado == '1') {
                $('shipping:street1').value = res.tipo_logradouro + ' ' + res.logradouro;
                $('shipping:street4').value = res.bairro;
                $('shipping:city').value = res.cidade;

                var sigla = res.uf;
                var code;
                populateEstados(sigla, campo);

            } else {
                alert("CEP invalido.");
                document.getElementById("shipping:postcode").value = "";
            }
        }
    });
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