/* Inicializa o script após o carregamento do DOM */
document.addEventListener("DOMContentLoaded", () => {
    
    //  Menu hamburguer para dispositivos móveis
    const menuToggle = document.querySelector("header nav .menu-toggle");
    const navMenu = document.querySelector("header nav ul");
    if (menuToggle && navMenu) {
        console.log("Menu hamburguer inicializado em: " + window.location.pathname);
        menuToggle.addEventListener("click", () => {
            console.log("Botão menu-toggle clicado, estado atual:", navMenu.classList.contains("active"));
            navMenu.classList.toggle("active");
            menuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
            console.log("Menu:", navMenu.classList.contains("active") ? "exibido" : "escondido");
        });
    } else {
        console.error("Erro: .menu-toggle ou nav ul não encontrados em: " + window.location.pathname, {
            menuToggle: !!menuToggle,
            navMenu: !!navMenu
        });
    }

        //  Funcionalidade do FAQ
    const perguntas = document.querySelectorAll(".faq-question");
    if (perguntas.length > 0) {
        try {
            perguntas.forEach(pergunta => {
                pergunta.addEventListener("click", () => {
                    const resposta = pergunta.nextElementSibling;
                    const seta = pergunta.querySelector(".seta");

                    if (!resposta || !seta) {
                        console.error("Resposta ou seta não encontrados para a pergunta:", pergunta);
                        return;
                    }

                    // Verifica se a resposta já está visível
                    if (resposta.classList.contains("ativo")) {
                        resposta.classList.remove("ativo");
                        seta.style.transform = "rotate(0deg)";
                    } else {
                        // Fecha todas as outras respostas antes de abrir a nova
                        document.querySelectorAll(".faq-answer").forEach(el => el.classList.remove("ativo"));
                        document.querySelectorAll(".seta").forEach(el => el.style.transform = "rotate(0deg)");
                        resposta.classList.add("ativo");
                        seta.style.transform = "rotate(180deg)";
                    }
                });
            });
        } catch (error) {
            console.error("Erro na funcionalidade do FAQ:", error);
        }
    }

    //  Funcionalidade de notificações expansíveis
    const notificacoesTitulos = document.querySelectorAll(".notificacao-titulo");
    if (notificacoesTitulos.length > 0) {
        try {
            notificacoesTitulos.forEach(titulo => {
                titulo.addEventListener("click", () => {
                    const conteudo = titulo.nextElementSibling;
                    const seta = titulo.querySelector(".seta");

                    if (!conteudo || !seta) {
                        console.error("Conteúdo ou seta não encontrados para a notificação:", titulo);
                        return;
                    }

                    // Verifica se o conteúdo já está visível
                    if (conteudo.classList.contains("ativo")) {
                        conteudo.classList.remove("ativo");
                        seta.style.transform = "rotate(0deg)";
                    } else {
                        // Fecha todas as outras notificações antes de abrir a nova
                        document.querySelectorAll(".notificacao-conteudo").forEach(el => el.classList.remove("ativo"));
                        document.querySelectorAll(".notificacao-titulo .seta").forEach(el => el.style.transform = "rotate(0deg)");
                        conteudo.classList.add("ativo");
                        seta.style.transform = "rotate(180deg)";
                    }
                });
            });
        } catch (error) {
            console.error("Erro na funcionalidade de notificações:", error);
        }
    }

    //  Validação de formulário de contato
    const formContato = document.querySelector("form");
    if (formContato && document.getElementById("nome") && document.getElementById("email") && document.getElementById("mensagem")) {
        formContato.addEventListener("submit", (event) => {
            event.preventDefault();
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos.");
            } else {
                alert("Mensagem enviada com sucesso!");
                formContato.reset();
            }
        });
    }

    // Validação de formulário de cadastro com CPF e telefone
    if (formContato && document.getElementById("cpf") && document.getElementById("telefone")) {
        formContato.addEventListener("submit", (event) => {
            event.preventDefault();
            const cpf = document.getElementById("cpf").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

            if (!cpfRegex.test(cpf)) {
                alert("Por favor, insira um CPF válido (XXX.XXX.XXX-XX).");
                return;
            }
            if (!telefoneRegex.test(telefone)) {
                alert("Por favor, insira um telefone válido ((XX) XXXXX-XXXX).");
                return;
            }
            alert("Cadastro enviado com sucesso!");
            formContato.reset();
        });
    }

    //  Botão de WhatsApp
    const whatsappBtn = document.querySelector(".whatsapp-btn");
    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", () => {
            window.open("https://wa.me/551130535131", "_blank");
        });
    }

    //  Verificação de login do cuidador (apenas no painel)
    if (window.location.pathname.includes("cuidador-menu.html")) {
        const cuidadorLogado = localStorage.getItem("cuidadorAutenticado");
        // Adicione aqui a lógica de verificação de login, se necessário
    }


    //  Validação do formulário de cadastro
    const formCadastro = document.getElementById("cadastroForm");
    if (formCadastro) {
        formCadastro.addEventListener("submit", (event) => {
            event.preventDefault();

            // Seleção dos campos
            const nome = document.getElementById("nome").value.trim();
            const cpf = document.getElementById("cpf").value.trim();
            const cpfPaciente = document.getElementById("cpf-paciente").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const residencia = document.getElementById("residencia");
            const foto = document.getElementById("foto");
            const aceitarTermo = document.getElementById("aceitarTermo");

            // Regex para validação
            const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Validações
            if (!nome) {
                alert("Por favor, preencha o Nome Completo.");
                return;
            }
            if (!cpf) {
                alert("Por favor, preencha o CPF do Cuidador.");
                return;
            }
            if (!cpfRegex.test(cpf)) {
                alert("Por favor, insira um CPF válido (XXX.XXX.XXX-XX).");
                return;
            }
            if (!cpfPaciente) {
                alert("Por favor, preencha o CPF do Paciente.");
                return;
            }
            if (!cpfRegex.test(cpfPaciente)) {
                alert("Por favor, insira um CPF do Paciente válido (XXX.XXX.XXX-XX).");
                return;
            }
            if (!email) {
                alert("Por favor, preencha o Email do Cuidador.");
                return;
            }
            if (!emailRegex.test(email)) {
                alert("Por favor, insira um email válido.");
                return;
            }
            if (!telefone) {
                alert("Por favor, preencha o Telefone para Contato.");
                return;
            }
            if (!telefoneRegex.test(telefone)) {
                alert("Por favor, insira um telefone válido ((XX) XXXXX-XXXX).");
                return;
            }
            if (!residencia.files.length) {
                alert("Por favor, selecione uma imagem para o Comprovante de Residência.");
                return;
            }
            if (!foto.files.length) {
                alert("Por favor, selecione uma imagem para a Foto 3x4.");
                return;
            }
            if (!aceitarTermo.checked) {
                alert("Você deve aceitar o Termo de Compromisso para concluir o cadastro.");
                return;
            }

            // Sucesso
            alert("Cadastro realizado com sucesso!");
        });
    }

    //  Modal do termo de compromisso
    const openTermoModalBtn = document.getElementById("openTermoModal");
    const termoModal = document.getElementById("termoModal");
    const closeModalBtn = document.querySelector(".close-modal");
    if (openTermoModalBtn && termoModal && closeModalBtn) {
        console.log("Inicializando modal do termo de compromisso, elementos encontrados");
        // Abrir modal
        openTermoModalBtn.addEventListener("click", () => {
            console.log("Botão #openTermoModal clicado");
            termoModal.style.display = "flex";
        });

        // Fechar modal
        closeModalBtn.addEventListener("click", () => {
            console.log("Botão .close-modal clicado");
            termoModal.style.display = "none";
        });

        // Fechar modal ao clicar fora
        termoModal.addEventListener("click", (event) => {
            if (event.target === termoModal) {
                console.log("Clicado fora do modal");
                termoModal.style.display = "none";
            }
        });
    } else {
        console.error("Erro: #openTermoModal, #termoModal ou .close-modal não encontrados", {
            openTermoModalBtn: !!openTermoModalBtn,
            termoModal: !!termoModal,
            closeModalBtn: !!closeModalBtn
        });
    }

    form.addEventListener("submit", (event) => {
        if (!aceitarTermo.checked) {
          /*  alert("Você deve aceitar o Termo de Compromisso para concluir o cadastro.");*/
            event.preventDefault();
        } else {
            alert("Cadastro realizado com sucesso!");
        }
    });
})
