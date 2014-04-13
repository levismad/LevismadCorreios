jQuery(document).ready(function () {
    spinner.initialize();
    var a = jQuery("body").find("input[name*='[postcode]']");

    for (i = 0; i < a.length; i++) {
        var name = jQuery(a[i]).attr('id');
        name = name.substr(0, name.indexOf(':'));
        jQuery(a[i]).attr('onblur', "buscaCep(\"" + name + "\")");
    }
});

var url = "http://localhost/Correios";

var spinner = {

    initialize: function () {
        this._createHTML();
        this._createEvents();
        this._hide();
    },
    _createHTML: function () {
        var fade = jQuery("<div id='bg_fade_cep'></div>");
        jQuery(fade).css({
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
        var divC = jQuery("<div id='containerCepDiv'></div>");
        jQuery(divC).css({
            'width': '400px',
                'z-index': '999',
                'left': '35%',
                'top': '40%',
                'position': 'fixed',
                'display': 'block'
        });
        var div = jQuery("<div id='message' class='messageDiv'></div>");
        jQuery(div).css({
            'position': 'relative',
                'padding': '20px',
                'text-align': 'center',
                'border': '10px solid #EAE9E6',
                'background-color': 'white',
                'z-index': '99999',
                'overflow': 'hidden'
        });
        var spin = jQuery("<div id='spinJs'></div>");
        jQuery(spin).css({
            'position': 'relative',
                'width': '20px',
                'min-height': '20px',
                'height': '20px',
                'margin-left': '30%',
                'padding-top': '5%',
                'text-align': 'right',
                'float': 'left'
        });
        var texto = jQuery("<div class='message'>Aguarde um instante...</div>");
        jQuery(texto).css({
            'padding-top': '5px',
                'float': 'left'
        });
        jQuery(div).append(spin);
        jQuery(div).append(texto);
        jQuery(divC).append(div);
        jQuery("body").append(fade);
        jQuery("body").append(divC);

    },
    _createEvents: function () {

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
        this._toggle();
        //show modal

    },
    _toggle: function () {

        jQuery("#bg_fade_cep").toggle();
        jQuery("#containerCepDiv").toggle();
    },
    _hide: function () {

        jQuery("#bg_fade_cep").hide();
        jQuery("#containerCepDiv").hide();
    }
}



function buscaCep(tipo) {

    spinner._toggle();
    switch (tipo) {
        case "zip":
            var campo = "region_id";
            new Ajax.Request(url + '?cep=' + $('zip').value, {
                method: 'post',
                onComplete: function (transport) {
                    var res = transport.responseText.evalJSON();
                    try {
                        if (res[0].resultado == '1') {
                            $('street_1').value = res[0].tp_logradouro + ' ' + res[0].logradouro;
                            $('city').value = res[0].cidade;

                            var sigla = res[0].estado;
                            try {
                                populateEstados(sigla, campo);
                            } catch (ex) {} finally {
                                try {
                                    $('street_4').value = res[0].bairro;
                                } catch (ex) {}
                            }
                        }
                    } catch (ex) {}
                    spinner._toggle();


                }
            });
            break;
        case "shipping":
            var campo = "shipping:region_id";
            new Ajax.Request(url + '?cep=' + $('shipping:postcode').value, {
                method: 'post',
                onComplete: function (transport) {
                    var res = transport.responseText.evalJSON();
                    try {
                        if (res[0].resultado == '1') {
                            $('shipping:street1').value = res[0].tp_logradouro + ' ' + res[0].logradouro;
                            $('shipping:city').value = res[0].cidade;
                            var sigla = res[0].estado;
                            try {
                                populateEstados(sigla, campo);
                            } catch (ex) {} finally {

                                try {
                                    $('shipping:street4').value = res[0].bairro;
                                } catch (ex) {}
                            }

                        }
                    } catch (ex) {}
                    spinner._toggle();


                }
            });
            break;
        case "billing":
            var campo = "billing:region_id";
            new Ajax.Request(url + '?cep=' + $('billing:postcode').value, {
                method: 'post',
                onComplete: function (transport) {
                    var res = transport.responseText.evalJSON();

                    try {

                        if (res[0].resultado == '1') {
                            // if (res.resultado == '1') {
                            $('billing:street1').value = res[0].tp_logradouro + ' ' + res[0].logradouro;
                            $('billing:city').value = res[0].cidade;
                            var sigla = res[0].estado;
                            try {
                                populateEstados(sigla, campo);
                            } catch (ex) {} finally {

                                try {
                                    $('billing:street4').value = res[0].bairro;
                                } catch (ex) {}
                            }
                        }
                    } catch (ex) {}
                    spinner._toggle();

                }
            });
            break;
        default:
            break;
    }
}



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
