import { Component,HostListener } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent {
  shop;

  isShow: boolean;
  topPosToStartShowing = 100;
  
  constructor(public dataService: DataService) { }
  
  
  @HostListener('window:scroll')
    checkScroll() {
        
      // window의 scroll top
      // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.
  
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      console.log('[scroll]', scrollPosition);
      
      if (scrollPosition >= this.topPosToStartShowing) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  
    // TODO: Cross browsing
    gotoTop() {
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  
  ngOnInit(): void {
    this.shop = this.dataService. bundles;
    
  }
}
