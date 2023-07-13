import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseBComponent } from './classe-b.component';

describe('ClasseBComponent', () => {
  let component: ClasseBComponent;
  let fixture: ComponentFixture<ClasseBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
