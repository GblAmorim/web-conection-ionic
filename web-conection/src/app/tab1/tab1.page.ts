import { Component } from '@angular/core';
import { IPokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { CreateToast, IToastData } from '../utils/createToast.util';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  pokemon: IPokemon = {
    name: '',
    order: 0,
    height: 0,
    weight: 0,
    abilities: [],
    types: [],
    img_front: 'assets/images/quem_e_o_pokemon.jpg',
    img_back: 'assets/images/quem_e_o_pokemon.jpg',
  };
  isLoading = false;
  showBack = false;
  pokemonToSearch: string = '';

  private createToast = new CreateToast();

  constructor(private pokemonService: PokemonService) {}

  public getPokemonByName(): void {
    this.isLoading = true;

    const searchName = this.pokemonToSearch.toLowerCase();

    if (!searchName) {
      this.clearData();
      return;
    }

    this.pokemonService.getPokemonByName(searchName).subscribe(
      async (res) => {
        this.showBack = false;
        this.isLoading = false;
        this.pokemon = res.data;
      },
      async (error) => {
        this.isLoading = false;

        const toastData: IToastData = {
          message:
            error.status === 404 ? 'Pokémon não encontrado' : error.error,
          color: 'danger',
        };

        this.clearData();

        await this.createToast.create(toastData);

        console.log(error);
      }
    );
  }

  clearData(): void {
    this.pokemon = {
      name: '',
      order: 0,
      height: 0,
      weight: 0,
      abilities: [],
      types: [],
      img_front: 'assets/images/quem_e_o_pokemon.jpg',
      img_back: 'assets/images/quem_e_o_pokemon.jpg',
    };
  }

  turnImg(): void {
    this.showBack = !this.showBack;
  }
}
