import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseGLAComponent } from './classe-gla.component';

describe('ClasseGLAComponent', () => {
  let component: ClasseGLAComponent;
  let fixture: ComponentFixture<ClasseGLAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseGLAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseGLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
