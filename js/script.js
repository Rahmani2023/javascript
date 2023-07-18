const pokemonList = [
  { name: "Charizard", height: 1.7, types: ["fire", "flying"] },
  { name: "Fearow", height: 1.2, types: ["flying", "normal"] },
  { name: "Ninetales", height: 1.1, types: ["fire"] },
];

document.write("<div class='pokedex'>");

for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    pokemonList[i].name + " (height " + pokemonList[i].height + ")"
  );

  if (pokemonList[i].height >= 1.5) {
    document.write(" wow that is big ");
  }

  document.write("<br>");
}

document.write("</div>");
