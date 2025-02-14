document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeBtn = document.getElementById("toggle-theme");
  const toggleMenuBtn = document.getElementById("toggle-menu");
  const sidebar = document.getElementById("sidebar");

  const homeBtn = document.getElementById("home");
  const lembretesBtn = document.getElementById("lembretes");
  const trabalhosBtn = document.getElementById("trabalhos");
  const provasBtn = document.getElementById("provas");

  const contentTitle = document.getElementById("content-title");
  const contentText = document.getElementById("content-text");

  // Sidebar começa minimizada
  sidebar.classList.add("hidden");

  toggleMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });

  homeBtn.addEventListener("click", () => {
    contentTitle.textContent = "Horário 1º EMTC";
    contentText.innerHTML = `
      <table border="1">
          <thead>
              <tr>
                  <th>Dia</th>
                  <th>1ª Aula</th>
                  <th>2ª Aula</th>
                  <th>3ª Aula</th>
                  <th>4ª Aula</th>
                  <th>5ª Aula</th>
                  <th>6ª Aula</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Segunda-feira</td>
                  <td>ASCL4 (Andrews)</td>
                  <td>LPBL4 (Filipe)</td>
                  <td>Ed. Fis (Cristiane)</td>
                  <td>Bio (Janaina Ap)</td>
                  <td>Bio (Janaina Ap)</td>
                  <td>Mat (Ivaldete)</td>
              </tr>
              <tr>
                  <td>Terça-feira</td>
                  <td>His (Celso)</td>
                  <td>His (Celso)</td>
                  <td>Fil (Celso)</td>
                  <td>Port (Elisa)</td>
                  <td>Port (Elisa)</td>
                  <td>ASCL (Andrews)</td>
              </tr>
              <tr>
                  <td>Quarta-feira</td>
                  <td>Geo (Luciano)</td>
                  <td>Geo (Luciano)</td>
                  <td>Fis (Márcia)</td>
                  <td>Fis (Márcia)</td>
                  <td>Mat (Ivaldete)</td>
                  <td>Mat (Ivaldete)</td>
              </tr>
              <tr>
                  <td>Quinta-feira</td>
                  <td>Qui (Otair)</td>
                  <td>Qui (Otair)</td>
                  <td>Port (Elisa)</td>
                  <td>Art (Janaina Q)</td>
                  <td>Soc (Luciano)</td>
                  <td>Soc (Luciano)</td>
              </tr>
              <tr>
                  <td>Sexta-feira</td>
                  <td>Ing (Elisa)</td>
                  <td>Ing (Elisa)</td>
                  <td>LPBL3 (Filipe)</td>
                  <td>LPBL3 (Filipe)</td>
                  <td>Port (Elisa)</td>
                  <td>Proj.V (Viviane)</td>
              </tr>
          </tbody>
      </table>
    `;
  });

  lembretesBtn.addEventListener("click", () => {
    contentTitle.textContent = "Lembretes";
    contentText.innerHTML = "<p></p>";
  });

  trabalhosBtn.addEventListener("click", () => {

    contentTitle.textContent = "Trabalhos";
    contentText.innerHTML = `
      <p><strong>Trabalho Bimestral História do 1º ano médio:</strong> Unidade 4 do caderno 1 - Oriente Médio: Império Bizantino (Pg 51 a 53).</p>
      <p>Deve conter Capa com nome, sobrenome, número, série, sala e o tema do trabalho.</p>
      <p><strong>Conteúdo:</strong> Abordar todos os tópicos da apostila e dissertá-los. Caso queira adicionar mais conteúdo, faça uma bibliografia.</p>
      <p>Pode ser digitado ou manuscrito.</p>
      <p><strong>ENTREGAR DIA:</strong> 18/03/25</p>
      
      <hr> <!-- Linha para separar os trabalhos -->
  
      <p><strong>Trabalho Bimestral Filosofia do 1º ano médio:</strong> Unidade 2 do caderno 1 - Diálogos entre mito, Arte e Filosofia (Pg 21 a 35).</p>
      <p>Deve conter Capa com nome, sobrenome, número, série, sala e o tema do trabalho.</p>
      <p><strong>Conteúdo:</strong> Abordar todos os tópicos da apostila e dissertá-los. Caso queira adicionar mais conteúdo, faça uma bibliografia.</p>
      <p>Pode ser digitado ou manuscrito.</p>
      <p><strong>ENTREGAR DIA:</strong> 18/03/25</p>
    `;
  });

  provasBtn.addEventListener("click", () => {
    contentTitle.textContent = "Provas";
  
    contentText.innerHTML = `
      <h2>Prova de Matemática</h2>
      <p><strong>Data:</strong> 17/02/2025</p>
      <p><strong>Tópicos a serem estudados:</strong></p>
      <ul>
        <li>Equação do 2º grau - <a href="https://www.youtube.com/watch?v=HCylt5HtFMs" target="_blank">Vídeo explicativo</a></li>
        <li>MMC (Mínimo Múltiplo Comum) - <a href="https://www.youtube.com/watch?v=Ao7Sz3gdmNY" target="_blank">Vídeo explicativo</a></li>
        <li>Notação científica - <a href="https://www.youtube.com/watch?v=MLBLD38UP_0" target="_blank">Vídeo explicativo</a></li>
        <li>MDC (Máximo Divisor Comum) - <a href="https://www.youtube.com/watch?v=La_EvMyv1lQ" target="_blank">Vídeo explicativo</a></li>
        <li>Expressões numéricas - <a href="https://www.youtube.com/watch?v=qPp4dbLSva0" target="_blank">Vídeo explicativo</a></li>
        <li>Sistemas lineares - <a href="https://www.youtube.com/watch?v=7CvjlSivFlQ" target="_blank">Vídeo explicativo</a></li>
      </ul>
      <p>Durante a prova, você pode usar um papel com os exemplos que a professora passou no quadro e calculadora.</p>
    `;
  });
  

 // Botões das matérias

