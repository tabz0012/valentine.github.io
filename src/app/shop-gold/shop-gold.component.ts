import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shop-gold',
  templateUrl: './shop-gold.component.html',
  styleUrls: ['./shop-gold.component.css']
})
export class ShopGoldComponent {
  gold;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.gold = this.dataService. gold;
    
  }
}
