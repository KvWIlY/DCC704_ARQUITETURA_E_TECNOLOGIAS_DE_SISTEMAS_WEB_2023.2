// dark mode
document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById("change-theme");
    darkModeButton.addEventListener("click", toggleDarkMode);
  
    function toggleDarkMode() {
      // aplica o dark mode no body 
      const body = document.body;
      body.classList.toggle("dark");

      const descricaoElement = document.getElementById("safe");
      descricaoElement.classList.toggle("dark_background");

      const imgBoxElement = document.getElementById("back_img_box");
      imgBoxElement.classList.toggle("dark_img_box");

      const backGridContainer = document.getElementById("backG_grid_container");
      backGridContainer.classList.toggle("dark_background");

      const backFormContato = document.getElementById("backGroundForms");
      backFormContato.classList.toggle("dark_background");

      const whiteNameFoms = document.getElementById("bgd");
      whiteNameFoms.classList.toggle("dark_background");

      const bgEnv = document.getElementById("bgEnv");
      bgEnv.classList.toggle("bgEnvDark");
    }
});
  
// botão que vai para o top

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


//tradução

// Espera até que o DOM esteja completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Pega o botão de alternância de idioma pelo ID
    const toggleButton = document.getElementById("toggle-language");
    // Seleciona todos os elementos de texto que serão traduzidos, usando seletores de classe e ID
    const allTextElements = document.querySelectorAll(".final,.Topico,.Traduzido,.nav_itens,.titulo,#descricao,#name_box,#email_box,#mensagem_box,#bgEnv,#bgd,.conteudo");

    // Armazena o conteúdo de texto original dos elementos em um array
    const originalTextContent = Array.from(allTextElements).map(element => element.textContent);

    const translations = {
        // header
        "Início": "Home",
        "Sobre": "About",
        "Habilidades": "Skills",
        "Projetos": "Projects",
        "Sobre mim": "About Me",
        "Contato": "Contact",
        //formulario
        "Nome:": "Name:",
        "Email:": "Email:",
        "Mensagem:": "Message:",
        "Enviar": "Send",
        "Assunto:":"Subject:",
        //conteudo
        "Olá senhoras e senhores, meu nome é":"hi ladies and gentlemen, my name is",
        "Sou Desenvolvedor Front e Backend, tenho uma apreço pela a criação de soluções web e outras areas.":"I'm a Front and Backend Developer, I have an appreciation for creating web solutions and other areas.",
        //sobre mim
        "Sou aluno de Ciencia da computação da Universidade Federal de Roraima estou atualmente no nono periodo do curso. Estou em busca de desafios e oportunidades enriquecedoras. Adquiri conhecimentos em diversas áreas, buscando aprofundamento em tópicos avançados, projetos e opções pós-graduação. Estou em busca em expandir minha rede profissional.":" I am a Computer Science student at the Federal University of Roraima and I'm currently in the ninth period of the course. I'm looking for challenges and enriching opportunities. I acquired knowledge in several areas, seeking depth in advanced topics, projects and postgraduate options. I am looking to expand my professional network.",
        "Tenho conhecimento em linguagens como JavaScript e Python, e habilidades em frameworks como React e Django, além de experiência com PostgreSQL, minha versatilidade é evidente. Sempre aberto a novas tecnologias e tendências, me adapto rapidamente a diferentes ambientes. Abraço desafios com soluções criativas, mantendo o foco na melhoria constante. Minha colaboração eficaz, aliada à escrita de código limpo e testes automatizados, garante a qualidade dos projetos. Encaro problemas com calma, buscando soluções sistemáticas. Priorizo a experiência do usuário ao criar interfaces funcionais. Minha autonomia se destaca, assumindo responsabilidades e buscando contribuir além do esperado. Movido pela paixão pela tecnologia, continuo aprendendo e entregando soluções excepcionais.":"I have knowledge in languages ​​like JavaScript and Python, and skills in frameworks like React and Django, in addition to experience with PostgreSQL, my versatility is evident. Always open to new technologies and trends, I adapt quickly to different environments. I embrace challenges with creative solutions, keeping the focus on constant improvement. My effective collaboration, along with writing clean code and automated testing, ensures the quality of projects. I face problems calmly, seeking systematic solutions. I prioritize the user experience when creating functional interfaces. My autonomy stands out, assuming responsibilities and seeking to contribute beyond expectations. Driven by a passion for technology, I continue to learn and deliver exceptional solutions.",
        "Legal legal - 2023":"Cool Cool - 2023",
    };
    const translationsEn_PT = {
        // header
        "Home": "Início",
        "About": "Sobre",
        "Skills": "Habilidades",
        "Projects": "Projetos",
        "About Me": "Sobre mim",
        // form
        "Contact": "Contato",
        "Name:": "Nome:",
        "Email:": "Email:",
        "Message:": "Mensagem:",
        "Send": "Enviar",
        "Subject:":"Assunto:",
        // content
        "hi ladies and gentlemen, my name is": "Olá senhoras e senhores, meu nome é",
        "I'm a Front and Backend Developer, I have an appreciation for creating web solutions and other areas.": "Sou Desenvolvedor Front e Backend, tenho um apreço pela criação de soluções web e outras áreas.",
        // about me
        "I am a Computer Science student at the Federal University of Roraima and I'm currently in the ninth period of the course. I'm looking for challenges and enriching opportunities. I acquired knowledge in several areas, seeking depth in advanced topics, projects and postgraduate options. I am looking to expand my professional network.": "Sou aluno de Ciência da Computação na Universidade Federal de Roraima e atualmente estou no nono período do curso. Estou em busca de desafios e oportunidades enriquecedoras. Adquiri conhecimento em diversas áreas, buscando aprofundamento em tópicos avançados, projetos e opções de pós-graduação. Estou procurando expandir minha rede profissional.",
        "I have knowledge in languages ​​like JavaScript and Python, and skills in frameworks like React and Django, in addition to experience with PostgreSQL, my versatility is evident. Always open to new technologies and trends, I adapt quickly to different environments. I embrace challenges with creative solutions, keeping the focus on constant improvement. My effective collaboration, along with writing clean code and automated testing, ensures the quality of projects. I face problems calmly, seeking systematic solutions. I prioritize the user experience when creating functional interfaces. My autonomy stands out, assuming responsibilities and seeking to contribute beyond expectations. Driven by a passion for technology, I continue to learn and deliver exceptional solutions.": "Linguagens como JavaScript e Python, e habilidades em frameworks como React e Django, além de experiência com PostgreSQL, minha versatilidade é evidente. Sempre aberto a novas tecnologias e tendências, adapto-me rapidamente a diferentes ambientes. Abraço desafios com soluções criativas, mantendo o foco na melhoria constante. Minha colaboração eficaz, juntamente com a escrita de código limpo e testes automatizados, garante a qualidade dos projetos. Encaro problemas com calma, buscando soluções sistemáticas. Dou prioridade à experiência do usuário ao criar interfaces funcionais. Minha autonomia se destaca, assumindo responsabilidades e buscando contribuir além das expectativas. Impulsionado pela paixão por tecnologia, continuo a aprender e a entregar soluções excepcionais.",
        "Cool Cool - 2023":"Legal legal - 2023",
    };
    // Define uma bandeira para controlar o idioma atual
    let isEnglish = false;
    // Adiciona um ouvinte de evento para o botão de alternância de idioma
    toggleButton.addEventListener("click", () => {
        // Alterna o idioma
        isEnglish = !isEnglish;

        // Atualiza o conteúdo de texto com base no idioma selecionado
        allTextElements.forEach((element, index) => {
            const originalText = originalTextContent[index];
            const translatedText = isEnglish ? translations[originalText] : originalText;
            element.textContent = translatedText;
        });

    });
});