document.getElementById("matematica").addEventListener("click", () => {
  contentTitle.textContent = "Matemática";
  contentText.innerHTML = "<p></p>";
});

document.getElementById("portugues").addEventListener("click", () => {
  contentTitle.textContent = "Português";
  contentText.innerHTML = "<p></p>";
});

document.getElementById("geografia").addEventListener("click", () => {
  contentTitle.textContent = "Geografia";
  contentText.innerHTML = "<p></p>";
});

document.getElementById("historia").addEventListener("click", () => {
  contentTitle.textContent = "História";
  contentText.innerHTML = "<p></p>";
});

document.getElementById("fisica").addEventListener("click", () => {
  contentTitle.textContent = "Física";
  contentText.innerHTML = "<p></p>";
});

document.getElementById("quimica").addEventListener("click", () => {
  contentTitle.textContent = "Química";
  contentText.innerHTML = "<p></p>";
});

document.getElementById("biologia").addEventListener("click", () => {
  contentTitle.textContent = "Biologia";
  contentText.innerHTML = "<p></p>"; 
});


document.getElementById("filosofia").addEventListener("click", () => {
  contentTitle.textContent = "Filosofia";
  contentText.innerHTML = "<p></p>";
});

document.getElementById("sociologia").addEventListener("click", () => {
  contentTitle.textContent = "Sociologia";
  contentText.innerHTML = "<p></p>";
});

document.getElementById("ingles").addEventListener("click", () => {
  contentTitle.textContent = "Inglês";
  contentText.innerHTML = "<p></p>";
});

document.getElementById("artes").addEventListener("click", () => {
  contentTitle.textContent = "Artes";
  contentText.innerHTML = `
    <div class="conteudo-aula">
        <h2>Aula 1 – 10/02 a 14/02</h2>
        <p><strong>Prof° Janaina Queiroz - Arte</strong></p>
        <h3>Arte, Poder e Identidade</h3>

        <p><strong>Assista:</strong> <a href="https://www.youtube.com/watch?v=AIhxNGIoH0A" target="_blank">Clique aqui para assistir</a></p>

        <h3>Atividade</h3>
        <p><strong>Responda as questões abaixo, no caderno de arte.</strong></p>

        <!-- Botão para download do PDF -->
        <a href="Aula_Arte.pdf" download class="download-btn">📄 Baixar PDF da Aula</a>
    </div>
  `;
});


document.getElementById("ascl").addEventListener("click", () => {
  contentTitle.textContent = "ASCL";
  contentText.innerHTML = "<p></p>"
});


document.getElementById("lpbl").addEventListener("click", () => {
  contentTitle.textContent = "LPBL";
  contentText.innerHTML = "<p></p>"
});

  subjects.forEach(subject => {
    const button = document.getElementById(subject);
    if (button) {
      button.addEventListener("click", () => {
        contentTitle.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
        contentText.innerHTML = `<p>Conteúdo de ${subject}</p>`;
      });
    }
  });

  // Alternar tema
  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleThemeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

});