document.addEventListener("DOMContentLoaded", function () {

    const btnMostrarSenha =
        document.getElementById("btnMostrarSenha");

    const senhaAdmin =
        document.getElementById("senhaAdmin");


    // MOSTRAR / OCULTAR SENHA
    if (btnMostrarSenha && senhaAdmin) {

        btnMostrarSenha.addEventListener("click", function () {

            if (senhaAdmin.type === "password") {

                senhaAdmin.type = "text";

                btnMostrarSenha.innerHTML =
                    '<i class="fa-solid fa-eye-slash"></i>';

            } else {

                senhaAdmin.type = "password";

                btnMostrarSenha.innerHTML =
                    '<i class="fa-solid fa-eye"></i>';

            }

        });

    }


    // LOGIN ADMINISTRATIVO
    const formLoginAdmin =
        document.getElementById("formLoginAdmin");

    if (formLoginAdmin) {

        formLoginAdmin.addEventListener("submit", function (event) {

            event.preventDefault();

            window.location.href =
                "dashboard-admin.html";

        });

    }

});
// VALIDAR CARTEIRINHA
const btnValidar =
    document.querySelector(".btn-validar");

if (btnValidar) {

    btnValidar.addEventListener("click", function () {

        window.location.href =
            "emitir-carteirinha.html";

    });

}


// EDITAR DADOS
const btnEditar =
    document.querySelector(".btn-editar");

if (btnEditar) {

    btnEditar.addEventListener("click", function () {

        alert("A edição dos dados será configurada depois.");

    });

}


// REJEITAR SOLICITAÇÃO
const btnRejeitar =
    document.querySelector(".btn-rejeitar");

if (btnRejeitar) {

    btnRejeitar.addEventListener("click", function () {

        const confirmar = confirm(
            "Deseja realmente rejeitar esta solicitação?"
        );

        if (confirmar) {

            window.location.href =
                "dashboard-admin.html";

        }

    });

}
// ========================================
// TELA DE EMISSÃO
// ========================================

const numeroCarteirinha =
    document.getElementById("numeroCarteirinha");

const dataEmissao =
    document.getElementById("dataEmissao");

const dataValidade =
    document.getElementById("dataValidade");

const referenciaLegal =
    document.getElementById("referenciaLegal");

const previaNumero =
    document.getElementById("previaNumero");

const previaEmissao =
    document.getElementById("previaEmissao");

const previaValidade =
    document.getElementById("previaValidade");

const previaLei =
    document.getElementById("previaLei");


function formatarData(data) {

    if (!data) {
        return "--/--/----";
    }

    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}


if (numeroCarteirinha && previaNumero) {

    previaNumero.textContent =
        numeroCarteirinha.value;

}


if (dataEmissao && previaEmissao) {

    dataEmissao.addEventListener("change", function () {

        previaEmissao.textContent =
            formatarData(dataEmissao.value);

    });

}


if (dataValidade && previaValidade) {

    dataValidade.addEventListener("change", function () {

        previaValidade.textContent =
            formatarData(dataValidade.value);

    });

}


if (referenciaLegal && previaLei) {

    referenciaLegal.addEventListener("input", function () {

        previaLei.textContent =
            referenciaLegal.value.trim() ||
            "Não informada";

    });

}


// GERAR QR CODE - PROTÓTIPO

const btnGerarQr =
    document.getElementById("btnGerarQr");

if (btnGerarQr) {

    btnGerarQr.addEventListener("click", function () {

        alert(
            "O QR Code real será gerado quando conectarmos o sistema ao banco de dados."
        );

    });

}


// EMITIR CARTEIRINHA

const btnEmitirCarteirinha =
    document.getElementById("btnEmitirCarteirinha");

if (btnEmitirCarteirinha) {

    btnEmitirCarteirinha.addEventListener("click", function () {

        window.location.href =
            "carteirinha-emitida.html";

    });

}
// ========================================
// CARTEIRINHA EMITIDA
// ========================================

const btnVerCarteirinha =
    document.getElementById("btnVerCarteirinha");

if (btnVerCarteirinha) {

    btnVerCarteirinha.addEventListener("click", function () {

        alert(
            "A visualização completa da carteirinha será configurada depois."
        );

    });

}


const btnGerarPdf =
    document.getElementById("btnGerarPdf");

if (btnGerarPdf) {

    btnGerarPdf.addEventListener("click", function () {

        alert(
            "A geração do PDF será configurada na próxima etapa do sistema."
        );

    });

}