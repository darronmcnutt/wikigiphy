import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WikisearchService } from './wikisearch.service';
import { GiphysearchService } from './giphysearch.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchForm: FormGroup;
  searches: any[];
  wikiResults: string[];
  giphyResults: string[];

  constructor(private fb: FormBuilder,
              private wikiService: WikisearchService,
              private giphyService: GiphysearchService) {

    this.searchForm = fb.group({
      'searchText': ['']
    });

    this.searches = [];
    this.wikiResults = [];
    this.giphyResults = [];
  }

  onSubmit(value) {
    this.searches.push({searchText: value.searchText, timestamp: new Date()});
    this.wikiService.doSearch(value.searchText).subscribe(results => this.wikiResults = results);
    this.giphyService.doSearch(value.searchText).subscribe(results => this.giphyResults = results);
  }
}
