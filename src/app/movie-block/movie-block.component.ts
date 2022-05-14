import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  styleUrls: ['./movie-block.component.scss']
})
export class MovieBlockComponent implements OnInit {
  title = "Avengers"

  constructor() { }

  ngOnInit(): void {
    console.log('hello, im inited, my title is ', this.title)
  }

}
