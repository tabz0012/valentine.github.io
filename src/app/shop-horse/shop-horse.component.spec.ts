import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHorseComponent } from './shop-horse.component';

describe('ShopHorseComponent', () => {
  let component: ShopHorseComponent;
  let fixture: ComponentFixture<ShopHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHorseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
