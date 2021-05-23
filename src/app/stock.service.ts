import { Injectable } from '@angular/core';
import { IStock } from './stock';
import { STOCKS } from './mock-stocks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  getStocks(): Observable<IStock[]> {
    const stocks = of(STOCKS);
    return stocks;
  }

  getStock(id: number): Observable<IStock> {
    const stock = STOCKS.find(s => s.id === id)!;
    return of(stock);
  }
}
