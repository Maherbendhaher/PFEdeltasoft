import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseAComponent } from './classe-a.component';

describe('ClasseAComponent', () => {
  let component: ClasseAComponent;
  let fixture: ComponentFixture<ClasseAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
