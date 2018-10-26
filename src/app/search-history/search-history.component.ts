import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  searches: any[];
  constructor(private historyService: HistoryService) {
    this.searches = historyService.get();
  }

  ngOnInit() {
  }

}
