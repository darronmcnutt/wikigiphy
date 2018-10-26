import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WikisearchService } from '../wikisearch.service';
import { GiphysearchService } from '../giphysearch.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  searches: any[];
  wikiResults: string[];
  giphyResults: string[];

  constructor(private fb: FormBuilder,
              private wikiService: WikisearchService,
              private giphyService: GiphysearchService,
              private historyService: HistoryService) {
      this.searchForm = fb.group({
        'searchText': ['']
      });

      this.searches = [];
      this.wikiResults = [];
      this.giphyResults = [];
  }

  onSubmit(value) {
    this.historyService.push(value.searchText); 
    this.wikiService.doSearch(value.searchText).subscribe(results => this.wikiResults = results);
    this.giphyService.doSearch(value.searchText).subscribe(results => this.giphyResults = results);
  }

  ngOnInit() {
  }

}
