async function grabGamesLibrary() {
   const games_library = await fetch('games.json');
   const game_data = await games_library.json();
   return game_data.response.games;
}

let game_array =[];

grabGamesLibrary().then(realGames => {
    game_array = realGames;
})

const game_result = document.getElementById("results");
const pick_button = document.getElementById("pick-btn");

pick_button.addEventListener("click", (displayResults))

function displayResults() {
    game_result.textContent = game_array[getRandomInt()].name;
}

function getRandomInt() {
    return Math.floor(Math.random() * game_array.length);
}

