
}
// Datos de partidos de ejemplo
const games = [
  { id: 1, teamA: "Pumas", teamB: "Santos" },
  { id: 2, teamA: "Pachuca", teamB: "Cruz Azul" },
  { id: 3, teamA: "San Luis", teamB: "Monterrey" },
  { id: 3, teamA: "Puebla", teamB: "León" },
  { id: 3, teamA: "Querétaro", teamB: "Mazatlán" },
  { id: 3, teamA: "Necaxa", teamB: "América" },
  { id: 3, teamA: "Tigres", teamB: "Atlas" },
  { id: 3, teamA: "Chivas", teamB: "Juárez" },
  { id: 3, teamA: "Tijuana", teamB: "Toluca" },
];

// Referencias al DOM
const form = document.getElementById("quinielaForm");
const resultSection = document.getElementById("results");
const resultList = document.getElementById("resultList");
const submitButton = document.getElementById("submitQuiniela");
const resetButton = document.getElementById("reset");

// Generar partidos en el formulario
function renderGames() {
  games.forEach((game) => {
    const gameDiv = document.createElement("div");
    gameDiv.innerHTML = `
      <label>${game.teamA} vs ${game.teamB}</label>
      <select name="game-${game.id}" required>
        <option value="">Selecciona</option>
        <option value="${game.teamA}">Gana ${game.teamA}</option>
        <option value="Empate">Empate</option>
        <option value="${game.teamB}">Gana ${game.teamB}</option>
      </select>
    `;
    form.appendChild(gameDiv);
  });
}

// Manejar envío de quiniela
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const results = [];
  games.forEach((game) => {
    const prediction = formData.get(`game-${game.id}`);
    if (prediction) {
      results.push(`${game.teamA} vs ${game.teamB}: ${prediction}`);
    }
  });
  displayResults(results);
});

// Mostrar resultados
function displayResults(results) {
  resultList.innerHTML = "";
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result;
    resultList.appendChild(li);
  });
  form.classList.add("hidden");
  submitButton.classList.add("hidden");
  resultSection.classList.remove("hidden");
}

// Reiniciar quiniela
resetButton.addEventListener("click", () => {
  form.reset();
  form.classList.remove("hidden");
  submitButton.classList.remove("hidden");
  resultSection.classList.add("hidden");
});

// Inicializar
renderGames();
