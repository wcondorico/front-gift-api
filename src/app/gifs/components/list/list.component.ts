import { Component, inject } from '@angular/core';
import { GifsListService } from '../../services/gif-list-service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  private readonly gifService: GifsListService = inject(GifsListService)
  
  get gifList(){
    return this.gifService.gifList
  } 
 
  
}
