import { Component } from '@angular/core';
import { Pokedex } from './pokedex';



@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
     pokedex : Pokedex["bulbasaur"] = {
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      number:"001",
      name:"Bulbasaur",
      weight:"0.7 m",
      height:"69 kg",
      video: "https://media.tenor.com/6nHb-yHC2pkAAAAi/bulbasaur.gif",
      text : "grama e veneno"
    } as Pokedex["bulbasaur"]

     Ivysaur : Pokedex["Ivysaur"] = {
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        number: '002',
        name: 'Ivysaur',
        height: '1.0 m',
        weight: '13.0 kg',
        video: "https://64.media.tumblr.com/1d48bbe31fcec96ecfc2d4967d40183b/tumblr_nux74deMPv1scncwdo1_540.gifv",
        text : "grama e veneno"


  } as Pokedex["Ivysaur"]

  Venusaur : Pokedex["Venusaur"] = {
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    number: '003',
    name: 'Venusaur',
    height: '2.0 m',
    weight: '100.0 kg',
    video: "https://media.tenor.com/ukCijpKsjhEAAAAi/pokemon-venusaur.gif",
    text : "grama e veneno"


} as Pokedex["Venusaur"]

 Charmander : Pokedex["Charmander"] = {
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  number: '004',
  name: 'Charmander',
  height: '0.6 m',
  weight: '8.5 kg',
  video: "https://gifs.eco.br/wp-content/uploads/2022/04/gifs-do-charmander-6.gif",
  text : "fogo"


} as Pokedex["Charmander"]

Charmeleon : Pokedex["Charmeleon"] = {
  image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  number: '005',
  name: 'Charmeleon',
  height: '1.1 m',
  weight: '19.0 kg',
  video: "https://64.media.tumblr.com/a00892f48f92f5006d9f55e99b17253d/tumblr_nozmvuXqCf1scncwdo1_540.gifv",
  text : "fogo"


} as Pokedex["Charmeleon"]


  pokemons: Array<Pokedex["bulbasaur" | "Ivysaur" | "Venusaur" | "Charmander" | "Charmeleon" ]> = [this.pokedex, this.Ivysaur, this.Venusaur, this.Charmander, this.Charmeleon];


  inicio = 0;


  nextPokemon(): void {
    if (this.inicio < this.pokemons.length - 1) {
      this.inicio++;
    } else {
      this.inicio = 0;
    }
    this.pokedex = this.pokemons[this.inicio];
  }

  previousPokemon(): void {
    if (this.inicio > 0) {
      this.inicio--;
    } else {
      this.inicio = this.pokemons.length - 1;
    }
    this.pokedex = this.pokemons[this.inicio];
  }
}
