import { Component, Input, OnInit } from '@angular/core';
import { Results, OneResult } from '../result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() results?: OneResult;
  constructor() { }

  ngOnInit(): void {
  }

}
