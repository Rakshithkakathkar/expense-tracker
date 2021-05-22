import { Component, OnInit } from '@angular/core';
import { IStock } from '../stock';
import { STOCKS } from '../mock-stocks';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stocks = STOCKS;
  constructor() { }

  ngOnInit(): void {
  }


}
