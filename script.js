/*
    a - ai
    e - enter
    i - imes
    o - ober
    u-ufat
*/

function codificar()
    {
        let texto = document.getElementById("text-input").value.toLowerCase();
        let textoCodificado = "";

        for (let i = 0; i < texto.length; i++)
        {
            switch(texto[i])
            {
                case "a":
                    textoCodificado += "ai";
                    break;
                case "e":
                    textoCodificado += "enter";
                    break;
                case "i":
                    textoCodificado += "imes";
                    break;
                case "o":
                    textoCodificado += "ober";
                    break;
                case "u":
                    textoCodificado += "ufat";
                    break;
                default:
                    textoCodificado += texto[i];
                    break;
            }
        }
        document.getElementById("munheco").style.display = "none";
        document.getElementById("texto-encontrado").style.display = "none";
        document.getElementById("texto-ingresado").style.display = "none";
        document.getElementById("texto--oculto").innerHTML = textoCodificado;
        document.getElementById("texto--oculto").style.display = "show";
        document.getElementById("texto--oculto").style.display = "inherit";
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
    }

    function decodificar()
    {
        let texto1 = document.getElementById("text-input").value.toLowerCase();
        let textoDecodificado = "";

        for (let i = 0; i < texto1.length; i++)
        {
            if(texto1[i] == 'a')
            {
                if(texto1[i+1] == 'i')
                {
                    textoDecodificado += 'a';
                    i += 1;
                }
            }
            else if(texto1[i] == 'e')
            {
                if(texto1[i+1] == 'n')
                {
                    if(texto1[i+2] == 't')
                    {
                        if(texto1[i+3] == 'e')
                        {
                            if(texto1[i+4] == 'r')
                            {
                                textoDecodificado += 'e';
                                i += 4;
                            }
                        }
                    }
                }
            }
            else if(texto1[i] == 'i')
            {
                if(texto1[i+1] == 'm')
                {
                    if(texto1[i+2] == 'e')
                    {
                        if(texto1[i+3] == 's')
                        {
                            textoDecodificado += 'i';
                            i += 3;
                        }
                    }
                }
            }
            else if(texto1[i] == 'o')
            {
                if(texto1[i+1] == 'b')
                {
                    if(texto1[i+2] == 'e')
                    {
                        if(texto1[i+3] == 'r')
                        {
                            textoDecodificado += 'o';
                            i += 3;
                        }
                    }
                }
            }
            else if(texto1[i] == 'u')
            {
                if(texto1[i+1] == 'f')
                {
                    if(texto1[i+2] == 'a')
                    {
                        if(texto1[i+3] == 't')
                        {
                            textoDecodificado += 'u';
                            i += 3;
                        }
                    }
                }
            }
            else
            {
                textoDecodificado += texto1[i];
            }
        }
        document.getElementById("munheco").style.display = "none";
        document.getElementById("texto-encontrado").style.display = "none";
        document.getElementById("texto-ingresado").style.display = "none";
        document.getElementById("texto--oculto").innerHTML = textoDecodificado;
        document.getElementById("texto--oculto").style.display = "show";
        document.getElementById("texto--oculto").style.display = "inherit";
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
    }
    
    function copiar()
    {
        let textoCopiar = document.querySelector(".texto-oculto");
        textoCopiar.select();
        document.execCommand("copy");
    }
