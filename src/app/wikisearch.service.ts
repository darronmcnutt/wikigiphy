import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikisearchService {
  wikiURL: string;

  constructor(private http: HttpClient) {
    this.wikiURL =
         'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=';
  }

  doSearch(searchText) {
    const query = `${this.wikiURL}/${searchText}`;
    const resultsObs = this.http.get(query).pipe(
      map(response => response['query'].search.map(result => result['title'])));
    return resultsObs;
  }
}
