import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  searchList: string[] = []

  addNewSearch(newSearch: string){
    if(this.searchList.includes(newSearch)){
      this.searchList = this.searchList.filter(tag => tag != newSearch )
    }
    this.searchList.unshift(newSearch)
  }

  deleteSearch(deleteSearch: string) {
    this.searchList = this.searchList.filter(word => word !== deleteSearch)
  }
}
