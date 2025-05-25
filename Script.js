document.addEventListener("DOMContentLoaded", () => {
    // 🎯 Efeito de rolagem no menu
    const menu = document.querySelector("nav ul");
    // depoimentos
    document.addEventListener("DOMContentLoaded", () => {
  /* Define os grupos de depoimentos exibidos na seção de depoimentos da página inicial */
  const depoimentosBox = document.querySelector(".depoimentos-box");
  const setaEsquerda = document.querySelector(".seta-esquerda");
  const setaDireita = document.querySelector(".seta-direita");

  const gruposDeDepoimentos = [
    [
      { texto: "A plataforma ajudou a garantir que meu avô nunca perdesse uma consulta médica.", autor: "- Renato Carvalho, Cuidador" },
      { texto: "Antes, os pacientes chegavam sem histórico detalhado. Agora, recebo relatórios completos!", autor: "- Dra. Mariana Torres, Geriatra" },
      { texto: "Com o suporte ao cuidador, ficou mais fácil acompanhar consultas de pacientes idosos.", autor: "- Enfermeira Ana Souza" }
    ],
    [
      { texto: "Agora posso acompanhar remotamente as consultas do meu pai enquanto estou viajando.", autor: "- André Souza, Familiar" },
      { texto: "Os pacientes ficam mais seguros sabendo que terão lembretes e suporte no atendimento.", autor: "- Dr. Carlos Mendes, Cardiologista" },
      { texto: "Nunca mais perdi uma consulta médica graças às notificações automáticas do aplicativo!", autor: "- Carlos Mendes, Paciente" }
    ],
    [
      { texto: "O sistema permite que cuidadores organizem informações médicas de forma eficiente.", autor: "- Enfermeira Paula Martins" },
      { texto: "Recomendo a plataforma para todos os idosos que precisam de suporte em suas consultas.", autor: "- Dra. Juliana Lima, Geriatra" },
      { texto: "Facilitou muito a comunicação entre médicos, pacientes e familiares!", autor: "- Pedro Oliveira, Cuidador" }
    ],
    /* Novo grupo de depoimentos */
    [
      { texto: "A plataforma simplificou o agendamento de consultas para minha mãe idosa.", autor: "- Fernanda Lima, Filha" },
      { texto: "Os lembretes automáticos garantem que meus pacientes sigam o tratamento corretamente.", autor: "- Dr. Roberto Almeida, Clínico Geral" },
      { texto: "O acompanhamento detalhado melhorou a qualidade de vida do meu avô.", autor: "- Lucas Pereira, Neto" }
    ],
    /* Novo grupo de depoimentos */
    [
      { texto: "Organizar os relatórios médicos nunca foi tão fácil!", autor: "- Maria Costa, Cuidadora" },
      { texto: "A plataforma é intuitiva e ajuda a monitorar a saúde dos pacientes em tempo real.", autor: "- Dra. Camila Ferreira, Endócrino" },
      { texto: "Graças ao sistema, consigo planejar melhor as consultas da minha família.", autor: "- João Santos, Familiar" }
    ]
  ];

  let indiceAtual = 0;

  /* Exibe o grupo de depoimentos atual no .depoimentos-box */
  function mostrarDepoimentos() {
    depoimentosBox.innerHTML = "";
    gruposDeDepoimentos[indiceAtual].forEach(depoimento => {
      const div = document.createElement("div");
      div.classList.add("depoimento");
      div.innerHTML = `<p>${depoimento.texto}</p><span>${depoimento.autor}</span>`;
      depoimentosBox.appendChild(div);
    });
  }

  /* Navega para o próximo grupo de depoimentos ao clicar na seta direita */
  setaDireita.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % gruposDeDepoimentos.length;
    mostrarDepoimentos();
  });

  /* Navega para o grupo anterior de depoimentos ao clicar na seta esquerda */
  setaEsquerda.addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + gruposDeDepoimentos.length) % gruposDeDepoimentos.length;
    mostrarDepoimentos();
  });

  /* Inicializa a exibição dos depoimentos */
  mostrarDepoimentos();
});
});
    // 🎯 Validação de formulário
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos.");
            } else {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            }
        });
    }
