import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseaComponent } from './classea.component';

describe('ClasseaComponent', () => {
  let component: ClasseaComponent;
  let fixture: ComponentFixture<ClasseaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
