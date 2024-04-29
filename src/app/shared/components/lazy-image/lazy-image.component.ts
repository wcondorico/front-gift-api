import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent {
  @Input() url?: string
  @Input() alt?: string

  hasLoaded: boolean = false

  onLoad(){
    this.hasLoaded=true
  }


}
