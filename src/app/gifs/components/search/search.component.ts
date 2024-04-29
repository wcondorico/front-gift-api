import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { GifsListService } from '../../services/gif-list-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  private readonly searchServ: SearchService = inject(SearchService)
  private readonly giflist: GifsListService = inject(GifsListService)

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  
  searchTag(){ 
    const regex = /^[A-Za-z1-9\s]+$/;
    const newSearch = this.tagInput.nativeElement.value
      
    if (regex.test(newSearch)) {
      this.searchServ.addNewSearch(newSearch)
      this.giflist.showList(newSearch)
      this.tagInput.nativeElement.value = ''
      this.saveLocalStorage()
    } else{
      alert('Ingresa un nombre válido')
    }
  }

  private saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify(this.searchServ.searchList));
  }

}
