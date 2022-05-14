import { Component, Input, OnInit } from '@angular/core'
import { Character } from '../../types'

@Component({
  selector: 'app-character-box',
  templateUrl: './character-box.component.html',
  styleUrls: ['./character-box.component.scss']
})
export class CharacterBoxComponent implements OnInit {
  @Input() character: Character | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
