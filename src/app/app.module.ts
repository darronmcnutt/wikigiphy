import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchHistoryComponent } from './search-history/search-history.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';

import { HistoryService } from './history.service';
import { WikisearchService } from './wikisearch.service';
import { GiphysearchService } from './giphysearch.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: SearchHistoryComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HistoryService, WikisearchService, GiphysearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
