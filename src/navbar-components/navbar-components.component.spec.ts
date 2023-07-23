import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponentsComponent } from './navbar-components.component';

describe('NavbarComponentsComponent', () => {
  let component: NavbarComponentsComponent;
  let fixture: ComponentFixture<NavbarComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
