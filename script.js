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
      <p><strong>📖 Trabalho Bimestral História do 1º ano médio:</strong> Unidade 4 do caderno 1 - Oriente Médio: Império Bizantino (Pg 51 a 53).</p>
      <p>Deve conter Capa com nome, sobrenome, número, série, sala e o tema do trabalho.</p>
      <p><strong>Conteúdo:</strong> Abordar todos os tópicos da apostila e dissertá-los. Caso queira adicionar mais conteúdo, faça uma bibliografia.</p>
      <p>Pode ser digitado ou manuscrito.</p>
      <p><strong>ENTREGAR DIA:</strong> 18/03/25</p>
      
      <hr> <!-- Linha para separar os trabalhos -->
  
      <p><strong>📖 Trabalho Bimestral Filosofia do 1º ano médio:</strong> Unidade 2 do caderno 1 - Diálogos entre mito, Arte e Filosofia (Pg 21 a 35).</p>
      <p>Deve conter Capa com nome, sobrenome, número, série, sala e o tema do trabalho.</p>
      <p><strong>Conteúdo:</strong> Abordar todos os tópicos da apostila e dissertá-los. Caso queira adicionar mais conteúdo, faça uma bibliografia.</p>
      <p>Pode ser digitado ou manuscrito.</p>
      <p><strong>ENTREGAR DIA:</strong> 18/03/25</p>

<hr> <!-- Linha para separar os trabalhos -->

          <div class="trabalho">
      <h3>📖 Inglês</h3>
      <p><strong>Páginas 33 e 34:</strong> Copiar ou responder no caderno.</p>
      <p><strong>Entrega:</strong> 28/02/25</p>
    </div>

    `;
  });

  provasBtn.addEventListener("click", () => {
    contentTitle.textContent = "Provas";
  
    contentText.innerHTML = `

      <h3>🧮 Matemática</h3>
      <p><strong>Data:</strong> 17/02/2025</p>
      <p><strong>Conteúdo:</strong></p>
      <ul>
        <li>Equação do 2º grau - <a href="https://www.youtube.com/watch?v=HCylt5HtFMs" target="_blank">Vídeo explicativo</a></li>
        <li>MMC - <a href="https://www.youtube.com/watch?v=Ao7Sz3gdmNY" target="_blank">Vídeo explicativo</a></li>
        <li>Notação científica - <a href="https://www.youtube.com/watch?v=MLBLD38UP_0" target="_blank">Vídeo explicativo</a></li>
        <li>MDC - <a href="https://www.youtube.com/watch?v=La_EvMyv1lQ" target="_blank">Vídeo explicativo</a></li>
        <li>Expressões numéricas - <a href="https://www.youtube.com/watch?v=qPp4dbLSva0" target="_blank">Vídeo explicativo</a></li>
        <li>Sistemas lineares - <a href="https://www.youtube.com/watch?v=7CvjlSivFlQ" target="_blank">Vídeo explicativo</a></li>
      </ul>
        <p>Durante a prova, você pode usar um papel com os exemplos que a professora passou no quadro e calculadora.</p>
    </div>

        <div class="prova">
      <h3>📖 Inglês</h3>
      <p><strong>Data:</strong> 14/03/2025</p>
      <p><strong>Conteúdo:</strong> Páginas 2 a 13.</p>
    </div>


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
            <h2>Aula 1 - 10/02 a 14/02</h2>
            <p><strong>Profª Janaina Queiroz - Arte</strong></p>
            <h3>Arte, Poder e Identidade</h3>
            Imagens da Aula</h3>
            <img src="imagem_9.jpg" alt="Imagem da aula de arte">
              <img src="imagem_7.jpg" alt="Imagem Guerrilha Girls">
            <img src="imagem_6.jpg" alt="Imagem da aula de arte">
            <img src="imagem_3.jpg" alt="Imagem da aula de arte">
            <img src="imagem_1.jpg" alt="Imagem da aula de arte">
            

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

  // Alternar tema
  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleThemeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // Ajustar a posição do botão de tema no celular
  function ajustarPosicaoBotaoTema() {
    if (window.innerWidth <= 768) {
      toggleThemeBtn.classList.add("bottom-theme"); // Coloca na parte inferior
    } else {
      toggleThemeBtn.classList.remove("bottom-theme"); // Mantém no topo no PC
    }
  }

  // Chama a função ao carregar e ao redimensionar a tela
  ajustarPosicaoBotaoTema();
  window.addEventListener("resize", ajustarPosicaoBotaoTema);
});