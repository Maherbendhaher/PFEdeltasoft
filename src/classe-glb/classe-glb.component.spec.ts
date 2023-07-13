import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseGLBComponent } from './classe-glb.component';

describe('ClasseGLBComponent', () => {
  let component: ClasseGLBComponent;
  let fixture: ComponentFixture<ClasseGLBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseGLBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseGLBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
