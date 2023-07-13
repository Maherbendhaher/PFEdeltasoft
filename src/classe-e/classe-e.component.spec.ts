import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseEComponent } from './classe-e.component';

describe('ClasseEComponent', () => {
  let component: ClasseEComponent;
  let fixture: ComponentFixture<ClasseEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
