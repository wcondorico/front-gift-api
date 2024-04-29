import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gifs, SearchInterface } from "../interfaces/gif-interface";

@Injectable({
  providedIn: 'root'
})
export class GifsListService {
  private http: HttpClient = inject(HttpClient)
  private apiKey: string = 'AVn8I3FwvpfGHXQVnLfKMQL01ttvshWt'
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs'

  
  gifList!: Gifs[]

  showList(searchWord: string){
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', searchWord)
    .set('limit', 10)
    
    this.http.get<SearchInterface>(`${this.serviceUrl}/search`, { params }).subscribe(resp => {
      this.gifList = resp.data
    })
  }

}