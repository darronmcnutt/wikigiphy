import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphysearchService {
  giphyURL: string;
  giphyParams: string;
  giphyAPI: string;

  constructor(private http: HttpClient) {
    this.giphyURL = 'https://api.giphy.com/v1/gifs/search?api_key=';
    this.giphyParams = 'limit=5&offset=0&rating=G&lang=en';
    this.giphyAPI = '1ITrFnOALxb0lIKvxGLA3mgpKJCLQAw9';
  }

  doSearch(searchText) {
    const query = `${this.giphyURL}${this.giphyAPI}&q=${searchText}&${this.giphyParams}`;
    const resultsObs = this.http.get(query)
                                .pipe(map(response => response['data']
                                .map(result => result['images']['original']['url'])));
    return resultsObs;
  }

}
