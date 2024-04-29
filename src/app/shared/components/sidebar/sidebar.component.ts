import { Component, OnInit, inject } from '@angular/core';
import { SearchService } from '../../../gifs/services/search.service';
import { GifsListService } from '../../../gifs/services/gif-list-service.service';

@Component({
  selector: 'app-sidevar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit{
  private readonly listServ: SearchService = inject(SearchService)
  private readonly newSearch: GifsListService= inject(GifsListService)
  
  get listSearch(): string[]{
    return this.listServ.searchList
  }
  
  ngOnInit(): void {
    this.loadLocalStorage()
    this.newSearch.showList(this.listSearch[0])
  }
  
  searchButton(word: string): void{
    this.newSearch.showList(word)
    this.listServ.addNewSearch(word)
    localStorage.setItem('history', JSON.stringify(this.listSearch));
  }

  loadLocalStorage() {
    this.listServ.searchList = JSON.parse( localStorage.getItem('history')! )
  }

  deleteOfLocalStorage(word: string) {
    localStorage.setItem('history', JSON.stringify(this.listServ.searchList))
  }

  deleteSearch(word: string) {
    this.listServ.deleteSearch(word);
    this.deleteOfLocalStorage(word);
  } 

}
