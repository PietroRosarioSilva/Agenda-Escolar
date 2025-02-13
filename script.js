const toggleThemeBtn = document.getElementById("toggle-theme");
const toggleMenuBtn = document.getElementById("toggle-menu");
const sidebar = document.getElementById("sidebar");

const homeBtn = document.getElementById("home");
const lembretesBtn = document.getElementById("lembretes");
const trabalhosBtn = document.getElementById("trabalhos");
const provasBtn = document.getElementById("provas");

const contentTitle = document.getElementById("content-title");
const contentText = document.getElementById("content-text");

// Botões de navegação principais
homeBtn.addEventListener("click", () => {
  contentTitle.textContent = "Bem-vindo à Agenda Escolar!";
  contentText.innerHTML = "<p> </p>";
});

lembretesBtn.addEventListener("click", () => {
  contentTitle.textContent = "Lembretes";
  contentText.innerHTML = "<p>Veja seus lembretes importantes aqui.</p>";
});

trabalhosBtn.addEventListener("click", () => {
  contentTitle.textContent = "Trabalhos";
  contentText.innerHTML = "<p>Confira seus trabalhos de cada matéria.</p>";
});

provasBtn.addEventListener("click", () => {
  contentTitle.textContent = "Provas";
  contentText.innerHTML = "<p>Fique atento às datas das suas provas.</p>";
});

// Botões das matérias
document.getElementById("matematica").addEventListener("click", () => {
  contentTitle.textContent = "Matemática";
  contentText.innerHTML = "<p>Bem-vindo à Matemática! Aqui você aprenderá sobre álgebra, geometria e muito mais.</p>";
});

document.getElementById("portugues").addEventListener("click", () => {
  contentTitle.textContent = "Português";
  contentText.innerHTML = "<p>Bem-vindo ao Português! Estude gramática, literatura e interpretação de textos.</p>";
});

document.getElementById("geografia").addEventListener("click", () => {
  contentTitle.textContent = "Geografia";
  contentText.innerHTML = "<p>Bem-vindo à Geografia! Vamos explorar os continentes, clima, e a dinâmica dos países.</p>";
});

document.getElementById("historia").addEventListener("click", () => {
  contentTitle.textContent = "História";
  contentText.innerHTML = "<p>Bem-vindo à História! Descubra as grandes civilizações e eventos históricos que moldaram o mundo.</p>";
});

document.getElementById("fisica").addEventListener("click", () => {
  contentTitle.textContent = "Física";
  contentText.innerHTML = "<p>Bem-vindo à Física! Estude os princípios das leis naturais, como a gravidade e a luz.</p>";
});

document.getElementById("quimica").addEventListener("click", () => {
  contentTitle.textContent = "Química";
  contentText.innerHTML = "<p>Bem-vindo à Química! Aprenda sobre reações químicas, elementos e suas propriedades.</p>";
});

document.getElementById("biologia").addEventListener("click", () => {
  contentTitle.textContent = "Biologia";
  contentText.innerHTML = "<p>Bem-vindo à Biologia! Explore os seres vivos, sua evolução e os sistemas biológicos.</p>";
});

document.getElementById("filosofia").addEventListener("click", () => {
  contentTitle.textContent = "Filosofia";
  contentText.innerHTML = "<p>Bem-vindo à Filosofia! Questione a vida e a existência através das ideias de grandes pensadores.</p>";
});

document.getElementById("sociologia").addEventListener("click", () => {
  contentTitle.textContent = "Sociologia";
  contentText.innerHTML = "<p>Bem-vindo à Sociologia! Entenda as relações sociais, culturas e organizações humanas.</p>";
});

document.getElementById("ingles").addEventListener("click", () => {
  contentTitle.textContent = "Inglês";
  contentText.innerHTML = "<p>Bem-vindo ao Inglês! Estude a língua inglesa e suas várias nuances.</p>";
});

document.getElementById("educacao").addEventListener("click", () => {
  contentTitle.textContent = "Educação Física";
  contentText.innerHTML = "<p>Bem-vindo à Educação Física! Vamos estudar sobre o corpo humano, esportes e saúde.</p>"
});

// Alternar tema
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleThemeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Ocultar/Mostrar menu lateral
toggleMenuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});
