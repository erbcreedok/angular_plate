import { Component, OnInit } from '@angular/core'
import { Character } from '../../types'



@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styles: [`
    div {
      border: 1px solid green;
    }
  `]
})
export class CodeblockComponent implements OnInit {
  name = 'Yerbol'
  characters: Character[] = []


  ngOnInit() {
    fetch(`https://www.breakingbadapi.com/api/characters`).then(res => res.json()).then((data) => this.characters = data)
  }

  onButtonClick() {
    this.characters.unshift({
      name: this.name,
      status: 'Alive'
    })
    this.name = ''
  }

  getCharacterColor(character: Character) {
    if (character.status === 'Alive') return 'green'
    if (character.status === 'Deceased') return 'red'
    if (character.status === 'Presumed dead') return 'orange'
    return 'black'
  }
}
