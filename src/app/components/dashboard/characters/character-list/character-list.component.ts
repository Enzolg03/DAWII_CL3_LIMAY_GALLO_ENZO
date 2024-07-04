import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'status', 'species','type','gender'];
  characters: Character[] = [];

  constructor(private CharacterService : CharacterService){}
  
  ngOnInit(): void {
    this.CharacterService.getAllCharacters().subscribe((data) => {
      this.characters = this.filterCharactersBySpecies(data, "Human");
    });
  }
  private filterCharactersBySpecies(characters: Character[], species: string): Character[] {
    return characters.filter(character => character.species === species);
  }
  
}
