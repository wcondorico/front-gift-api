import { Component, Input } from '@angular/core';
import { Gifs } from '../../interfaces/gif-interface';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent {

  @Input() item!: Gifs

}
