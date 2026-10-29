let inputVisor = document.querySelector("input");
let btnOperadores = document.querySelectorAll(".btnOp");
let btnNumeros = document.querySelectorAll("#botoes .btnNum");
let btnResultado = document.querySelector(".btnResult");
let btnLimpar = document.querySelector(".btnClear");

let expressaoCompleta = "";
let deveLimparVisor = false;

function clickNumber(){
    btnNumeros.forEach((numero) => {
        numero.addEventListener("click", () => {
            if(deveLimparVisor) {
                expressaoCompleta = "";
                inputVisor.value = "";
                deveLimparVisor = false;
            }

            expressaoCompleta += numero.textContent;
            inputVisor.value = expressaoCompleta;            
        })
    })

    btnOperadores.forEach((operador) => {
        operador.addEventListener("click", () => {
            if (expressaoCompleta === "") return;

            let ultimoCaractere = expressaoCompleta.slice(-1);
            if(["+", "-", "x", "/"].includes(ultimoCaractere.trim())) return;

            let simboloOperador = operador.textContent;

            operadorReal = simboloOperador === "x" ? "*" : simboloOperador;
            expressaoCompleta += " " + operadorReal + " ";
            inputVisor.value = expressaoCompleta;
            deveLimparVisor = false;
        })
    })
    
    btnResultado.addEventListener("click", () => {

        if(expressaoCompleta === "") return;
        
        try {
            let resultadoTotal = eval(expressaoCompleta);
            inputVisor.value = resultadoTotal;

            expressaoCompleta = resultadoTotal.toString();
            deveLimparVisor = true;
            
        } catch (error) {
            inputVisor.value = "Erro!"
            expressaoCompleta = '';
        }
    })

    btnLimpar.addEventListener("click", () => {
            expressaoCompleta = "";
            inputVisor.value = "";
            deveLimparVisor = true;
        })
    }

clickNumber()
