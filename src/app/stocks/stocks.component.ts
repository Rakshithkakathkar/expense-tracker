import { Component, OnInit } from '@angular/core';
import { IStock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stocks: IStock[] =[];
  selectedStock?: IStock;
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(): void {
    this.stockService.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }

  onSelect(stock: IStock): void {
    this.selectedStock = stock;
  }

}
