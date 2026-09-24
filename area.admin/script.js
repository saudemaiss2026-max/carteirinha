// ==========================================
// CONEXÃO COM O SUPABASE
// ==========================================

const SUPABASE_URL = "https://rxpjxnfogfhbpvhvqxiz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_99rZ7qGzLB-Q313bxYJcdw_XM7pae_h";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // MOSTRAR / OCULTAR SENHA
    // ==========================================

    const btnMostrarSenha =
        document.getElementById("btnMostrarSenha");

    const senhaAdmin =
        document.getElementById("senhaAdmin");


    if (btnMostrarSenha && senhaAdmin) {

        btnMostrarSenha.addEventListener("click", function () {

            const senhaEstaOculta =
                senhaAdmin.type === "password";


            if (senhaEstaOculta) {

                senhaAdmin.type = "text";

                btnMostrarSenha.innerHTML =
                    '<i class="fa-regular fa-eye-slash"></i>';

            } else {

                senhaAdmin.type = "password";

                btnMostrarSenha.innerHTML =
                    '<i class="fa-regular fa-eye"></i>';

            }

        });

    }

// ==========================================
// LOGIN ADMIN - SUPABASE
// ==========================================

const formLoginAdmin =
    document.getElementById("formLoginAdmin");

if (formLoginAdmin) {

    formLoginAdmin.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email = document
            .getElementById("emailAdmin")
            .value
            .trim();

        const senha = document
            .getElementById("senhaAdmin")
            .value;

        const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email: email,
                password: senha
            });

        if (error) {
            alert("E-mail ou senha inválidos.");
            return;
        }

        const usuarioId = data.user.id;

        const { data: administrador, error: adminError } =
            await supabaseClient
                .from("administradores")
                .select("id, nome, email, nivel_acesso, ativo")
                .eq("id", usuarioId)
                .eq("ativo", true)
                .maybeSingle();

        if (adminError || !administrador) {

            await supabaseClient.auth.signOut();

            alert(
                "Este usuário não possui acesso administrativo."
            );

            return;
        }

        window.location.href = "dashboard-admin.html";

    });

}
 

});

// ==========================================
// MENU MOBILE
// ==========================================

const btnMenuMobile =
    document.getElementById("btnMenuMobile");

const sidebar =
    document.querySelector(".admin-sidebar");

if (btnMenuMobile && sidebar) {

    btnMenuMobile.addEventListener("click", function () {

        sidebar.classList.toggle("aberto");

    });

}


// ==========================================
// ANÁLISE DA SOLICITAÇÃO
// ==========================================

const btnValidar =
    document.querySelector(".btn-validar");

if (btnValidar) {

    btnValidar.addEventListener("click", function () {

        window.location.href =
            "emitir-cart.html";

    });

}


const btnEditar =
    document.querySelector(".btn-editar");

if (btnEditar) {

    btnEditar.addEventListener("click", function () {

        alert(
            "A edição dos dados será configurada depois."
        );

    });

}


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
// ==========================================
// EMISSÃO DA CARTEIRINHA
// ==========================================

const numeroCarteirinha =
    document.getElementById("numeroCarteirinha");

const dataEmissao =
    document.getElementById("dataEmissao");

const dataValidade =
    document.getElementById("dataValidade");

const referenciaLegal =
    document.getElementById("referenciaLegal");


const previewNumero =
    document.getElementById("previewNumero");

const previewEmissao =
    document.getElementById("previewEmissao");

const previewValidade =
    document.getElementById("previewValidade");

const previewLei =
    document.getElementById("previewLei");


function formatarDataPreview(data) {

    if (!data) {
        return "A definir";
    }

    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}


if (numeroCarteirinha && previewNumero) {

    numeroCarteirinha.addEventListener("input", function () {

        previewNumero.textContent =
            numeroCarteirinha.value || "A definir";

    });

}


if (dataEmissao && previewEmissao) {

    dataEmissao.addEventListener("change", function () {

        previewEmissao.textContent =
            formatarDataPreview(dataEmissao.value);

    });

}


if (dataValidade && previewValidade) {

    dataValidade.addEventListener("change", function () {

        previewValidade.textContent =
            formatarDataPreview(dataValidade.value);

    });

}


if (referenciaLegal && previewLei) {

    referenciaLegal.addEventListener("input", function () {

        previewLei.textContent =
            referenciaLegal.value || "A definir";

    });

}


// QR CODE - PROTÓTIPO

const btnGerarQr =
    document.getElementById("btnGerarQr");

const qrPlaceholder =
    document.getElementById("qrPlaceholder");


if (btnGerarQr && qrPlaceholder) {

    btnGerarQr.addEventListener("click", function () {

        qrPlaceholder.classList.add("gerado");

        qrPlaceholder.innerHTML =
            '<i class="fa-solid fa-qrcode"></i>';

        btnGerarQr.innerHTML =
            '<i class="fa-solid fa-check"></i> QR Code preparado';

    });

}


// EMITIR

const btnEmitirCarteirinha =
    document.getElementById("btnEmitirCarteirinha");


if (btnEmitirCarteirinha) {

    btnEmitirCarteirinha.addEventListener("click", function () {

        window.location.href =
            "cart-emitida.html";

    });

}
// ==========================================
// CARTEIRINHA EMITIDA
// ==========================================

const btnVerCarteirinha =
    document.querySelector(".btn-ver-carteirinha");

if (btnVerCarteirinha) {

    btnVerCarteirinha.addEventListener("click", function () {

        alert(
            "A visualização completa da carteirinha será configurada na próxima etapa."
        );

    });

}


const btnPdf =
    document.querySelector(".btn-pdf");

if (btnPdf) {

    btnPdf.addEventListener("click", function () {

        alert(
            "A geração do PDF será conectada posteriormente."
        );

    });

}

