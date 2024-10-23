const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon");
  const pokemonInnerHTML = `
   <div class="img-container">
        <img
        src="https://images.unsplash.com/photo-1729508418289-75baec809821?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"
        alt="Bulba"
          />
    </div>
    <div class="info">
        <span class="number">#001</span>
        <h3>Bulbasaur</h3>
        <small class="type">Type: <span>grass</span></small>
    </div>
   `;

  card.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(card);
}
fetchPokemons();
