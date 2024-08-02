function fValidaCampos() {
    let isValid = true;

    let wNome = document.getElementById("Nome");
    if (wNome.value.length < 3) {
        wNome.focus();
        wNome.style.border = "2px solid red";
        wNome.style.outline = "0";
        isValid = false;
    } else {
        wNome.style.border = "2px solid green";
        wNome.style.outline = "0";
    }

    let wSobrenome = document.getElementById("Sobrenome");
    if (wSobrenome.value.length < 3) {
        wSobrenome.focus();
        wSobrenome.style.border = "2px solid red";
        wSobrenome.style.outline = "0";
        isValid = false;
    } else {
        wSobrenome.style.border = "2px solid green";
        wSobrenome.style.outline = "0";
    }

    let wEmail = document.getElementById("Email");
    if (wEmail.value.length < 3) {
        wEmail.focus();
        wEmail.style.border = "2px solid red";
        wEmail.style.outline = "0";
        isValid = false;
    } else {
        wEmail.style.border = "2px solid green";
        wEmail.style.outline = "0";
    }

    if (isValid) {
        alert("Formulário válido!");
    }
}

function pMascara(prTeclado, prMascara) {
    let wTransformar = prTeclado.value.replace(/\D/g, "");

    let wMascara = prMascara;
    let wResultado = "";
    let wI = 0;

    for (let wCaracter of wMascara) {
        if (wCaracter === "#") {
            if (wI < wTransformar.length) {
                wResultado += wTransformar[wI];
                wI++;
            } else {
                break;
            }
        } else {
            wResultado += wCaracter;
        }
    }

    prTeclado.value = wResultado;
}

function pConsultaCep(prCep) {
    const wURL = `https://viacep.com.br/ws/${prCep}/json/`;

    fetch(wURL)
        .then(response => response.json())
        .then(wData => {
            if (wData.erro) {
                console.error('CEP não encontrado');
            } else {
                document.getElementById("Rua").value = wData.logradouro;
            }
        })
        .catch(error => console.error(error));
}
