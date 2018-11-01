import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WikisearchService } from './wikisearch.service';
import { GiphysearchService } from './giphysearch.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router: Router) { }


}
