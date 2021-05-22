import { Component, OnInit } from '@angular/core';
import { IStock } from '../stock'

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stock: IStock = {
    name: 'ITC',
    price: 200,
    quantity: 25
  }
  constructor() { }

  ngOnInit(): void {
  }


}
