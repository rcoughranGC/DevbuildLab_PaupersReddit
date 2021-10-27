import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  Results } from './result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaupersReddit';

  results?: Results;


  constructor(private http: HttpClient){ }

  getResults(){
    this.http.get<Results>('https://www.reddit.com/r/aww/.json').subscribe(
      (reddits: Results) => {
        this.results = reddits;
      }
    )
  };
}

