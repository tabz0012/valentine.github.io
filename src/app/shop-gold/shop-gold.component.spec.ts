import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGoldComponent } from './shop-gold.component';

describe('ShopGoldComponent', () => {
  let component: ShopGoldComponent;
  let fixture: ComponentFixture<ShopGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopGoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