document.addEventListener("DOMContentLoaded", () => {
    const perguntas = document.querySelectorAll(".faq-question");

    perguntas.forEach(pergunta => {
        pergunta.addEventListener("click", () => {
            const resposta = pergunta.nextElementSibling;
            const seta = pergunta.querySelector(".seta");

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
});



document.addEventListener("DOMContentLoaded", () => {
    const whatsappBtn = document.querySelector(".whatsapp-btn");

    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", () => {
            window.open("https://wa.me/551130535131", "_blank");
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (event) => {
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
            form.reset();
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const parentescoSelect = document.getElementById("parentesco");
    const outroContainer = document.getElementById("outro-parentesco-container");

    parentescoSelect.addEventListener("change", () => {
        if (parentescoSelect.value === "outro") {
            outroContainer.style.display = "block";
        } else {
            outroContainer.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // 🎯 Verificação de login do cuidador (apenas no painel)
    if (window.location.pathname.includes("cuidador-menu.html")) {
        const cuidadorLogado = localStorage.getItem("cuidadorAutenticado");
    }
    // 🎯 Contato direto com o médico
    const botoesContato = document.querySelectorAll(".contato-medico");

    botoesContato.forEach(botao => {
        botao.addEventListener("click", () => {
            alert("Solicitação de contato enviada ao médico!");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // 🎯 Contato direto com o médico
    const botoesContato = document.querySelectorAll(".contato-medico");

    botoesContato.forEach(botao => {
        botao.addEventListener("click", () => {
            alert("Solicitação de contato enviada ao médico!");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const mostrarTermoBtn = document.getElementById("mostrarTermo");
    const termoContainer = document.getElementById("termoContainer");
    const aceitarTermo = document.getElementById("aceitarTermo");
    const form = document.getElementById("cadastroForm");

    mostrarTermoBtn.addEventListener("click", () => {
        if (termoContainer.style.display === "none") {
            termoContainer.style.display = "block";
            mostrarTermoBtn.textContent = "Fechar Termo";
        } else {
            termoContainer.style.display = "none";
            mostrarTermoBtn.textContent = "Ler Termo Completo";
        }
    });

    form.addEventListener("submit", (event) => {
        if (!aceitarTermo.checked) {
          /*  alert("Você deve aceitar o Termo de Compromisso para concluir o cadastro.");*/
            event.preventDefault();
        } else {
            alert("Cadastro realizado com sucesso!");
        }
    });
})
///modal alertas 
/* Inicializa o script após o carregamento do DOM */
document.addEventListener("DOMContentLoaded", () => {
  /* Seleciona os elementos do modal e da lista de notificações */
  const modalOverlay = document.getElementById("notificacoesModal");
  const modalNotificacoesList = document.getElementById("modalNotificacoesList");
  const openNotificacoesBtn = document.querySelector(".open-notificacoes-btn");
  const notificacoesList = document.querySelector(".notificacoes-list");

  /* Verifica se os elementos existem */
  if (!modalOverlay || !modalNotificacoesList || !openNotificacoesBtn || !notificacoesList) {
    console.error("Erro: Elementos do modal de notificações não encontrados.");
    return;
  }

  /* Função para carregar notificações no modal */
  function carregarNotificacoes() {
    try {
      modalNotificacoesList.innerHTML = ""; /* Limpa o conteúdo anterior */
      const notificacoes = notificacoesList.querySelectorAll("li");
      notificacoes.forEach(notificacao => {
        const li = document.createElement("li");
        li.innerHTML = notificacao.innerHTML; /* Copia o conteúdo HTML, incluindo <strong> */
        modalNotificacoesList.appendChild(li);
      });
    } catch (error) {
      console.error("Erro ao carregar notificações:", error);
    }
  }

  /* Função para abrir o modal */
  function openNotificacoesModal() {
    carregarNotificacoes(); /* Carrega as notificações */
    modalOverlay.style.display = "flex"; /* Exibe o modal */
  }

  /* Função para fechar o modal */
  function closeNotificacoesModal() {
    modalOverlay.style.display = "none"; /* Esconde o modal */
  }

  /* Evento para abrir o modal */
  openNotificacoesBtn.addEventListener("click", openNotificacoesModal);

  /* Evento para fechar o modal ao clicar fora do conteúdo */
  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      closeNotificacoesModal();
    }
  });
});
