import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockVinComponent } from './stock-vin.component';

describe('StockVinComponent', () => {
  let component: StockVinComponent;
  let fixture: ComponentFixture<StockVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockVinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
