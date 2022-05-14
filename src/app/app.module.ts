import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CodeblockComponent } from './codeblock/codeblock.component';
import { MovieBlockComponent } from './movie-block/movie-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterBoxComponent } from './character-box/character-box.component';
import { TodoItemComponent } from './todo-item/todo-item.component'

@NgModule({
  declarations: [
    AppComponent,
    CodeblockComponent,
    MovieBlockComponent,
    CharacterBoxComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
