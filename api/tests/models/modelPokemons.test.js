const { Pokemons } = require('../../src/db');

describe("Modelo Pokemons", () => {
  beforeAll(async () => {
    await Pokemons.sync({ force: true });
  });

  describe("Model Country", () => {
    it("Debe existir", () => {
      expect(Pokemons).toBeDefined();
    });

    it("Debe tener las propiedades correctas", async () => {
      const newPokemon = await Pokemons.create({
        id: "1",
        name: "bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
        health: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        height: 7,
        weight: 69,
      });

      expect(newPokemon.id).toBe(1);
      expect(newPokemon.name).toBe("bulbasaur");
      expect(newPokemon.image).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png");
      expect(newPokemon.health).toBe(45);
      expect(newPokemon.attack).toBe(49);
      expect(newPokemon.defense).toBe(49);
      expect(newPokemon.speed).toBe(45);
      expect(newPokemon.height).toBe(7);
      expect(newPokemon.weight).toBe(69)
    });
  });
});
