document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const mainContent = document.querySelector("main"); // Corrigido para garantir que o mainContent seja manipulado

    // Verifica o tema salvo no localStorage
    let isDarkMode = localStorage.getItem("dark-mode") === "true";

    function updateTheme() {
        if (isDarkMode) {
            body.classList.add("dark-theme");
            body.classList.remove("light-theme");
            themeToggle.classList.add("toggle-moon");
            themeToggle.classList.remove("toggle-sun");
            themeToggle.innerHTML = "🌙";  // Troca o emoji imediatamente
        } else {
            body.classList.add("light-theme");
            body.classList.remove("dark-theme");
            themeToggle.classList.add("toggle-sun");
            themeToggle.classList.remove("toggle-moon");
            themeToggle.innerHTML = "🌞";  // Troca o emoji imediatamente
        }
    }

    // Atualiza o tema ao carregar a página
    updateTheme();

    themeToggle.addEventListener("click", function () {
        isDarkMode = !isDarkMode;
        localStorage.setItem("dark-mode", isDarkMode);
        
        // Adiciona a animação de transição
        themeToggle.classList.add("animate-toggle");
        
        // Espera a animação terminar antes de atualizar o tema
        setTimeout(() => {
            updateTheme();
            themeToggle.classList.remove("animate-toggle");
        }, 400);  // Aqui permanece o tempo para animação do tema
    });

    // Conteúdos padrão
    const defaultContent = `
        <h2>Bem-vindo à Agenda Escolar</h2>
        <p>Aqui você pode acompanhar seus lembretes e tarefas.</p>
    `;

    const sections = {
        home: defaultContent,
        lembretes: `
            <h2>Lembretes</h2>
            <p>Aqui você pode ver seus lembretes importantes.</p>
        `,
        trabalhos: `
            <h2>Trabalhos</h2>
            <ul>
                <li><strong>História:</strong> Dissertar da página 51 à 53.</li>
                <li><strong>Filosofia:</strong> Dissertar do capítulo 2, páginas 21 à 35.</li>
            </ul>
        `,
        provas: `
            <h2>Provas</h2>
            <p>Datas e conteúdos das próximas provas.</p>
        `
    };

    const subjects = {
        mat: { title: "Matemática", content: "Conteúdos e lembretes de Matemática." },
        por: { title: "Português", content: "Conteúdos e lembretes de Português." },
        his: { title: "História", content: "Conteúdos e lembretes de História." },
        geo: { title: "Geografia", content: "Conteúdos e lembretes de Geografia." },
        ing: { title: "Inglês", content: "Conteúdos e lembretes de Inglês." },
        bio: { title: "Biologia", content: "Conteúdos e lembretes de Biologia." },
        fis: { title: "Física", content: "Conteúdos e lembretes de Física." },
        qui: { title: "Química", content: "Conteúdos e lembretes de Química." },
        fil: { title: "Filosofia", content: "Conteúdos e lembretes de Filosofia." },
        soc: { title: "Sociologia", content: "Conteúdos e lembretes de Sociologia." },
        art: { title: "Arte", content: "Conteúdos e lembretes de Arte." },
        lpb: { title: "LPBL4", content: "Conteúdos e lembretes de LPBL4." },
        asc: { title: "ASCL4", content: "Conteúdos e lembretes de ASCL4." }
    };

    // Evento para Home, Lembretes, Trabalhos e Provas
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            mainContent.innerHTML = sections[section] || defaultContent;
        });
    });

    // Evento para as matérias no menu lateral
    Object.keys(subjects).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                mainContent.innerHTML = `<h2>${subjects[id].title}</h2><p>${subjects[id].content}</p>`;
            });
        }
    });

    // Alternância de tema
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

});

