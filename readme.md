ConectaCare
Descrição
O ConectaCare é uma plataforma web desenvolvida para facilitar o acompanhamento de pacientes por cuidadores, promovendo maior integração e transparência no cuidado à saúde. O sistema permite o cadastro de cuidadores e pacientes, a vinculação entre eles, e o acesso a informações essenciais, como consultas agendadas, histórico de consultas e prescrições médicas. Desenvolvido para a 1ª Sprint de um curso de desenvolvimento web, o projeto utiliza HTML, CSS e JavaScript puro, sem frameworks, e atende a requisitos de acessibilidade e responsividade.
O objetivo central é melhorar a comunicação entre cuidadores, pacientes e médicos, garantindo que o cuidador tenha visibilidade das informações clínicas e possa atuar de forma informada, aumentando o comparecimento às consultas e a qualidade do atendimento.
Funcionalidades

Cadastro de Cuidadores e Pacientes: Registro de informações como nome, identidade, endereço e contatos.
Vinculação Paciente-Cuidador: Conexão entre paciente e cuidador para acompanhamento integrado.
Agendamento de Consultas: Escolha de médicos disponíveis no HC e visualização de consultas agendadas.
Painel de Informações: Exibição do histórico de consultas e prescrições médicas do paciente.
Interface Intuitiva: Navegação simplificada com design responsivo e acessível.
Responsividade: Suporte para desktop (≥992px), tablets (≤768px) e celulares (≤600px), com menu hamburguer em dispositivos móveis.
Termo de Compromisso: Modal interativo para aceite de termos.
Página de Integrantes: Informações dos membros do grupo desenvolvedor.
FAQ: Seção de perguntas frequentes com respostas expansíveis.
Contato: Informações de contato com botão para WhatsApp.

Tecnologias Utilizadas

HTML5: Estrutura semântica das páginas.
CSS3: Estilização com media queries para responsividade (desktop.css, mobile.css).
JavaScript: Interatividade, incluindo menu hamburguer, modal de termo e FAQ expansível.
Sem frameworks: Atende ao requisito da sprint de uso de tecnologias nativas.

📂 ConectaCare
├── 📂 css
│   ├── desktop.css     # Estilos para telas ≥992px (navegação inline, layout completo)
│   └── mobile.css      # Estilos para telas ≤768px e ≤600px (menu hamburguer, ajustes de layout)
|   └── tablet.css      # Estilos para telas de<992px e <600px (excluzivos para uso de tablets)
├── 📂 js
│   └── script.js       # Funções para menu hamburguer, modal e FAQ, e todos os botões do site.
├── 📂 img
│   └── [imagens]       # Logo, fotos dos integrantes, ícones
├── index.html          # Página inicial com hero, benefícios e depoimentos
├── cuidador.html       # Cadastro e modal de termo de compromisso
├── cuidador-menu.html  # Informações do paciente, monitoramento, consultas
├── integrantes.html    # Informações dos membros do grupo
├── faq.html            # Perguntas frequentes com respostas expansíveis
├── contato.html        # Informações de contato com botão WhatsApp
└── README.md           # Documentação do projeto

Requisitos

Navegador moderno (Chrome, Firefox, Edge).
Nenhuma dependência externa ou framework necessário.
Conexão com a internet para links externos (ex.: WhatsApp).

Responsividade

Desktop (≥992px): Navegação inline, cards lado a lado, layout completo.
Tablet (≤768px): Menu hamburguer, indicadores em coluna, fontes e padding reduzidos.
Celular (≤600px): Layout compacto, modal ocupando 95% da tela, fontes menores.

Acessibilidade
O projeto segue boas práticas de acessibilidade, incluindo:

Contraste adequado entre texto e fundo (cores definidas em :root).
Navegação por teclado para botões e links (ex.: menu hamburguer, modal).
Estrutura semântica com HTML5.
Texto legível em diferentes tamanhos de tela.

Repositório
Acesse o projeto no GitHub: [https://github.com/wesley1812/Conecte-Care-HC].


Equipe
[conectaCare]

[João Pedro Scarpin], RM [565421], Turma [TDSPX]
[Wesley Silva Andrade], RM [563593], Turma [TDSPX]
[Gabriel Otávio Wince Souza], RM [566150], Turma [TDSPX]
[Confirme os nomes, RMs e turmas na página integrantes.html]

Estado do Projeto
Concluído para a 1ª Sprint. A funcionalidade principal (cadastro e vinculação paciente-cuidador) foi implementada, com interface responsiva e acessível. Próximas sprints podem incluir melhorias no painel de informações, integração com banco de dados ou novas funcionalidades.
Licença
Proprietário: [ConectaCare]. Uso restrito a fins acadêmicos.
