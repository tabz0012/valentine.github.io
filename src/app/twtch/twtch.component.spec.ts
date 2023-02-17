import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwtchComponent } from './twtch.component';

describe('TwtchComponent', () => {
  let component: TwtchComponent;
  let fixture: ComponentFixture<TwtchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwtchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwtchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
