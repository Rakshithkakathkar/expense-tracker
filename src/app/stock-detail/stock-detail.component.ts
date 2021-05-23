import { Component, OnInit, Input } from '@angular/core';
import {IStock} from '../stock';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {

  @Input() stock?: IStock;
  constructor() { }

  ngOnInit(): void {
  }

}
